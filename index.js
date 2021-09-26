const sinon = 'sinon'
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, names){
    let result = drivers.filter(string => string.toLowerCase() === names.toLowerCase());
    return result;
}

function fuzzyMatch(driver, string) {
    let letters = driver.filter(beginningLetters => beginningLetters.substring(0,2) === string)
    return letters; 
}

function matchName(obj, string){
    return obj.filter( driver => driver.name === string);
}
