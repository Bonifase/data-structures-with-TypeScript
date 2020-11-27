import { tree1 } from './TreeNode';

const maximumDepth = root => {
    if (root === null) return 0;
    else{
        const leftDepth = maximumDepth(root.left);
        const rightDepth = maximumDepth(root.right);

        if (leftDepth > rightDepth) return 1 + leftDepth;
        else return 1 + rightDepth;
    }
};

const minimumDepth = root => {
    if(root === null) return 0;
    else{
        const leftDepth = minimumDepth(root.left);
        const rightDepth = minimumDepth(root.right);
        if (leftDepth > rightDepth) return 1 + rightDepth;
        else return 1 + leftDepth;
    }
};
const maxDepth = maximumDepth(tree1);
const minDepth = minimumDepth(tree1);
console.log(maxDepth, minDepth)