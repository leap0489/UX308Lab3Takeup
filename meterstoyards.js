// Take a variable with distance in **metres** as input and output the same distance *convert*ed to **yards**.

function convertMetersToYards(metres){
    let yards = metres * 1.09362;
    return yards;
}

console.log(`3 metres is ${convertMetersToYards(3)} yards`);

export {convertMetersToYards}