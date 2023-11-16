import { connect } from 'react-redux'
import {increment, decrement, random} from '../store/actions'
function Counter({ counter, inc, dec, rnd }) {
  return (
    <div className="jumbotron">
      <h1 className="counter">{counter}</h1>
      <div className="buttons">
        <button className="btn btn-primary"
          onClick={ dec }
        >DEC</button>
        <button className="btn btn-primary"
          onClick={ inc }
        >INC</button>
        <button className="btn btn-primary"
          onClick={ rnd }
        >RANDOM</button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    rnd: () => {
      const number = Math.floor(Math.random() * 100)
      dispatch(random(number))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)