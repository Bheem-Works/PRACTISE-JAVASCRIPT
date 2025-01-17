// coins flip 

function coins () {
    let num = Math.random();
    if(num < 0.5) {
        console.log('this is head');
    } else {
        console.log('this is tails');
    }
}
coins();