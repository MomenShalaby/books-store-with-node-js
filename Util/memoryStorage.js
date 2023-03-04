var MemoryStorage = require('memorystorage');
// here, the MemoryStorage function is available
var store = MemoryStorage('my-store');




exports.getKey= (store)=>{
    var keys=[];
    for (i=0;i<store.length;i++){
        keys.push(store.key(i))
    }
    return keys;
}


exports.getValue =(store)=>{
    var values=[];
    for (i=0;i<store.length;i++){
        values.push(store.getItem(store.key(i)))
    }
    return values;
}

exports.store = store