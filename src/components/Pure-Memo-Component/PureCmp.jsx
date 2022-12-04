/** @format */

import React, { PureComponent } from 'react'
class Purecmp extends PureComponent {
  render() {
    console.log('Pure Comp .........................')
    return <div>Pure Component-{this.props.name}</div>
  }
}

export default Purecmp
