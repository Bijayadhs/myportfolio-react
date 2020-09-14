
function Reducer(state, action){
    switch(action.type){
        case 'LIGHTMODE':
            return [...state];
        default:
            return state;
    }
}
export default Reducer;