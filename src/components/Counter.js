import { connect } from 'react-redux'
import * as actions from '../store/actions'
import { bindActionCreators } from 'redux'
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
  const actionsWithDispatch = bindActionCreators(actions, dispatch)
  return {
    inc: actionsWithDispatch.increment,
    dec: actionsWithDispatch.decrement,
    rnd: () => {
      const number = Math.floor(Math.random() * 100)
      actionsWithDispatch.random(number)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)