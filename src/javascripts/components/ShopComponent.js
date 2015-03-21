var React = require('react');
var ProductComponent = require("./ProductComponent");

var ShopComponent = React.createClass({
  render: function() {
      var click = this.props.onClick;
      var update =  this.props.onUpdate;
      return (
        <div>
            <h1>Shop</h1>
            <div className="row">
            {this.props.products.map(function(elem,index) {
               return <ProductComponent product={elem} key={index} on={click} up={update}/>
                })
            }
            </div>
        </div>
    );
  }
})

module.exports = ShopComponent;

//}