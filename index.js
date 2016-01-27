var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/CommentBox');

ReactDOM.render(
  <CommentBox url="http://127.0.0.1:3000/api/comments" pollInterval={10000}/>,
  document.getElementById('content')
);
