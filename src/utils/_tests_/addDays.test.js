import addDays from '../addDays';

describe("utils :: addDays", () => {
    const testString = '2018-04-23T10:00:00.511';
    
    it("should add 4 days", () => {
        const result = addDays(testString, 4);
        const fourDaysLater = new Date('2018-04-27T08:00:00.511Z')
        expect(result).toEqual(fourDaysLater);
    });
});