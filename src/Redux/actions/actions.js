import { ADD, ADD2, ADD_NUMB, ADD_NUMB2, SUB, SUB2, SUB_NUMB, SUB_NUMB2 } from "./actionTypes"

export function add() {
    return {
        type: ADD
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumb(number) {
    return {
        type: ADD_NUMB,
        payload: number
    }
}

export function subNumb(number) {
    return {
        type: SUB_NUMB,
        payload: number
    }
}

export function add2() {
    return {
        type: ADD2
    }
}

export function sub2() {
    return {
        type: SUB2
    }
}

export function addNumb2(number) {
    return {
        type: ADD_NUMB2,
        payload: number
    }
}

export function subNumb2(number) {
    return {
        type: SUB_NUMB2,
        payload: number
    }
}
