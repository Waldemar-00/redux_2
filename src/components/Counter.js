// import { connect } from 'react-redux'
// import * as actions from '../store/actions'
import { inc, dec, rnd } from '../store/actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
function Counter() {
  const counter = useSelector(state => state.counter) //!You have to use only simple values, no objects!!!
  const dispatch = useDispatch()
  return (
    <div className="jumbotron">
      <h1 className="counter">{counter}</h1>
      <div className="buttons">
        <button className="btn btn-primary"
          onClick={ () => dispatch(dec()) }
        >DEC</button>
        <button className="btn btn-primary"
          onClick={ () => dispatch(inc()) }
        >INC</button>
        <button className="btn btn-primary"
          onClick={ () => dispatch(rnd()) }
        >RANDOM</button>
      </div>
    </div>
  )
}
// const mapStateToProps = (state) => {   //like useSelector
  // return {
    // counter: state.counter
  // }
// }

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)
// export default connect(mapStateToProps, actions )(Counter)
export default Counter