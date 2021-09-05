const tossCoin = () => {
    return Math.random() > 0.5 ? "heads":"tails";
}

const fiveHeadsSync = () => {
    let count = 0;
    let attempts = 0;
    while(count < 5) {
        attempts++
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads"){
            count++;
        } else {
            count = 0;
        }
    }
    return `it took ${attempts} tries to flip five "heads"`;
}

const fiveHeadsAsync = () => {
    return new Promise ( (resolve, reject) => {
        let count = 0;
        let attempts = 0;
        if (attempts <= 100) {
            while(count < 5) {
                attempts++
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if(result === "heads"){
                    count++;
                } else {
                    count = 0;
                }
            }
            resolve(`it took ${attempts} tries to flip five "heads"`)
        } else {
            reject(`Sorry you are at maximum attempts(${attempts}) and you did not flip heads 5 times`)
        }
    })
}

fiveHeadsAsync()
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log("This runs before the promise resolves in the lines above it");