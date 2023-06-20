/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const [A1, A2] = [arr1, arr2]
    const MAP = new Map()
    for (const A of [A1, A2]) {
        for (const O of A) {
            if (!MAP.has(O["id"])) MAP.set(O["id"], { id: O["id"] })
            for (let Key in O) {
                if(Key === "id") continue
                MAP.get(O["id"])[Key] = O[Key]
            }
        }
    }
    return [...MAP.values()].sort((A,B)=>A["id"]-B["id"])
};