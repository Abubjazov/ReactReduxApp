import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.css'
import Counter from './Counter'
import {add, sub, addNumb, subNumb, asyncAdd} from './Redux/actions/actions'

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>
  
        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAddNumb(13)}>Добавить 13</button>
          <button onClick={this.props.onSubNumb.bind(this, 13)}>Вычесть 13</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(131)}>Асинхронно добавить 131</button>
        </div>

        <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter1
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onAdd: () => dispatch({type: 'ADD'}),
//     onSub: () => dispatch({type: 'SUB'}),
//     onAddNumb: number => dispatch({type: 'ADD_NUMB', payload: number}),
//     onSubNumb: number => dispatch({type: 'SUB_NUMB', payload: number})
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumb: number => dispatch(addNumb(number)),
    onSubNumb: number => dispatch(subNumb(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
