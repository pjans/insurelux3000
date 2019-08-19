import validate from '../validate';

describe("utils :: validate", () => {
   const testValues = {
      owners: undefined,
      kilometers: undefined,
      model: undefined,
   };

   it("should return error if owners is undefined", () => {
      const result = validate(testValues);
      expect(result.owners).toEqual('required');
   });

   it("should return error if kilometers is undefined", () => {
      const result = validate(testValues);
      expect(result.kilometers).toEqual('required');
   });

   it("should return error if model is undefined", () => {
      const result = validate(testValues);
      expect(result.model).toEqual('car model required');
   });

   it("should return empty error object if all fields are provided", () => {
      const correctValues = {
         owners: 3,
         kilometers: 3333,
         model: 'Corolla',
      };

      const result = validate(correctValues);
      expect(result).toStrictEqual({});
   });
});