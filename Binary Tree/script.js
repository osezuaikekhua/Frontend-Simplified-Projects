class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }

    breadthFirstSearch(root){//With this code you visit ever node in the tree layer by layer
        const queue = [root] //<-  Root is the first node in the binary tree and that is where we start
        const result = []

        while(queue.length > 0){
            const curr = queue.shift()  //kicks the first node from the queue 
            result.push(curr.val)       //then here we push its val to the result

            if(curr.left !== null) queue.push(curr.left) //now we check to see if that node had any children.
            if(curr.right !== null) queue.push(curr.right)
        }
        
        console.log(result)
    }

    sumOfTree(root){      //This code adds up all the values in the binary Tree
        const queue = [root] 
        let result = 0

        while(queue.length > 0){
            const curr = queue.shift()  
            result += curr.val      

            if(curr.left !== null) queue.push(curr.left) 
            if(curr.right !== null) queue.push(curr.right)
        }
        
        console.log(result)
    }

    depthFirstSearch(root){//With this code you visit ever node in the tree column by column.
        const queue = [root] 
        const stack = []

        while(queue.length > 0){
            const curr = queue.pop()  //kicks the last node from the queue then returns it 
            stack.push(curr.val)       
            
            if(curr.right !== null) queue.push(curr.right)
            if(curr.left !== null) queue.push(curr.left) 
            
        }
        
        console.log(stack)
    }

    searchWithDFS(root, target){ //this code search to see if the target is in the tree. If not return false
        const queue = [root] 
        const stack = []

        while(queue.length > 0){
            const curr = queue.pop()  //kicks the last node from the queue then returns it 
            if(curr.val == target) return true
            stack.push(curr.val)       
            
            if(curr.right !== null) queue.push(curr.right)
            if(curr.left !== null) queue.push(curr.left) 
            
        }
        
        return false
    }

   invertTree(root){
        if(root === null) return null

        const temp = root.left
        root.left = root.right
        root.right = temp
        invertTree(root.left)
        invertTree(root.right)
   }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
const g = new Node(7)

/*
    1

  2   3

 4 5  6 7
*/

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g


console.log(a.breadthFirstSearch(a))
console.log(a.sumOfTree(a))
console.log(a.depthFirstSearch(a))

console.log(a.searchWithDFS(a, 69))
console.log(a.invertTree(a))