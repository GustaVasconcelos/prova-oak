class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class Validations {

    static validateFields(fields) {
        const emptyFields = fields.filter(field => typeof field !== 'string' || !field.trim());
    
        if (emptyFields.length > 0) {
            throw new ValidationError('Um ou mais campos estão vazios');
        }
    }
}

export { ValidationError, Validations };