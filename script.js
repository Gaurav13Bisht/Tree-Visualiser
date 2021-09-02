/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */

var path = window.location.pathname;
var page = path.split("/").pop();
page = page.charAt(0) - '0';



let createTree = document.getElementById('submitBtn');
// console.log(createTree);

createTree.addEventListener("click", function () {

    mainCall();

});


function mainCall() {
    var data = [];

    var newFileJS = /** @class */ (function () {
        function newFileJS() {
        }
        newFileJS.main = function () {

            var root = null;
            switch (page) {
                case 1:  // Only 1 order is needed
                    root = newFileJS.leetOrder();
                    break;

                case 2:
                    root = newFileJS.prePostOrder();
                    break;
                case 3:
                    root = newFileJS.preInOrder();
                    break;
                case 4:
                    root = newFileJS.postInOrder();
                    break;
                case 5:
                    root = newFileJS.levelInOrder();
                    break;
                case 6:
                    root = newFileJS.pepOrder();
                    break;

                default: //
            }


            var childParent = newFileJS.getChildParentArrayFromTree(root); // Working Fine
            // console.log(childParent);
            var parentChildArray = "";
            for (var index17436 = 0; index17436 < childParent.length; index17436++) {
                var row = childParent[index17436];
                {
                    parentChildArray += (row[0] + " " + row[1]);
                    parentChildArray += "\n";
                }
            }

            data = newFileJS.updateData(parentChildArray); //Working Fine
            // console.log(fill);
        };

        //////
        newFileJS.updateData = function (data) {  // WORKING FINE
            // console.log(data);
            let line = data.split("\n");
            let fill = [];
            for (let i = 0; i < line.length - 1; i++) {
                let sep = line[i].split(" ");
                if (sep[1] == "null") {
                    sep[1] = "";
                }
                let newdata = {
                    "child": sep[0],
                    "parent": sep[1]
                };
                fill.push(newdata);
                // console.log(newdata);
            }
            return fill;
        }

        //---------------------
        class Node {
            constructor(value) {
                this.left = null;
                this.right = null;
                this.val = value;
            }
        }

        let root = null;
        let q = [];

        // Function to create a node
        // with 'value' as the data
        // stored in it.
        // Both the children of this
        // new Node are initially null.
        function newNode(value) {
            let n = new Node(value);
            return n;
        }

        function insertValue(value) {
            let node = newNode(value);
            if (root == null)
                root = node;

            // The left child of the
            // current Node is used
            // if it is available.
            else if (q[0].left == null)
                q[0].left = node;

            // The right child of the current
            // Node is used if it is available.
            // Since the left child of this
            // node has already been used, the
            // Node is popped from the queue
            // after using its right child.
            else {
                q[0].right = node;
                q.shift();
            }

            // Whenever a new Node is added
            // to the tree, its address is
            // pushed into the queue. So that
            // its children Nodes can be used
            // later.
            q.push(node);

        }

        // This function mainly calls
        // insertValue() for all array
        // elements. All calls use same
        // queue.
        function createTree(arr, n) {
            for (let i = 0; i < n; i++)
                insertValue(arr[i]);
        }

        //---------------------

        newFileJS.leetOrder = function () {
            // var sep = newFileJS.leetOrder.split(" ");
            var leetOrder = document.getElementById('inputBar').value;
            var sep = leetOrder.split(" ");
            var narr = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(sep.length);
            for (var i = 0; i < sep.length; i++) {
                {
                    if (sep[i] === "n" || sep[i] === "null") {
                        narr[i] = null;
                    }
                    else {
                        narr[i] = /* parseInt */ parseInt(sep[i]);
                    }
                }
                ;
            }
            // console.log(narr);
            var root = newFileJS.leetcodeTree(narr); // Gives root of the tree formed
            return root;
        }


        newFileJS.leetcodeTree = function (arr) {
            // let arr1 = [10, 20, 30, 40, 50, 60];
            let n = arr.length;

            createTree(arr, n);
            // levelOrder(root);

            // while (root.right != null) {
            //     console.log(root.key);
            //     root = root.right;
            // }
            return root;
        };




        // PRE POST START
        newFileJS.prePostOrder = function () {
            // var sep = newFileJS.leetOrder.split(" ");
            var preOrder = document.getElementById('pre').value;
            var postOrder = document.getElementById('post').value;

            // FOR PREORDER
            var preT = preOrder.split(" ");
            var pre = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(preT.length);
            for (var i = 0; i < preT.length; i++) {
                {
                    if (preT[i] === "n" || preT[i] === "null") {
                        pre[i] = null;
                    }
                    else {
                        pre[i] = /* parseInt */ parseInt(preT[i]);
                    }
                }
                ;
            }

            // FOR POSTORDER
            var postT = postOrder.split(" ");
            var post = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(postT.length);
            for (var i = 0; i < postT.length; i++) {
                {
                    if (postT[i] === "n" || postT[i] === "null") {
                        post[i] = null;
                    }
                    else {
                        post[i] = /* parseInt */ parseInt(postT[i]);
                    }
                };
            }


            var root = newFileJS.prePostTree(pre, post); // Gives root of the tree formed
            return root;
        }


        newFileJS.prePostTree = function (pre, post) {
            console.log(pre + " " + post);
            // In = ['D', 'B', 'E', 'A', 'F', 'C'];
            // pre = ['A', 'B', 'D', 'E', 'C', 'F'];
            console.log("OPOTTTSS");
            preIndex = 0;
            var size = pre.length;
            root = constructTreeUtil(pre, post, 0, size - 1, size);
            return root;
        }

        function constructTreeUtil(pre, post, l, h, size) {

            // Base case
            if (preIndex >= size || l > h) {
                return null;
            }

            // The first node in preorder traversal is
            // root. So take the node at preIndex from
            // preorder and make it root, and increment
            // preIndex
            var root = new Node(pre[preIndex]);
            preIndex++;

            // If the current subarry has only one
            // element, no need to recur or
            // preIndex > size after incrementing
            if (l == h || preIndex >= size) {
                return root;
            }
            var i;

            // Search the next element
            // of pre[] in post[]
            for (i = l; i <= h; i++) {
                if (post[i] == pre[preIndex]) {
                    break;
                }
            }

            // Use the index of element found
            // in postorder to divide postorder
            // array in two parts. Left subtree
            // and right subtree
            if (i <= h) {
                root.left = constructTreeUtil(pre, post,
                    l, i, size);
                root.right = constructTreeUtil(pre, post,
                    i + 1, h - 1, size);
            }
            return root;
        }









        ///// PRE POST END



        ///////////PRE INN

        newFileJS.preInOrder = function () {
            // var sep = newFileJS.leetOrder.split(" ");
            var preOrder = document.getElementById('pre').value;
            var inOrder = document.getElementById('in').value;

            // FOR PREORDER
            var preT = preOrder.split(" ");
            var pre = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(preT.length);
            for (var i = 0; i < preT.length; i++) {
                {
                    if (preT[i] === "n" || preT[i] === ("null")) {
                        pre[i] = null;
                    }
                    else {
                        pre[i] = /* parseInt */ parseInt(preT[i]);
                    }
                }
                ;
            }

            // FOR INORDER
            var inT = inOrder.split(" ");
            var ino = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(inT.length);
            for (var i = 0; i < inT.length; i++) {
                {
                    if (inT[i] === "n" || inT[i] === ("null")) {
                        ino[i] = null;
                    }
                    else {
                        ino[i] = /* parseInt */ parseInt(inT[i]);
                    }
                }
                ;
            }


            var root = newFileJS.preInTree(pre, ino); // Gives root of the tree formed
            return root;
        }


        let preIndex;

        newFileJS.preInTree = function (pre, In) {
            // In = ['D', 'B', 'E', 'A', 'F', 'C'];
            // pre = ['A', 'B', 'D', 'E', 'C', 'F'];
            preIndex = 0;
            let len = In.length;
            root = buildTree(In, pre, 0, len - 1);
            // printInorder(root);
            return root;
        };

        // function printInorder(node) {
        //     if (node == null)
        //         return;

        //     // First recur on left child
        //     printInorder(node.left);

        //     // Then print the data of node
        //     console.log(node.val + " ");

        //     // Now recur on right child
        //     printInorder(node.right);
        // }


        // Recursive function to construct binary
        // of size len from Inorder traversal in[]
        // and Preorder traversal pre[]. Initial
        // values of inStrt and inEnd should be 0
        // and len -1. The function doesn't do any
        // error checking for cases where inorder
        // and preorder do not form a tree
        function buildTree(In, pre, inStrt, inEnd) {
            if (inStrt > inEnd)
                return null;

            // Pick current node from Preorder
            // traversal using preIndex and
            // increment preIndex
            let tNode = new Node(pre[preIndex++]);

            // If this node has no children then return
            if (inStrt == inEnd)
                return tNode;

            // Else find the index of this
            // node in Inorder traversal
            let inIndex = search(In, inStrt,
                inEnd, tNode.val);

            // Using index in Inorder traversal,
            // construct left and right subtress
            tNode.left = buildTree(In, pre, inStrt,
                inIndex - 1);
            tNode.right = buildTree(In, pre,
                inIndex + 1,
                inEnd);

            return tNode;
        }

        /* UTILITY FUNCTIONS */

        // Function to find index of value
        // in arr[start...end]. The function
        // assumes that value is present in in[]
        function search(arr, strt, end, value) {
            let i;
            for (i = strt; i <= end; i++) {
                if (arr[i] == value)
                    return i;
            }
            return i;
        }
        ///////// PRE IN


        //// POST IN START
        newFileJS.postInOrder = function () {
            // var sep = newFileJS.leetOrder.split(" ");
            var postOrder = document.getElementById('post').value;
            var inOrder = document.getElementById('in').value;

            // FOR InORDER
            var inT = inOrder.split(" ");
            var ino = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(inT.length);
            for (var i = 0; i < inT.length; i++) {
                {
                    if (inT[i] === "n" || inT[i] === ("null")) {
                        ino[i] = null;
                    }
                    else {
                        ino[i] = /* parseInt */ parseInt(inT[i]);
                    }
                }
                ;
            }

            // FOR POSTORDER
            var postT = postOrder.split(" ");
            var post = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(postT.length);
            for (var i = 0; i < postT.length; i++) {
                {
                    if (postT[i] === "n" || postT[i] === ("null")) {
                        post[i] = null;
                    }
                    else {
                        post[i] = /* parseInt */ parseInt(postT[i]);
                    }
                };
            }


            var root = newFileJS.postInTree(post, ino); // Gives root of the tree formed
            return root;
        }

        newFileJS.postInTree = function (post, ino) {
            let n = ino.length;
            let root = buildUtil(ino, post, 0, n - 1, 0, n - 1);
            return root;
        }


        function buildUtil(In, post, inStrt, inEnd, postStrt, postEnd) {

            // Base case
            if (inStrt > inEnd)
                return null;

            /* Pick current node from Postrder traversal using
               postIndex and decrement postIndex */
            let node = new Node(post[postEnd]);

            /* If this node has no children then return */
            if (inStrt == inEnd)
                return node;
            let iIndex = search(In, inStrt, inEnd, node.val);

            /* Using index in Inorder traversal, construct left
               and right subtress */
            node.left = buildUtil(In, post, inStrt, iIndex - 1, postStrt,
                postStrt - inStrt + iIndex - 1);
            node.right = buildUtil(In, post, iIndex + 1, inEnd,
                postEnd - inEnd + iIndex,
                postEnd - 1);

            return node;
        }

        //// POST IN END

        /// LEVEL IN START

        newFileJS.levelInOrder = function () {
            // var sep = newFileJS.leetOrder.split(" ");
            var levelOrder = document.getElementById('level').value;
            var inOrder = document.getElementById('in').value;

            // FOR InORDER
            var inT = inOrder.split(" ");
            var ino = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(inT.length);
            for (var i = 0; i < inT.length; i++) {
                {
                    if (inT[i] === "n" || inT[i] === ("null")) {
                        ino[i] = null;
                    }
                    else {
                        ino[i] = /* parseInt */ parseInt(inT[i]);
                    }
                }
                ;
            }

            // FOR level Order
            var levelT = levelOrder.split(" ");
            var level = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(levelT.length);
            for (var i = 0; i < levelT.length; i++) {
                {
                    if (levelT[i] === "n" || levelT[i] === ("null")) {
                        level[i] = null;
                    }
                    else {
                        level[i] = /* parseInt */ parseInt(levelT[i]);
                    }
                };
            }


            var root = newFileJS.levelInTree(level, ino); // Gives root of the tree formed
            return root;
        }

        newFileJS.levelInTree = function (level, ino) {
            let n = ino.length;

            let root = constructTree(null, level, ino, 0, n - 1);
            return root;
        }


        ///////////
        function constructTree(startNode, levelOrder, inOrder, inStart, inEnd) {
            if (inStart > inEnd)
                return null;

            if (inStart == inEnd)
                return new Node(inOrder[inStart]);

            var found = false;

            var index = 0;

            for (var i = 0; i < levelOrder.length - 1; i++) {
                {
                    var data = levelOrder[i];
                    for (var j = inStart; j < inEnd; j++) {
                        {
                            if (data === inOrder[j]) {
                                startNode = new Node(data);
                                index = j;
                                found = true;
                                break;
                            }
                        }
                        ;
                    }
                    if (found == true)
                        break;
                }
                ;
            }
            startNode.left = constructTree(startNode, levelOrder, inOrder, inStart, index - 1);
            startNode.right = constructTree(startNode, levelOrder, inOrder, index + 1, inEnd);
            return startNode;
        };
        ///////////

        /// LEVEL IN END

        ////// Pepcoding Order
        newFileJS.pepOrder = function () {
            // var sep = newFileJS.leetOrder.split(" ");
            var pepOrder = document.getElementById('inputBar').value;
            var sep = pepOrder.split(" ");
            var narr = (function (s) {
                var a = [];
                while (s-- > 0)
                    a.push(null);
                return a;
            })(sep.length);
            for (var i = 0; i < sep.length; i++) {
                {
                    if (sep[i] === "n" || sep[i] === "null") {
                        narr[i] = null;
                    }
                    else {
                        narr[i] = /* parseInt */ parseInt(sep[i]);
                    }
                }
                ;
            }
            // console.log(narr);
            var root = newFileJS.pepTree(narr); // Gives root of the tree formed
            return root;
        }



        class Pair {
            constructor(node, state) {
                this.node = node;
                this.state = state;
            }
        }

        newFileJS.pepTree = function (arr) {
            let root = new Node(arr[0]);
            let rtp = new Pair(root, 1);

            let st = [];
            st.push(rtp);

            let idx = 0;
            while (st.length > 0) {
                let top = st[st.length - 1];
                if (top.state == 1) {
                    idx++;
                    if (arr[idx] != null) {
                        top.node.left = new Node(arr[idx]);
                        let lp = new Pair(top.node.left, 1);
                        st.push(lp);
                    } else {
                        top.node.left = null;
                    }

                    top.state++;
                } else if (top.state == 2) {
                    idx++;
                    if (arr[idx] != null) {
                        top.node.right = new Node(arr[idx]);
                        let rp = new Pair(top.node.right, 1);
                        st.push(rp);
                    } else {
                        top.node.right = null;
                    }

                    top.state++;
                } else {
                    st.pop();
                }
            }

            return root;
        }

        /////

        newFileJS.getChildParentArrayFromTree = function (root) {
            var que = ([]);
            var treesize = newFileJS.size(root);
            var ans = (function (dims) {
                var allocate = function (dims) {
                    if (dims.length === 0) {
                        return null;
                    }
                    else {
                        var array = [];
                        for (var i_1 = 0; i_1 < dims[0]; i_1++) {
                            array.push(allocate(dims.slice(1)));
                        }
                        return array;
                    }
                }; return allocate(dims);
            })([treesize, 2]);
        /* add */ (que.push(root) > 0);
            var i = 0;
            ans[i++][0] = root.val;
            while (( /* size */que.length > 0)) {
                {
                    var size = que.length;
                    while ((size-- > 0)) {
                        {
                            var top_2 = que.splice(0, 1)[0];
                            if (top_2.left != null) {
                                ans[i][0] = top_2.left.val;
                                ans[i][1] = top_2.val;
                            /* add */ (que.push(top_2.left) > 0);
                                i++;
                            }
                            if (top_2.right != null) {
                                ans[i][0] = top_2.right.val;
                                ans[i][1] = top_2.val;
                            /* add */ (que.push(top_2.right) > 0);
                                i++;
                            }
                        }
                    }
                    ;
                }
            }
            ;
            return ans;
        };
        newFileJS.size = function (root) {
            if (root == null)
                return 0;
            return newFileJS.size(root.left) + newFileJS.size(root.right) + 1;
        };
        // newFileJS.leetOrder = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16";
        return newFileJS;
    }());
    newFileJS["__class"] = "newFileJS";
    (function (newFileJS) {
        var TreeNode = /** @class */ (function () {
            function TreeNode(val) {
                if (((typeof val === 'number') || val === null)) {
                    var __args = arguments;
                    this.val = 0;
                    this.left = null;
                    this.right = null;
                    this.random = null;
                    this.parent = null;
                    this.val = val;
                }
                else if (val === undefined) {
                    var __args = arguments;
                    this.val = 0;
                    this.left = null;
                    this.right = null;
                    this.random = null;
                    this.parent = null;
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             *
             * @return {string}
             */
            TreeNode.prototype.toString = function () {
                return this.val + " ";
            };
            return TreeNode;
        }());
        newFileJS.TreeNode = TreeNode;
        TreeNode["__class"] = "newFileJS.TreeNode";
        var pair = /** @class */ (function () {
            function pair(node, state) {
                this.node = null;
                this.state = 0;
                this.node = node;
                this.state = state;
            }
            return pair;
        }());
        // newFileJS.leetOrder = order1;
        newFileJS.pair = pair;
        pair["__class"] = "newFileJS.pair";
    })(newFileJS || (newFileJS = {}));
    newFileJS.main(null);





    function funcCall() {
        d3.select("svg").remove();
        var svg = d3.select(".tree").append("svg")
            .attr("width", 2500).attr("height", 1500)
            // .append("g").attr("transform", "translate(360,140)");
            .append("g").attr("transform", "translate(150,140)");
        // var data = 
        // [
        //     { "child": "8", "parent": "" },
        //     { "child": "3", "parent": "8" },
        //     { "child": "10", "parent": "8" },
        //     { "child": "1", "parent": "3" },
        //     { "child": "6", "parent": "3" },
        //     { "child": "14", "parent": "10" },
        //     { "child": "31", "parent": "10" },
        //     { "child": "13", "parent": "14" },
        //     { "child": "12", "parent": "14" },
        //     { "child": "13", "parent": "12" },
        //     { "child": "22", "parent": "12" },
        //     { "child": "23", "parent": "22" },
        //     { "child": "24", "parent": "23" },
        //     { "child": "25", "parent": "24" },
        //     { "child": "26", "parent": "25" },
        //     { "child": "27", "parent": "26" },
        //     { "child": "28", "parent": "27" },
        //     { "child": "29", "parent": "28" },
        //     { "child": "33", "parent": "22" },
        //     { "child": "34", "parent": "23" },
        //     { "child": "35", "parent": "24" },
        //     { "child": "36", "parent": "25" },
        //     { "child": "37", "parent": "6" },
        //     { "child": "38", "parent": "37" },
        //     { "child": "null", "parent": "6" },

        //     // { "child": "null", "parent": "1" },

        //     // { "child": "null", "parent": "1" },
        //     // { "child": "39", "parent": "38" }
        //     // { "child": "Mark", "parent": "Ann" },
        //     // { "child": "Angel", "parent": "Sarah" },
        //     // { "child": "Tom", "parent": "Hannah" },
        //     // { "child": "Tom2", "parent": "Hannah" },
        //     // { "child": "Angel1", "parent": "Angel" },
        //     // { "child": "Angel2", "parent": "Angel" },
        //     // { "child": "Tom1", "parent": "Tom" },
        //     // { "child": "Tom2", "parent": "Tom" },

        //     // { "child": "Angel21", "parent": "Angel2" },
        //     // { "child": "Angel22", "parent": "Angel2" },
        //     // { "child": "Tom11", "parent": "Tom1" },
        //     // { "child": "Tom12", "parent": "Tom1" }
        // ];

        // console.log(data);
        var datastructure = d3.stratify()
            .id(function (d) { return d.child; })
            .parentId(function (d) { return d.parent; })
            (data);


        // 22 -> 700
        // 7 -> 200

        // var ht = data.length * 38;
        // console.log(data);
        var ht = data.length * 30;
        var wt = 1000;
        // var wt = 800;
        // if (data.length < 22) {
        //     ht = data.length * 40;
        //     var diff = data.length - 22;
        //     wt = wt + diff * 5;
        // }

        if (data.length > 17) {
            ht = data.length * 20;
            wt = 1000;
        }
        var treeStructure = d3.tree().size([wt, ht]);
        var information = treeStructure(datastructure);

        var connections = svg.append("g").selectAll("path")
            .data(information.links());

        connections.enter().append("path")
            .attr('fill', 'none')
            .attr('stroke', '#ccc')
            .attr('stroke-width', 2)
            .attr('class', 'path')
            .attr("d", function (d) {
                // return "M" + d.source.x + "," + d.source.y + "C" +
                //     d.source.x + "," + (d.source.y + d.target.y) / 2 + " " +
                //     d.target.x + "," + (d.source.y + d.target.y) / 2 + " " +
                //     d.target.x + "," + d.target.y;
                return 'M' + d.source.x + ',' + d.source.y + ',' + d.target.x + ' ' + d.target.y;
                return diagonal(d);
            });


        var circles = svg.append("g").selectAll("circle").data(information.descendants());
        circles.enter().append("circle")
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; })
            .attr("r", 15);



        var names = svg.append("g").selectAll("text")
            .data(information.descendants());

        names.enter().append("text")
            .attr('fill', 'white')
            .text(function (d) { return d.data.child; })
            .attr("x", function (d) { return d.x; })
            .attr("y", function (d) { return d.y + 4; });
    }
    funcCall();
}