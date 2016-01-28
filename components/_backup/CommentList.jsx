var React = require('react')
var Comment = require('./Comment')

var CommentList = React.createClass({
  createCommentNodes: function () {
    return this.props.data.map(function (comment) {
      return <Comment key={comment.text} author={comment.author}>
               {comment.text}
             </Comment>
    })
  },

  render: function () {
    return (
    <div>
      {this.createCommentNodes()}
    </div>
    )
  }
})

module.exports = CommentList
