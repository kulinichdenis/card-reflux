require("!style!css!less!../stylesheets/main.less");
var React = require("react");
var AppComponent  = require('./components/AppComponent.js');

function renderApp() {
  React.render(<AppComponent />, document.body);
}

(function() {
  renderApp();
})();

