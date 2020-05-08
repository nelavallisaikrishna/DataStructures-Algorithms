/*basic example*/

// const n1 = {
//     data : 100
// };
//
// const n2 = {
//     data : 200
// }
//
// n1.next = n2
// console.log("-------------", n1)

var cl=console.log
const JSON = require('circular-json');
class Node{
    constructor(data){
        this.data=data;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.size= 0
    }

    pushMethod(data){
        let newnode = new Node(data)
        // cl("newnode",newnode)

        //specialcase if no nodes in the list
        if(!this.head){
            this.head = newnode;
            this.tail = newnode
        }else{
            // cl("this.tail",this.tail)
            newnode.prev = this.tail;
            this.tail.next = newnode;
            // cl("this.tail 11111111",this.tail)
            this.tail = newnode
            // cl("this.tail 2222",this.tail)
        }
        this.size++
    }


    insertAt(pos,data){
        let current= this.head;
        let count = 1;
        let newNode = new Node(data)
        if(pos == 0){
            // cl("here")
            // cl("current",current)
            // cl("this.head",this.head)
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode
        }else{
            while (current) {
                current = current.next

                //  cl("current----------",current)
                if(count == pos){
                    // cl("count",count,pos)
                    // cl("coming here current",current)
                    newNode.prev = current.prev;
                    newNode.next = current;
                    current.prev.next = newNode;
                    current.prev = newNode

                }
                count++
            }
        }
        this.size++
    }

    removeNode(data){
        let current = this.head;
        while (current){
            if(current.data == data){
                if(current == this.head && current == this.tail){
                    this.head = null;
                    this.tail=null
                    return
                }else if(current == this.head){
                    this.head = this.head.next;
                    this.head.prev = null
                }else if(current == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next = null
                }else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev
                }
            }
            current = current.next
        }
    }

    removeAtIndex(index){
        let current = this.head;
        let count=1;
        if(index == 0){
            this.head = this.head.next;
            this.head.prev = null;
        }else{
            while (current){
                current = current.next;
                if(current == this.tail){
                    this.tail = this.tail.prev;
                    this.tail.next=null
                }else if(count == index){
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break
                }
                count++
            }
        }

    }

    reverse(){
        let current = this.head;
        let prev = null;
        while( !current == null){
            let next = current.next
            cl("next",next)
            // cl("current-----",current)
            // current.next = prev
            // current.prev = next
            // prev = current
            // current = next
        }

        cl("this.head----",JSON.stringify(this.head))
        cl("this.tail----",JSON.stringify(this.tail))
        cl("prev----",prev)
        // cl("prev----",prev)
        //
        //this.tail = this.head
        // this.head = prev
    }



}

let ll = new doublyLinkedList()
ll.pushMethod(100)
ll.pushMethod(200)
ll.pushMethod(500)
ll.insertAt(2,600)
ll.reverse()
// ll.removeAtIndex(2)
// ll.removeNode(600)
// ll.insertAt(2,400)
// ll.insertAt(0,50)
//cl(ll)
cl(JSON.stringify(ll))

// ll.pushMethod(200)

//
// const llist = JSON.stringify(JSON.parse(ll));


// cl(ll)

var cl=console.log
class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next
    }
}
class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }

    //insert first node
    insertFirst(data){
        this.head=new Node(data, this.head)
        this.size++;
    }

    //insert last node
    insertAtLast(data){
        let node = new Node(data)
        let current;
        //if empty ,make it head
        if(this.head == null){
            this.head= data;
        }else{
            current = this.head;
            while (current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.size++;
    }

    //insert at index
    insertAtIndex(data,index){
        //index is out of range
        if(index > 0 && index > this.size){
            cl("out of index")
            return
        }
        //if first node
        if(index === 0){
            //this.head = this.insertFirst(data)
            this.head = new Node(data,this.head);
            return
        }

        let node = new Node(data)
        let prev,current;
        current = this.head;
        var count=0;
        while(count < index){
            prev = current;
            count++;
            current = current.next;
        }
        node.next = current;
        prev.next=node
        this.size++;
    }


    //get at index
    getAtIndex(index){
        let current = this.head;
        let count = 0;

        while (current.next != null){
            if(count == index){
                cl("the node is",current.data)
            }
            count++
            // cl("current",current)
            current = current.next
        }

        return null
    }

    //remove at
    removeAt(index){
        if(index > 0 && index > this.size){
            return
        }
        let current = this.head;
        let previous;
        let count = 0;

        // remove first
        if(index == 0){
            this.head = current.next;
        }else{
            while (count < index){
                cl("count",count)
                cl("index",index)
                count++;
                cl("current",current)
                previous = current;
                current = current.next
                cl("22222 current",current)
            }
            cl("4444444 previous",previous)
            cl("5555555 current",current)
            previous.next = current.next
        }
        this.size--;
    }


    //clear the list
    clearList(){
        this.head= null;
        this.size=0
    }

    //print bthe list
    printListData(){
        let current = this.head;
        // cl("111111111")
        while(current != null){
            //   cl("current data",current.data)
            current=current.next
        }
    }




}

let ll = new LinkedList()
ll.insertFirst(100)
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertAtLast(400)
ll.insertAtIndex(500,2)

ll.removeAt(2)
//ll.getAtIndex(10)
cl(JSON.stringify(ll))