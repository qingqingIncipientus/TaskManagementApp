import Calculations from "./calculations";

// Please complete the following unit tests for the Calculations class:

fdescribe('Calculations', () =>
{
    it('should calculate the percentage standard deviation of a one-dimensional array', () =>
    {
        // TODO: Implement test

    });

    it('should calculate the percentage standard deviation of a two-dimensional array', () =>
    {
        // TODO: Implement test
        const array = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
        const actualValue: number = Calculations.calculatePercentageStandardDeviationOfTwoDimensionalArray(array);
        console.log(actualValue);
        expect(actualValue).toBeCloseTo(52, 0);

    });

    it('should calculate the zero crossing percentage of an array', () =>
    {
        // TODO: Implement test

    });

    it('should calculate the average of a two-dimensional array', () =>
    {
        // TODO: Implement test

    });

    it('should get the most frequent value at each subarray', () =>
    {
        // TODO: Implement test

    });

    it('should get the average value of the highest percentage of each subarray', () =>
    {
        // TODO: Implement test
        const array = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];

        const percentage = 20;
        const actualValue: number[] = Calculations.getAverageValueOfHighestPercentageOfEachSubarray(array, percentage);
        console.log(actualValue);
        expect(actualValue).toEqual([9.5, 9.5]);

    });

    fit('should get the average value of each subarray after removing the outliers', () =>
    {
        // TODO: Implement test
        const array = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 100],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 300]];
        const actualValue: number[] = Calculations.getAverageValueOfEachSubarryAfterRemovingOutliers(array);
        console.log(actualValue);
        expect(actualValue).toEqual([5, 5]);

    });

    it('should get the average value of each subarray after trimming percentage highest and lowest values', () =>
    {
        // TODO: Implement test

    });
});