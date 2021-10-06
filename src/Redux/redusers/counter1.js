const initState = {
    counter1: 0
  }
  
export default function counter1(state = initState, action) {
switch (action.type) {
    case 'ADD':
    return {
        counter1: state.counter1 + 1
    }

    case 'SUB':
    return {
        counter1: state.counter1 - 1
    }

    case 'ADD_NUMB':
    return {
        counter1: state.counter1 + action.payload
    }

    case 'SUB_NUMB':
    return {
        counter1: state.counter1 - action.payload
    }
    
    default:
        return state
}
}
  