function counter() {
    let count = 0;
    function countI()
    {
        console.log(++count);
    }
    return countI;
}

const incrementCounter = counter();

incrementCounter();
incrementCounter();
incrementCounter();