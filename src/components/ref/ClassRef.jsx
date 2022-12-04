/** @format */

import React, { Component, createRef } from 'react'

class ClassRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = createRef()
  }
  componentDidMount(props) {
    console.log(this.inputRef)
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
      </div>
    )
  }
}

export default ClassRef
