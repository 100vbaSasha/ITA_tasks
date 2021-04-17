const { task1, task2, task3 } = require('./main');

describe('Tests for task # 1', () => {
    const testArray1 = [5, 35, 21, 56, 75, 70, 45, 32, 90, 105, 10, 14];
    const testArray2 = [0, 11, 5, 35, 100, 121, 140];
    const testArray3 = [0, 9, 70, 105, 700];
    it('Should be defined', () => {
        expect(task1(testArray1)).toBeDefined();
    });
    it('Should return 225 using the first array', () => {
        expect(task1(testArray1)).toBe(225);
    });
    it('Should return 105 using the second array', () => {
        expect(task1(testArray2)).toBe(105);
    });
    it('Should return 0 using the third array', () => {
        expect(task1(testArray3)).toBe(0);
    });
});
describe('Tests for task # 2', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    const testArray1 = [-3, -2, -1, 0, 4, 6, 8, 10, 14, 18, 19, 20, 22, 25, 26, 29, 31, 35];
    const testArray2 = [-10, 0, 10, 20, 30];
    const testArray3 = [-1, 0, 26];
    it('Should be defined', () => {
        expect(task2(array, testArray1)).toBeDefined();
    });
    it('Should return [4, 6, 8, 10, 14, 18, 19, 20, 22, 25] using the first test array', () => {
        expect(task2(array, testArray1)).toStrictEqual([4, 6, 8, 10, 14, 18, 19, 20, 22, 25]);
    });
    it('Should return [10, 20] using the second test array', () => {
        expect(task2(array, testArray2)).toStrictEqual([10, 20]);
    });
    it('Should return [] using the third test array', () => {
        expect(task2(array, testArray3)).toStrictEqual([]);
    });
})
describe('Tests for task # 3', () => {
    it('Should be defined', () => {
        expect(task3()).toBeDefined();
    });
    it('Should return [0, 1, 2, 3, 11, 22]', () => {
        expect(task3()).toStrictEqual([0, 1, 2, 3, 11, 22]);
    });
})