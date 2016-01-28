var React = require('react')
var ReactDOM = require('react-dom')
var Layout = require('./components/layout')

require('./sources/css/main.styl')
require('expose?$!expose?jQuery!jquery')
require('bootstrap-webpack')

ReactDOM.render(
  <Layout />,
  document.getElementById('content')
)
