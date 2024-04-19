class Node{
    constructor(val, next, fast, slow){
        this.val = val
        this.next = next
        this.slow = slow
        this.fast = fast
    }

    print(){                             // How to loop through a link list
        let curr = this 

        while(curr){
            console.log(curr.val)
            curr = curr.next
        }
    }

    addToEnd(node){                 //How to add a value at the end of an LL
        let curr = this
        let prev = null

        while(curr){
            prev = curr
            curr = curr.next
        }

        prev.next = node
    }

    removeByIndex(index){               //How to remove a value from a LL
        let curr = this
        let prev = null
        let i = 0

        while( i < index){
            prev = curr
            curr = curr.next
            i++
        }

        prev.next = prev.next.next 
    }

    AddAtIndex(index, node){//How to add another value at a specfic index to a LL
        let curr = this
        let prev = null
        let i = 0

        while( i < index){
            prev = curr
            curr = curr.next
            i++
        }

        node.next = curr
        prev.next = node 
    }


    palidrome(){            //How to make a palidrome in a LL                    
        let output = ""
        let curr = this 
        let value = []

        while(curr){
            
             value.push(curr.val)
            curr = curr.next
           
        }

        let l = 0
        let r = value.length - 1

        while(l < r){
            if(value[l] !== value[r]){
                return false
            }
            l++
            r--
        }
        return true
    }

    Cycle(){                //How to make a Link List Cycle                    
        let output = ""     //It checks to see if the code has looped to a previous number
        let curr = this 
        let set = new Set()

        while(curr){
            


            if(set.has(curr.val)){
                return true
            }

            set.add(curr.val)

            curr = curr.next
        }


        return false
  
    }


    Middle(){                       //Finding the middle in a link list
        let fast = this
        let slow = this 

    

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }

    listCycle(){         //It checks to see if the code has looped to a previous number
        let fast = this  //But we use List Cycle Floyd's Algorithm.
        let slow = this 

    

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next

            if(slow === fast){
            return true
            }
        }

        return false
    }

    reverseLinkList(){      //Thsi code reverses the link list
        // let curr = this 
        // let reverseLL = []

        // while(curr){
        //     reverseLL.push(curr.val)
        //     curr = curr.next
        // }

        // return reverseLL.reverse()

        let curr = this
        let prev = null
        let arr = []

        while(curr){
            const next = curr.next   
            curr.next = prev
            prev = curr
            curr = next
        }

            return prev
    }
    
}

const head = new Node(1, new Node(2, new Node(3, new Node(2, null))))
head.addToEnd(new Node(5, null))
//head.removeByIndex(1)
//head.AddAtIndex(1, new Node(2, null))
head.print()

console.log(head.palidrome())
console.log(head.Cycle())
//console.log(head.Middle())
//console.log(head.listCycle())

console.log(head.reverseLinkList())