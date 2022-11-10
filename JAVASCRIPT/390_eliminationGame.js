/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
    var toReturn = 0;
    var [front, interval, back] = [1, 1, n]
    var lengthOfInterval = Math.floor((back - front) / interval) + 1;
    var frontBackOperation = true
    while (lengthOfInterval > 1) {
        if (frontBackOperation && lengthOfInterval % 2 === 1 || !frontBackOperation)
            back -= interval;
        if (frontBackOperation || !frontBackOperation && lengthOfInterval % 2 === 1)
            front += interval;
        interval<<=1;
        frontBackOperation = !frontBackOperation;
        lengthOfInterval = Math.floor((back - front) / interval) + 1;
    }
    return front;
    /**
     * 1,2,3,4,5,6
     * 2,4,6
     * 4
     *
     * boundary
     * 1
     * 1,2
     * 1,2,3
     *
     * frontOperation
     *
     * case1_oddLength
     * 1,2,3,4,5,6,7,8,9
     * 2,4,6
     * ,8->front+=interval;back-=interval;interval*2
     *
     * case2_evenLength
     * 1,2,3,4,5,6,7,8,9,10
     * 2,4,6,8,10 ->front+=interval;interval*=2
     *
     * backOperation:
     *
     * case1_evenLength
     * 2,4,6,8
     * 2,6 ->back-=interval;interval*2
     *
     * case2_oddLength
     * 2,4,6,8,10
     * 4,8 ->front+=interval;back-=interval;interval*2
     *
     */
};

