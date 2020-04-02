import * as React from 'react';
import { HotelEntityVm } from './hotel-collection.vm';
import { getHotelCollection } from './hotel-collection.api';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { mapToCollection } from '../../common/mappers';

export const useHotelCollection = () => {
  const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>(
    []
  );

  const loadHotelCollection = () => {
    getHotelCollection().then(result => {
      const map = mapToCollection(result, mapFromApiToVm);
      setHotelCollection(map);
    });
  };

  return { hotelCollection, loadHotelCollection };
};
