function createStack() {
    //items will be accesssed by push and pop method, because of closure 
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }

//now stack will have only push and pap method
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); 
  //since there is no items attribute available in stack, it will return undefined
  stack.items;