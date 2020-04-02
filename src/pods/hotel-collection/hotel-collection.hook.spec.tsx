import { renderHook } from '@testing-library/react-hooks';
import { useHotelCollection } from './hotel-collection.hook';
import * as api from './hotel-collection.api';
import * as mapper from './hotel-collection.mapper';
import * as commonMapper from '../../common/mappers';

describe('use hotel collection', () => {
  it('debe inicializarse el listado de hoteles con array vacio', async () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useHotelCollection());
    // Assert
    expect(result.current.hotelCollection).toEqual([]);
  });

  it('se debe llamar a la api, al mapper de hoteles y al mapper de coleccion que debe devolver la llamada', async () => {
    // Arrange
    // Arrange
    const hotelCollectionToTest = [
      {
        id: 'prueba',
        picture: 'pruebaPicture',
        name: 'pruebaName',
        description: 'pruebaDescripcion',
        rating: 1,
        address: 'pruebaDireccion',
      },
    ];
    const getHotelCollectionSpy = jest
      .spyOn(api, 'getHotelCollection')
      .mockResolvedValue(undefined);
    jest.spyOn(mapper, 'mapFromApiToVm');
    const mapToCollectionSpy = jest
      .spyOn(commonMapper, 'mapToCollection')
      .mockReturnValue(hotelCollectionToTest);

    // Act
    const { result, waitForNextUpdate } = renderHook(() =>
      useHotelCollection()
    );
    result.current.loadHotelCollection();
    await waitForNextUpdate();

    // Assert
    expect(getHotelCollectionSpy).toHaveBeenCalled();
    expect(mapToCollectionSpy).toHaveBeenCalled();

    expect(result.current.hotelCollection).toEqual(hotelCollectionToTest);
  });
});
