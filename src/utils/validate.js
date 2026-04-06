export const checkValidData = (name, email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})&/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z]$/.test(name);

    if (!isNameValid) {
        return "Please enter a valid name";
    }

    if (!isEmailValid) {
        return "Email ID is not valid."
    }

    if (!isPasswordValid) {
        return "Password is not valid."
    }

    return null;
}