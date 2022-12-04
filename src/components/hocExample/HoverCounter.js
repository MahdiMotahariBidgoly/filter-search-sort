/** @format */
import WithCounter from '../hoc/WithCount'
const Hovercounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h4 onMouseOver={incrementCount}>Hovered{count} times</h4>
    </div>
  )
}

export default WithCounter(Hovercounter, 10)
