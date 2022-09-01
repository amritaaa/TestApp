function createIncrement() { 
    let count=0;

    function increment() {
        count++;
    }

    let message;
    
    function log() {
        message=`Count is ${count}`;
        console.log(message);
    }

    return[increment,log];
}

const[increment,log] =createIncrement();

increment(); //This will increase count variable value by 1
increment();
increment();
log();