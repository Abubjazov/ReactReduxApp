const initState = {
    counter2: 300
  }
  
export default function counter2(state = initState, action) {
switch (action.type) {
    case 'ADD2':
    return {
        counter2: state.counter2 + 1
    }

    case 'SUB2':
    return {
        counter2: state.counter2 - 1
    }

    case 'ADD_NUMB2':
    return {
        counter2: state.counter2 + action.payload
    }

    case 'SUB_NUMB2':
    return {
        counter2: state.counter2 - action.payload
    }
    
    default:
        return state
}
}
  