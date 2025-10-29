function tri(numbers, order){
    
    if (order === "asc"){
        return numbers.sort((a, b) => a - b); // tri ascendant

    }
    else if (order === "desc"){
        return numbers.sort((a, b) => b - a); // tri descendant        
    }
}
console.log(tri([1, 3, 2], "desc"))

