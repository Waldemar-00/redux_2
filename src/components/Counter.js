import { connect } from 'react-redux'
import * as actions from '../store/actions'
// import { bindActionCreators } from 'redux'
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

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, actions )(Counter)