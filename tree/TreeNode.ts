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

export const tree1 = new TreeNode(5);
tree1.left = new TreeNode(4);
tree1.right = new TreeNode(6);
tree1.left.left = new TreeNode(1);
tree1.left.right = new TreeNode(3);
tree1.right.right = new TreeNode(7);
tree1.left.left.right = new TreeNode(2);

export const tree2 = new TreeNode(5);
tree2.left = new TreeNode(4);
tree2.right = new TreeNode(6);
tree2.left.left = new TreeNode(1);
tree2.left.right = new TreeNode(3);
tree2.right.left = new TreeNode(7);
tree2.right.right = new TreeNode(8);
tree2.left.left.right = new TreeNode(2);
