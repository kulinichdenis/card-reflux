var Reflux = require('reflux');
var localStore = require('./localStore.js');
var actions = require('../actions/Actions.js');

var _cartStore = [];

var Store = Reflux.createStore({
    listenables: actions,

    init:function(){
      console.log('Start '+ Date.now());
    },

    add:function(code){
        var ids = '';
        var instance = code;
        instance['quantity'] = 1; //add quantity
        var code = instance['code'];

        var flag = _cartStore.some(function (elem) {
            if (elem['code'] === code) {
                ids = elem['id'];
                return true;
            }
        })

        if (!flag) {
            //add to store
            var id = localStore.add(instance); //add
            _cartStore.push({code: code, id: id});

        } else {
            //update
            var inst = localStore.get(ids);
            var value = inst.quantity;
            inst.quantity += 1;
            localStore.update(ids, inst);
        }
        this.trigger(_cartStore); //give to component
    },

    delete: function (code) {
        _cartStore = _cartStore.filter(function (elem) {
            if (elem['code'] === code) {
                localStore.remove(elem['id']);
                return false;
            } else {
                return true;
            }
        })
        this.trigger(_cartStore); //give to component
    },

    update: function (code, value) {
        _cartStore.forEach(function (element) {
            if (element['code'] === code) {
                var inst = localStore.get(element['id'])
                inst['quantity'] = parseInt(value,10);
                localStore.update(element['id'], inst)
            }
        })
        this.trigger(_cartStore); //give to component
    }
});

module.exports = Store;