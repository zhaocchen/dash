
class ListNode {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    getElementAt () {

    }

    indexOf () {

    }

    isEmpty () {

    }

    has (val) {
        let tmp = this.head
        while (tmp !== null) {
            if (tmp.val == val) return true
            tmp = tmp.next
        }
        return false
    }

    length () {
        let tmp = this.head
        let count = 0

        while (tmp !== null) {
            count++
            tmp = tmp.next
        }
        return count
    }

    toString () {
        
    }

    push (new_val) {
        // adds at the front of the list
        let new_node = new ListNode(new_val)
        new_node.next = this.head
        this.head = new_node
    }

    insertAfter (prev_node, new_val) {
        // the new node is inserted after the given node
        if (prev_node == null) {
            new Error('The given previous node must inLinkedList.')
        }

        let new_node = new ListNode(new_val)
        new_node.next = prev_node.next
        prev_node.next = new_node
    }

    append (new_val) {
        // Appends a new node at the end
        let new_node = new ListNode(new_val)

        if (this.head == null) {
            this.head = new_node
            return
        }

        let last = this.head
        while (last.next !== null) {
            last = last.next
        }
        last.next = new_node
    }

    delete (val) {
        let tmp = this.head

        if (tmp !== null) {
            if (tmp.val == val) {
                this.head = tmp.next
                tmp = null
                return
            }
        }

        let prev
        while (tmp !== null) {
            if (tmp.val == val) {
                break
            }
            prev = tmp
            tmp = tmp.next
        }

        if (tmp == null) return

        prev.next = tmp.next
        tmp = null
    }

    deleteAt(index) {
        if (this.head == null) return
        
        let curNode = this.head
        if (index == 0) {
            this.head = curNode.next
            curNode = null
            return
        }

        let prevNode
        for (let j = 0; j < index; j++) {
            prevNode = curNode
            curNode = curNode.next
            if (curNode == null) return
        }

        prevNode.next = curNode.next
        curNode = null
    }

    printList () {
        let res = []
        let tmp = this.head
        while (tmp) {
            res.push(tmp.val)
            tmp = tmp.next
        }
        return res
    }

    destroy () {
        // let curNode = this.head
        // while (curNode !== null) {
        //     let nextNode = curNode.next
        //     delete curNode.val
        //     curNode = nextNode
        // }
        this.head = null
    }

}

function test () {
    let list = new LinkedList()

    list.append(6)
    list.append(7)
    list.push(2)
    list.insertAfter(list.head, 3)
    // list.delete(7)

    // list.destroy()
    list.deleteAt(3)


    console.log('length:', list.length())
    console.log(list.printList())
    console.log('has:', list.has(1))
    console.log(list)
}

test()