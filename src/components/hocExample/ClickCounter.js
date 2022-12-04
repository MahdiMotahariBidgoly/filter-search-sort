/** @format */
import WithCounter from '../hoc/WithCount'
const Clickcounter = ({ count, incrementCount, name }) => {
  console.log(name)
  return (
    <div>
      <h4 onClick={incrementCount}>Clicked{count}times</h4>
    </div>
  )
}

export default WithCounter(Clickcounter, 5)
