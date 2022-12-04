/** @format */

import React from 'react'
const MemoComp = props => {
  console.log('MemoComp')
  return <div>MomoComponent - {props.name}</div>
}

export default React.memo(MemoComp)
