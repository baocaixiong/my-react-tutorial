import React from 'react'

export default React.createClass({
  createMenuItem: function () {
    return this.props.menus.map(function (menu) {
      return (
      <li className='menu-item' role='presentation'>
        <a href={menu.url}>
          {menu.name}
        </a>
      </li>
      )
    })
  },
  createProjectName: function () {
    return (
    <h3 className='text-muted'>{this.props.projectName}</h3>
    )
  },
  render: function () {
    return (
    <div className='header'>
      <nav>
        <ul className='nav nav-pills pull-right'>
          {this.createMenuItem()}
        </ul>
      </nav>
      {this.createProjectName()}
    </div>
    )
  }
})
