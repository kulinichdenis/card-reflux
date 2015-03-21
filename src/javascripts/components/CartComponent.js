var React = require('react');
var CartProductComponent = require("./CartProductComponent");

var CartComponent = React.createClass({

    render: function() {
    var total = this.props.cart.reduce(function(s, product) {
      return s += product['price'] * product['quantity'];
    }, 0);

    var SelectCarts = this.props.cart.map(function (elem, index) {
        return <CartProductComponent product = {elem} key={index} />
    })

    return (
      <div>
        <h1>Your order</h1>
            {SelectCarts}
        <div className="row">
            <div className="total col-md-3">
                Total:{total}
            </div>
        </div>
      </div>
    );
  }
})

module.exports = CartComponent;