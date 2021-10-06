import React from 'react'
import {connect} from 'react-redux'
import { add2, addNumb2, sub2, subNumb2 } from './Redux/actions/actions'

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
      onAdd: () => dispatch(add2()),
      onSub: () => dispatch(sub2()),
      onAddNumb: number => dispatch(addNumb2(number)),
      onSubNumb: number => dispatch(subNumb2(number))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
