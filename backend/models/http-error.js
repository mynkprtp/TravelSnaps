class HttpError extends Error {
    constructor(message,errorCode) {
        super(message); // Add a message property to error
        this.code = errorCode; // Add the error code as a property to error
    }
}

module.exports = HttpError;