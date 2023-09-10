
var FileSystem = function () {
    this.R = [new Map(), new Map()];//folders file
    this.R[0].set("___root", [new Map(), new Map()]);
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function (p) {
    //console.log('ls : ' + p)
    if (p === "/") p = "";
    let P_ = `___root${p}`.split("/");

    let C = this.R;
    //console.log(P_)
    for (let p__ of P_) {
        //console.log("BEFORE", C, C[0], p__)
        if (C[0].has(p__)) C = C[0].get(p__);
        else if (C[1].has(p__)) return [p__];
        // C = C[0].get(p__);
        // if (C === undefined) C = C[1].get(p__);
        //console.log("AFTER", C)
    }
    //console.log(C)
    return [...C[0].keys()].concat(...C[1].keys()).sort();
};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function (p) {
    let P_ = `___root${p}`.split("/");
    let C = this.R;
    for (let p__ of P_) {
        if (!C[0].has(p__)) {
            C[0].set(p__, [new Map(), new Map()]);
        }
        //console.log(C)
        C = C[0].get(p__);
    }
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function (p, f_content) {
    let P_ = `___root${p}`.split("/");
    let f_name = P_.pop();
    let C = this.R;
    //let _ = C;
    for (let p__ of P_) {
        if (!C[0].has(p__)) {
            C[0].set(p__, [new Map(), new Map()]);
        }
        C = C[0].get(p__);
    }
    if (!C[1].has(f_name)) C[1].set(f_name, "");
    C[1].set(f_name, C[1].get(f_name) + f_content);

    //console.log(_)

    // let P_ = (p === "/") ? [] : p.split("/").slice(0, p.split("/").length - 1);
    // let C = this.R;
    // for (let p__ of P_.slice(-1)) {
    //     if (!C[0].has(p__)) {
    //         C[0].set(p__, [new Map(), new Map()]);
    //     }
    //     C = C[0].get(p__);
    // }
    // C[1].set(P_[P_.length - 1], f);
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function (p) {
    let P_ = `___root${p}`.split("/");
    let f_name = P_.pop();
    let C = this.R;
    for (let p__ of P_) {
        //console.log(C)
        C = C[0].get(p__);
    }
    // console.log(C,f_name)
    return C[1].get(f_name);
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */