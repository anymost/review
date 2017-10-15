let origin = {
    name: 'jack'
}
let obj = new Proxy(origin, {
    get(target, key){
        Reflect.get(target)
        return target[key];
    },
    set(target, key, value) {

    }
})
origin.name = 'target';
console.log(origin.name)
console.log(obj.name)