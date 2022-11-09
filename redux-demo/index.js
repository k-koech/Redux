const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers


// For logging
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require("redux-logger")

const logger = reduxLogger.createLogger()

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = "CAKE_RESTOCKED"

const ICECREAM_ORDERED = "ICECREAM_ORDERED" 
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED" 
// ACTION
// action creator

// ================CAKE==================
function order_cake()
{
 return {
    type: CAKE_ORDERED,
    payload: 1,
 }
}

function restockCake(qty = 1)
{
 return {
    type: CAKE_RESTOCKED,
    payload: qty,
 }
}


// ================ICECREAM==================
function orderIceCream(qty=1)
{
 return {
    type: ICECREAM_ORDERED,
    payload: qty,
 }
}

function restokeIceCream(qty = 1)
{
 return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
 }
}


const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 20,
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
//     anotherProperty: 0, //testing
// }

//================== reducers ========================
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type)
    {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type)
    {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        case CAKE_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams -1,
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
// console.log("From index.js")

const store = createStore(rootReducer)//, applyMiddleware(logger)
console.log("Initial state ", store.getState())

const subscribe = store.subscribe(() => {
console.log("Updated state ", store.getState())
}
)

// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(order_cake())
// store.dispatch(restockCake(9))
const actions = bindActionCreators({order_cake, restockCake, orderIceCream, restokeIceCream}, store.dispatch)
actions.order_cake()
actions.order_cake()
actions.order_cake()
actions.restockCake(9)

console.log("======================================")
actions.orderIceCream()
actions.orderIceCream()
actions.restokeIceCream(9)
subscribe()
