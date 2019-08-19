const validate = ({ kilometers, owners }) => {
    let errors = {};
    if (!kilometers) { errors.kilometers = 'Kilometers required'; } 
    if (kilometers < 1000 || kilometers > 50000) {
        errors.kilometers = 'Kilometers must be between 1000 and 50000';
    }
    if (!owners) { errors.owners = 'Owners required'; } 
    if (owners < 1 || owners > 10) {
        errors.owners = 'Owners must be between 1 and 10';
    }
    return errors;
}

export default validate;