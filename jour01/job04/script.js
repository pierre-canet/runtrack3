function bisextile(année){
    if(année%400 === 0){
        return true
    }
    else if(année%100 === 0){
        return false
    }
    else if(année%4 === 0){
        return true
    }
    else{
        return false
    }
}

//tests
console.log(bisextile(2024)); // true
console.log(bisextile(1900)); // false
console.log(bisextile(2000)); // true
console.log(bisextile(2023)); // false