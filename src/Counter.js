import React from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component {
    render() {
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={this.props.onAdd}>Add</button>
                    <button onClick={this.props.onSub}>Sub</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      counter: state.counter2.counter2
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      onAdd: () => dispatch({type: 'ADD2'}),
      onSub: () => dispatch({type: 'SUB2'}),
      onAddNumb: number => dispatch({type: 'ADD_NUMB2', payload: number}),
      onSubNumb: number => dispatch({type: 'SUB_NUMB2', payload: number})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
