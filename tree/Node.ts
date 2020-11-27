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

export var root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(7);
root.left.left.right = new TreeNode(2);

