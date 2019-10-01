export const validateEmail = (value: string) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.match(emailRegex)) {
        return false;
    }
    return true;
};

export const validatePassword = (value: string) => {
    return value.length > 7;
};

export const validateAnimals = (animals: object) => {
    const selectedAnimals = Object.values(animals).filter(value => {
        return value === true;
    });

    return selectedAnimals.length > 1;
};

export const validateTigerType = (
    tigerSelected: boolean,
    tigerValue: boolean
) => {
    if (!tigerSelected) {
        return true;
    }
    if (tigerSelected && !tigerValue) {
        return false;
    }
    if (tigerSelected && tigerValue) {
        return true;
    }
    return false;
};
