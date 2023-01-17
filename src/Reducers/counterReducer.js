const count=0


const counterReducer=(state=count,action)=>{
    switch (action.type){
        case "INCREMENT" : return state+1
        case "DECREMENT" : return state-1
        default : return state
    }
}
export default counterReducer