// What is the output ? (closures)
for (var i = 0; i < 3; i++) {

    const log = () => {
        console.log(i);
    }

    setTimeout(log, 100);
}

// console.log = 3, 3, 3
// if its let it will be scooped only to for loop, output = 0, 1, 2.
// when var is used the output = 3, 3, 3.
// because the timeout doesnt run till 100ms later long after that for loop has completed.
// and iterated out to 3.