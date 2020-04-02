import { mapToCollection } from '.';

describe('collection mapper specs', () => {
  it('should return an array of numbers if I pass an array of  string', () => {
    ///Arrange
    const arrayToTest: string[] = ['0', '1'];
    const mapperToNumeric = jest.fn().mockImplementation(item => +item);
    // Act
    const result = mapToCollection(arrayToTest, mapperToNumeric);
    // Assert
    const arrayResult: number[] = [0, 1];

    expect(result).toEqual(arrayResult);
  });

  it('should return empty array if pass a undefined', () => {
    ///Arrange
    const mapperToNumeric = jest.fn().mockImplementation(item => +item);
    // Act
    const result = mapToCollection(undefined, mapperToNumeric);
    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array if pass a null', () => {
    const mapperToNumeric = jest.fn().mockImplementation(item => +item);
    // Act
    const result = mapToCollection(null, mapperToNumeric);
    // Assert
    expect(result).toEqual([]);
  });
});
