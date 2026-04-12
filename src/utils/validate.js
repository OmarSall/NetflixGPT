export const validateSignUp = (name, email, password) => {
    if (!/^[A-Z][a-zA-Z '.-]*[A-Za-z]$/.test(name)) {
        return "Please enter a valid name";
    }
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        return "Email ID is not valid.";
    }
    if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
        return "Password is not valid.";
    }
    return null;
};

export const validateSignIn = (email, password) => {
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        return "Email ID is not valid.";
    }
    if (!password) {
        return "Password is required.";
    }
    return null;
};