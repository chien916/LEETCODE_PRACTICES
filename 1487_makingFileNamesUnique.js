/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (Names) {
    let S = new Set()
    let Ans = []
    for (let Name of Names) {
        if (S.has(Name)) Name = Name + "(1)"
        while (S.has(Name)) {
            let [pli, pri] = [Name.lastIndexOf('('), Name.lastIndexOf(')')]
            // if (pli > -1 && pri > -1
            //     && pri === Name.length - 1 && pli < pri
            //     && !isNaN(Name.slice(pli + 1, pri))) {
            let num = Number.parseInt(Name.slice(pli + 1, pri))
            Name = Name.slice(0, pli + 1) + (num + 1).toString() + Name.slice(pri)
            // } 
        }
        S.add(Name)
        Ans.push(Name)
    }
    return Ans
};

//console.log(getFolderNames(["kaido","kaido(1)","kaido","kaido(1)"]))