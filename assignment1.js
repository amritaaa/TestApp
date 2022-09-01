// Add function with resst parameter and reducer
function add(...args){
    return args.reduce(function (acc,cur) {
        return acc*cur;
    });
}


//Memoize function
function memoize(fun){
    const cache= new Map();
    return function(...args){
        const key =args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }else{
            cache.set(key,fun(...args));
            return cache.get(key);
        }
    };

}


const memoizeAdd = memoize(add);

console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100,200,300,700,800,100,200));
console.log(memoizeAdd(100,100));
console.log(memoizeAdd(100,200,300,700,800,100,200));