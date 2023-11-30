class Stack{
    constructor(){
        this.items=new Array(5);
        this.top =-1;
    }
    push(item){
        if(this.items.length ==+this.top){
            console.log("Stack Overflow");
        }
        this.top++;
        this.items[this.top] = item;
    }

    pop(){
        if(this.top ==-1){
            console.log("Stack Underflow");
        }
        let data = this.items[this.top];
        this.top--;
        return data;
    }

    peek(){
        if(this.top==-1){
            console.log("Nothing to show");
        }
        return this.items[this.top];
    }
    
}

let stack = new Stack();
let stack1 = new Stack();
stack.push(10);
stack1.push(13);
stack.push(11);
stack.push(12);
for(let i = 0; i <= stack.top; i++){
    console.log(stack.items[i]);
}

console.log("Push done");
console.log("popped out :"+stack.pop());
console.log("popped out :"+stack.pop());
for(let i = 0; i <= stack.top; i++){
    console.log(stack.items[i]);
}
console.log("Pop done");
console.log(stack.peek());

console.log("Peek done");
