
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

function asList(arr_n) {
    if (arr_n.length === 0) return null;
    let currHead_T = new Node();
    currHead_T.val = arr_n[0][0];
    currHead_T.random = arr_n[0][1];
    currHead_T.next = asList(arr_n.slice(1));
    return currHead_T;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    let head_N = head;
    let curr_N = head;
    let map_O = new Object();
    //step 1 make a copy of each node deeply
    let copiedHead_N = null;
    let copiedPrev_N = null;
    let loopCount_n = 0;
    while (curr_N) {
        //1st iteration
        if (!copiedHead_N) {
            copiedHead_N
                = new Node(head_N.val, null, head_N.random);
            copiedPrev_N = copiedHead_N;
        }
        //2nd iteration and more
        else {
            copiedPrev_N.next
                = new Node(curr_N.val, null, curr_N.random);
            map_O[curr_N] = copiedPrev_N.next;
            copiedPrev_N = copiedPrev_N.next;
        }
        curr_N = curr_N.next;
        ++loopCount_n;
    }
    return copiedHead_N;

};

let t = asList([[1, 1], [2, 1]]);
let r = copyRandomList(t);