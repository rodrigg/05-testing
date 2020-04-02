import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';
import '@testing-library/jest-dom/extend-expect';

describe('hotel card component test', () => {
  it('deberia renderizar los 2 hoteles', () => {
    // Arrange
    const hotel1: HotelEntityVm = {
      id: '1',
      picture: 'myPicture',
      name: 'despedida',
      description: 'descripcion1',
      rating: 4,
      address: 'c Bilbao',
    };
    const hotel2: HotelEntityVm = {
      id: '2',
      picture: 'myPicture',
      name: 'bienvenida',
      description: 'descripcion3',
      rating: 5,
      address: 'c Barakaldo',
    };
    const hotels: HotelEntityVm[] = [hotel1, hotel2];

    // Act
    const { getByText } = render(
      <HotelCollectionComponent hotelCollection={hotels} />
    );
    const elementName = getByText(hotel1.name);
    const elementDescription = getByText(hotel1.description);
    const elementRating = getByText(hotel1.rating.toString());
    const elementName2 = getByText(hotel1.name);
    const elementDescription2 = getByText(hotel1.description);
    const elementRating2 = getByText(hotel1.rating.toString());

    // Assert
    expect(elementName).toBeInTheDocument();
    expect(elementDescription).toBeInTheDocument();
    expect(elementRating).toBeInTheDocument();
    expect(elementName2).toBeInTheDocument();
    expect(elementDescription2).toBeInTheDocument();
    expect(elementRating2).toBeInTheDocument();
  });
});
