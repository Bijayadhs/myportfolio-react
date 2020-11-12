
function Reducer(state, action) {
    switch (action.type) {
        case 'TEAL_MODE':
            return {
                textColor: 'text-teal-500',
                backgroundColor: 'bg-purple-300',
                borderColor: 'border-teal-700',
                hoverColor: 'border-teal-800'
            };
        case 'PURPLE_MODE':
            return {
                textColor: 'text-purple-500',
                backgroundColor: 'bg-teal-300',
                borderColor: 'border-purple-700',
                hoverColor: 'border-purple-800'
            };
        case 'DARK_MODE':
            return {
                textColor: 'text-white',
                backgroundColor: 'bg-black',
                borderColor: 'border-gray-700',
                hoverColor: 'border-gray-800'
            };
        default:
            return state;
    }
}
export default Reducer;