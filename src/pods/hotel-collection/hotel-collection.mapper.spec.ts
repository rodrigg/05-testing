import * as api from './hotel-collection.api';
import * as vm from './hotel-collection.vm';
import { mapFromApiToVm } from './hotel-collection.mapper';
jest.mock('../../core', () => ({
  basePicturesUrl: 'http://localhost:3005',
}));
describe('collection mapper specs', () => {
  it('should return a correct vm if pass e', () => {
    const apitoTest: api.HotelEntityApi = {
      id: '1',
      type: '',
      name: 'Risk',
      created: null,
      modified: null,
      address1: 'La castellana',
      airportCode: '',
      amenityMask: 0,
      city: '',
      confidenceRating: 0,
      countryCode: '',
      deepLink: '',
      highRate: 0,
      hotelId: 0,
      hotelInDestination: false,
      hotelRating: 5,
      location: {
        latitude: 0,
        longitude: 0,
      },
      locationDescription: '',
      lowRate: 0,
      metadata: {
        path: '',
      },
      postalCode: 0,
      propertyCategory: 0,
      proximityDistance: 0,
      proximityUnit: '',
      rateCurrencyCode: '',
      shortDescription: 'El mejor hotel del mundo',
      stateProvinceCode: '',
      thumbNailUrl: '/risk',
      tripAdvisorRating: 0,
      tripAdvisorRatingUrl: '',
    };

    // Act
    const result = mapFromApiToVm(apitoTest);
    // Assert
    const expectedResult: vm.HotelEntityVm = {
      id: '1',
      picture: `http://localhost:3005/risk`,
      name: 'Risk',
      description: 'El mejor hotel del mundo',
      rating: 5,
      address: 'La castellana',
    };

    expect(result).toEqual(expectedResult);
  });
});
