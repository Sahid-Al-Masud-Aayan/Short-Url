const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter (A-Z).");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter (a-z).");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number (0-9).");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character (@, $, !, %, *, ?, &).");
    }

    return errors.length === 0 ? { valid: true } : { valid: false, errors };
};


module.exports= validatePassword