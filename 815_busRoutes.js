/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if(source === target) return 0;
    let queue_A = [];//route index
    let targetRou = new Set();
    let sta2rou = new Map();
    let boundary_b = false;
    routes.forEach((it_A, ind_n) => {
        let goodStart_b = false;
        let goodEnd_b = false;
        it_A.forEach((it_n) => {
            if (source === it_n) goodStart_b = true;
            if (target === it_n) goodEnd_b = true;
            if (!sta2rou.has(it_n)) sta2rou.set(it_n, []);
            sta2rou.get(it_n).push(ind_n);
        });
        if (goodStart_b && goodEnd_b) boundary_b = true;//boundary case
        if (goodStart_b) queue_A.push(ind_n);
        if (goodEnd_b) targetRou.add(ind_n);
    });
    if (boundary_b) return 1;

    let rou2rou_A = Array(routes.length).fill().map(() => new Set());
    routes.forEach((route_A, routeInd_n) => {
        route_A.forEach((sta_n) => {
            sta2rou.get(sta_n).forEach((routeInd2_n) => {
                if (routeInd2_n === routeInd_n) return;
                rou2rou_A[routeInd_n].add(routeInd2_n);
            });
        });
    });

    let visited = new Set();
    let steps_n = 1;
    while (queue_A.length > 0) {
        for (let i_n = queue_A.length - 1; i_n >= 0; --i_n) {
            let cRou_n = queue_A.shift();
            for (let nRou_n of [...rou2rou_A[cRou_n]]) {
                if (!visited.has(nRou_n)) {
                    queue_A.push(nRou_n);
                    visited.add(nRou_n);
                    if (targetRou.has(nRou_n)) {
                        return steps_n + 1;
                    }
                }
            }
        }
        ++steps_n;
    }
    return -1;
};
// /**
//  * @param {number[][]} routes
//  * @param {number} source
//  * @param {number} target
//  * @return {number}
//  */
// var numBusesToDestination = function (routes, source, target) {
//     /**
//      * In BFS, always consider the boundary case were source == target
//      * Just return 0 step as no searching is needed.
//      */
//     if (source === target) return 0;//err1
//     let storage = new Map();
//     routes.forEach((route_A) => {
//         route_A.forEach((sta_n, ind_n) => {
//             if (!storage.has(sta_n)) storage.set(sta_n, []);
//             if (ind_n > 0) storage.get(sta_n).push(...route_A.slice(0, ind_n));
//             if (ind_n < 10e6) storage.get(sta_n).push(...route_A.slice(ind_n + 1));
//         });
//     });

//     let visited = new Set();
//     let queue_A = [source];
//     let step_n = 0;

//     while (queue_A.length > 0) {
//         for (let i_n = queue_A.length - 1; i_n >= 0; --i_n) {
//             //cond:
//             let cSta_n = queue_A.shift();
//             storage.get(cSta_n).forEach((it_n) => {
//                 if (!visited.has(it_n)) {
//                     queue_A.push(it_n);
//                     visited.add(it_n);
//                 }
//             });
//         }
//         ++step_n;
//         if (visited.has(target)) return step_n;
//     }
//     return -1;

// };

console.log(numBusesToDestination([[1, 2, 7], [3, 6, 7]], 1, 6))