import { Queue } from '../queue/Queue';
import { getHeight } from './treeHeight';
import { tree1, tree2 } from './TreeNode';

// Get tree pre order traversal
const preOrderTraversal = (root, preOrder) => {
    if(root === null) return;
    preOrder.push(root.data);
    preOrderTraversal(root.left, preOrder);
    preOrderTraversal(root.right, preOrder);
};

// Get tree in order traversal
const inOrderTraversal = (root, inOrder) => {
    if(root === null) return;
    inOrderTraversal(root.left, inOrder);
    inOrder.push(root.data);
    inOrderTraversal(root.right, inOrder);
};

// Get tree post order traversal
const postOrderTraversal = (root, postOrder) => {
    if(root === null) return;
    postOrderTraversal(root.left, postOrder);
    postOrderTraversal(root.right, postOrder);
    postOrder.push(root.data)
};

// Get tree level order traversal recursively
const recursiveLevelOrderTraversal = (root, result) => {
    if(root === null) return;
    let height = getHeight(root);
    for(let i=0; i <= height; i++){
        let currentLevel = [];
        getLevel(root, i, currentLevel)
        if(currentLevel.length > 0) result.push(currentLevel);
    }
};

const getLevel = (root, level, currentLevel) => {
    if(root === null) return;
    if(level == 1){
        currentLevel.push(root.data);
    }
    getLevel(root.left, level-1, currentLevel);
    getLevel(root.right, level-1, currentLevel);
}


// Get tree level order traversal iteratively
const iterativeLevelOrderTraversal = (root) => {
    const queue = new Queue();
    queue.enqueue(root);
    let result = [];
    if(root == null) return result;

    while(!queue.isEmpty()){
        let size = queue.size();
        let currentLevel = [];
        for(let i=0; i < size; i++){
            let currentRoot = queue.dequeue();
            currentLevel.push(currentRoot.data);
            if(currentRoot.left != null){
                queue.enqueue(currentRoot.left);
            }
            if(currentRoot.right != null){
                queue.enqueue(currentRoot.right);
            }
        }
        result.push(currentLevel)

    }
    return result;
};

const treeTraversals = {
    preOrder : {function: preOrderTraversal, result: []},
    inOrder : {function: inOrderTraversal, result: []},
    postOrder : {function: postOrderTraversal, result: []},
    levelOrder : {
        iterative: iterativeLevelOrderTraversal,
        recursive: recursiveLevelOrderTraversal,
        result: []
    },
};

const preOrder = treeTraversals.preOrder;
preOrder.function(tree1, preOrder.result);

const inOrder = treeTraversals.inOrder;
inOrder.function(tree1, inOrder.result);

const postOrder = treeTraversals.postOrder;
postOrder.function(tree1, postOrder.result);

const levelOrder = treeTraversals.levelOrder;
levelOrder.recursive(tree2, levelOrder.result);
const iterativeLevelOrder = levelOrder.iterative(tree2);

console.log("1. Pre Order Traversal: ", ...preOrder.result);
console.log("2. In Order Traversal: ", ...inOrder.result);
console.log("3. Post Order Traversal: ", ...postOrder.result);
console.log("4. Recursive Level Order: ", ...levelOrder.result);
console.log("4. Iterative Level Order: ", ...iterativeLevelOrder);


/*
    tree1:
                    6
                  /    \
                5       7
               /  \      \
              2    4     8
             / \
            1   3

    tree2:
                    9
                   /  \
                 4      10
               /  \        \
             3     6        17
                  /  \         \
                 5    7         22
                               /
                             20

 */
