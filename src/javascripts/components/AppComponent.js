var React = require("react");
var Reflux = require('reflux');
//Component
var CartComponent = require("./CartComponent");
var ShopComponent = require("./ShopComponent");
//STORE
var shopeProduct = require('../stores/storeProduct');
var cartStore = require('../stores/cartStore');
var localStore = require('../stores/localStore');

function getProduct(){
    return shopeProduct.getAll();
}

var AppComponent = React.createClass({

    getInitialState: function () {
        return {
            item:[],
            products: getProduct()
        };
    },

    mixins: [Reflux.ListenerMixin],
    componentDidMount: function() {
        this.listenTo(cartStore, this._onChange);
    },

    render: function () {
        return (
            <div>
                <div className='shop'>
                    <ShopComponent products={this.state.products} />
                </div>
                <div className='cart'>
                    <CartComponent cart={this.state.item} />
                </div>
            </div>
        )
    },
    _onChange: function(data) {
        var test = data.map(function(element){
        return localStore.get(element['id']);
    })
        this.setState({item:test, products: this.state.products});
    }
})

module.exports = AppComponent;

