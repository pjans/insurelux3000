const validate = ({ kilometers, owners, model, periodStart, periodEnd }) => {
   let errors = {};
   if (!kilometers) { errors.kilometers = 'required'; }
   if (kilometers < 1000 || kilometers > 50000) {
      errors.kilometers = 'kilometers must be between 1000 and 50000';
   }
   if (!owners) { errors.owners = 'required'; }
   if (owners < 1 || owners > 10) {
      errors.owners = 'owners must be between 1 and 10';
   }
   if (!model || model === 'Choose model...') {
      errors.model = 'car model required';
   }
   if (!periodStart) {
      errors.periodStart = 'start date required';
   }
   if (!periodEnd) {
      errors.periodEnd = 'end date required';
   }
   return errors;
}

export default validate;