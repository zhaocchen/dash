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

	console.log(binarySort(testData));


