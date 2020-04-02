import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HotelCard } from './hotel-card.component';
import { HotelEntityVm } from '../hotel-collection.vm';

describe('hotel card component test', () => {
  it('deberia renderizar el hotel', () => {
    // Arrange
    const hotel: HotelEntityVm = {
      id: '123',
      picture: 'mifoto',
      name: 'nombre',
      description: 'description1',
      rating: 4,
      address: 'calle bilbao',
    };

    // Act
    const { getByText } = render(<HotelCard hotel={hotel} />);
    const nombreDeElemento = getByText(hotel.name);
    const descripcionDelElemento = getByText(hotel.description);
    const ratingElemento = getByText(hotel.rating.toString());

    // Assert
    expect(nombreDeElemento).toBeInTheDocument();
    expect(descripcionDelElemento).toBeInTheDocument();
    expect(ratingElemento).toBeInTheDocument();
  });
});
