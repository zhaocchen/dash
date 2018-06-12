const testData = [8, 1, 4, 7, 13, 14, 6, 3, 10];

/**
 * 二叉树排序
 * @param Array data
 * return Object 
 */
const binarySort = function(data) {
	var binaryTree = null;
	const Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
	};

	const insertNode = (node, newNode) => {
		if (newNode.key <= node.key) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	}

	data.forEach((d, i) => {
		const newNode = new Node(d);
		if (binaryTree === null) {
			binaryTree = newNode;
		} else {
			insertNode(binaryTree, newNode);
		}
	});

	return binaryTree;
} 

/**
 * 遍历二叉树
 * return Array
 */
const traverseTree = {
	tmpArray: [],
	push(key) {
		this.tmpArray.push(key);
	},
	inOrderNode(node, callback) {
		if(node !== null) {
			this.push(node.key);
			this.inOrderNode(node.left, this.push);
			this.inOrderNode(node.right, this.push);
		}
	},
	/**
	 * 执行中序遍历
	 * @param {*} binaryTree 
	 */
	inOrder(binaryTree) {
		this.tmpArray = [];
		this.inOrderNode(binaryTree, this.push);
		return this.tmpArray;
	},
	preOrderNode(node, callback) {
		if(node !== null) {
			this.inOrderNode(node.left, this.push);
			this.push(node.key);
			this.inOrderNode(node.right, this.push);
		}
	},
	/**
	 * 执行前序遍历
	 * @param {*} binaryTree 
	 */
	preOrder(binaryTree) {
		this.tmpArray = [];
		this.preOrderNode(binaryTree, this.push);
		return this.tmpArray;
	},
	postOrderNode(node, callback) {
		if(node !== null) {
			this.inOrderNode(node.left, this.push);
			this.inOrderNode(node.right, this.push);
			this.push(node.key);
		}
	},
	/**
	 * 执行后序遍历
	 * @param {*} binaryTree 
	 */
	postOrder(binaryTree) {
		this.tmpArray = [];
		this.postOrderNode(binaryTree, this.push);
		return this.tmpArray;
	},
};

const tree = binarySort(testData);
// console.log(tree);

const inOrderRes = traverseTree.inOrder(tree);
console.log('inOrder',inOrderRes);

const preOrderRes = traverseTree.preOrder(tree);
console.log('preOrder',preOrderRes);

const postOrderRes = traverseTree.postOrder(tree);
console.log('postOrder',postOrderRes);

