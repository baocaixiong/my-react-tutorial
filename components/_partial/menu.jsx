import React from 'react'

export default React.createClass({
  render: function () {
    return (
    <ul className='menu' id='menu'>
      {this.createMenuItem()}
    </ul>
    )
  }
})
