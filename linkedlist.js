class Node{
    constructor(input){
        this.data = input;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addNewNode(i, data){
        const newNode= new Node(data);
        if(this.head ==null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next= newNode;
            this.tail= newNode;
        }
    }


}
