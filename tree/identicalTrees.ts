import { tree1, tree2 } from './TreeNode';

// Check if two trees are identical.
const isIdentical = (root1, root2) => {
    if(root1 === null && root2 === null) return true;
    if(root1 !== null && root2 !== null && root1.data === root2.data){
        const left = isIdentical(root1.left, root2.left);
        const right = isIdentical(root1.right, root2.right);
        return (left && right) ? true: false;
    }
};

console.log(isIdentical(tree1, tree1))
console.log(isIdentical(tree1, tree2))