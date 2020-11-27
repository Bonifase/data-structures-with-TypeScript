class TreeNode {
    data: any;
    left: TreeNode;
    right: TreeNode;
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const tree1 = new TreeNode(6);
tree1.left = new TreeNode(5);
tree1.right = new TreeNode(7);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.right = new TreeNode(8);
tree1.left.left.left = new TreeNode(1);
tree1.left.left.right = new TreeNode(2);

const tree2 = new TreeNode(9);
tree2.left = new TreeNode(4);
tree2.right = new TreeNode(10);
tree2.left.left = new TreeNode(3);
tree2.left.right = new TreeNode(6);
tree2.right.right = new TreeNode(17);
tree2.left.left.left = new TreeNode(5);
tree2.left.left.right = new TreeNode(7);
tree2.right.right.right = new TreeNode(22);
tree2.right.right.right.left = new TreeNode(20);

export { tree1, tree2 };
