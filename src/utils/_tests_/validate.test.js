import validate from '../validate';

describe("utils :: validate", () => {
    const testValues = {
        owners: undefined,
        kilometers: undefined,
    };

    it("should return error if owners is undefined", () => {
        const result = validate(testValues);
        expect(result.owners).toEqual('Owners required');
    });

    it("should return error if kilometers is undefined", () => {
        const result = validate(testValues);
        expect(result.kilometers).toEqual('Kilometers required');
    });
});