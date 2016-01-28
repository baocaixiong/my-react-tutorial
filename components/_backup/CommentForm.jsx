var React = require('react')

var CommentForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    var author = this.refs.author.value.trim()
    var text = this.refs.text.value.trim()
    if (!text || !author) {
      return
    }

    this.props.onCommentSubmit({author: author, text: text})
    this.refs.author.value = ''
    this.refs.author.text = ''
  },

  render: function () {
    return (
    <form className="commentForm" onSubmit={this.handleSubmit}>
      <input type="text" placeholder="You name" ref="author" />
      <input type="text" placeholder="Say Something..." ref="text" />
      <input type="submit" value="Post" />
    </form>
    )
  }
})

module.exports = CommentForm
