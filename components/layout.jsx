import React from 'react'
import Header from './_partial/head'
import Jumbotron from './_partial/jumbotron'

export default React.createClass({
  description: 'baocaixiong',
  menus: [
    {
      'name': '首页',
      'url': '/'
    },
    {
      'name': '归档',
      'url': '/archives'
    },
    {
      'name': '标签',
      'url': '/tags'
    }
  ],
  projectName: 'baocaixiong',

  render: function () {
    return (
    <div className='container'>
      <Header menus={this.menus} projectName={this.projectName} />
      <Jumbotron />
    </div>
    )
  }
})
