class Kaja {
    constructor(){
        this.keys = {};
    }
    renderKey(keyname = '', selector = ''){
        [...document.querySelectorAll(selector)].forEach(element=>{
            element.innerHTML = this.keys[keyname];
        })
    }
    key(keyname = '', keyvalue){
        this.keys[keyname] = keyvalue;
    }
}