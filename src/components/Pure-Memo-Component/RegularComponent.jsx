/** @format */

import React, { Component } from 'react'

class RegularComponet extends Component {
  render() {
    console.log('Reg Comp')
    return <div>Regular Component- {this.props.name}</div>
  }
}

export default RegularComponet
