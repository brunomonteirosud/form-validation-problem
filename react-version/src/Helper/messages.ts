const getErrorMessage = (field: string, tigerSelected: boolean) => {
    switch (field) {
        case 'email':
            return "'Email' is not in a valid format.";
        case 'password':
            return "'Password' needs to have at least 8 characters.";
        case 'colour':
            return "'Colour' is a required field.";
        case 'animals':
            return "'Animals' needs to have at least 2 selections.";
        case 'tiger_type':
            if (tigerSelected) {
                return "'Tiger Type' is a required field.";
            }
            break;
        default:
            return '';
    }
    return '';
};
export default getErrorMessage;
