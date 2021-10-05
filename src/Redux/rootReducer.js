const initState = {
  counter: 0
}

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1
    }

    case 'SUB':
      return {
        counter: state.counter - 1
    }
    
    default:
      break
  }

  return state
}
