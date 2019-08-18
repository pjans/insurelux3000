import formatDate from '../formatDate';

describe("utils :: formatDate", () => {

    const testString = '2018-04-23T10:00:00.511';

    it("should return formated date", () => {
        const result = formatDate(testString);
        expect(result).toEqual('2018-4-23');
    });
});