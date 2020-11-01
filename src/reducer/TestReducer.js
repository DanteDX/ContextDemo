export const TestReducer = (state,action) =>{
    // state hocche 'test'
    const {type,payload} = action;
    switch(type){
        case 'ADD_DATA':
            return[
                ...state,
                payload
            ]
        case 'FILTER_DATA':
            return state.filter(x => x !== payload)
        default:
            return state;
    }
}

// state = [1,2,3];
// action = {type:'ADD_DATA',payload:4} // [1,2,3,4]
// action = {type:'DELETE_DATA',payload:2} // [1,3]
// action = {type:'CLEAR_DATA'} //[]
//action.payload optional
// reducer(state,action)
 // state = {name:'piyal'}

