import { connect } from 'react-redux'
function Counter({ counter, increment, decrement, random }) {
  return (
    <div className="jumbotron">
      <h1 className="counter">{counter}</h1>
      <div className="buttons">
        <button className="btn btn-primary"
          onClick={ decrement }
        >DEC</button>
        <button className="btn btn-primary"
          onClick={ increment }
        >INC</button>
        <button className="btn btn-primary"
          onClick={() => random((Math.random() * 100).toFixed())}
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
    increment: () => dispatch({type: 'INC'}),
    decrement: () => dispatch({type: 'DEC'}),
    random: () => dispatch({ type: 'RND', payload: (Math.random() * 100).toFixed() })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)