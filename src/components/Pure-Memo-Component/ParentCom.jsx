/** @format */

import React, { Component } from 'react'
import RegularComponet from './RegularComponent'
// import Purecmp from './PureCmp'
import MemoComp from './MomoComp'
class ParentCom extends Component {
  state = {
    name: 'mahdi'
  }
  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({ name: 'mahdi' })
  //   }, 1000)
  // }

  render() {
    console.log('Parent Component,,,,,,,,,,,,,,,,,,,,,,')
    return (
      <div>
        parent component
        <RegularComponet name={this.state.name} />
        {/* <Purecmp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentCom
