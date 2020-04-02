import * as React from 'react';
import { HotelCollectionContainer } from './hotel-collection.container';
import { render, waitForElement } from '@testing-library/react';
import * as collectionhook from './hotel-collection.hook';

describe('HotelCollectionContainer specs', () => {
  it('No debería haber creado ninguna cartarta', () => {
    //Arrange
    //Act
    const { queryAllByTestId } = render(<HotelCollectionContainer />);

    const cartaHotelComponent = queryAllByTestId('cartahotel');
    // Assert
    expect(cartaHotelComponent).toHaveLength(0);
  });

  it('Debería renderizar un hotel con el nombre dado', async () => {
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
    const result = {
      hotelCollection: hotelCollectionToTest,
      loadHotelCollection: jest.fn(),
    };

    const getStub = jest
      .spyOn(collectionhook, 'useHotelCollection')
      .mockReturnValue(result);

    // Act
    const { queryAllByTestId } = render(<HotelCollectionContainer />);
    const cartaHotelComponent = queryAllByTestId('cartahotel');

    // Assert
    expect(getStub).toHaveBeenCalled();
    expect(cartaHotelComponent).not.toBeNull();
    expect(result.loadHotelCollection).toHaveBeenCalledTimes(1);
    expect(cartaHotelComponent).toHaveLength(1);
  });
});
