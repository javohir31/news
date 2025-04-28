import { DECREMENT, INCREMENT, RESET } from "./type";

function glogbalReducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            console.log(action.payload);
            return {
                count: state.count+1,
            };
        case DECREMENT:

            console.log(action.payload);
            return {
                count: state.count - 1,
            };
        case RESET:

            console.log(action.payload);
                

            return {
                count: state.count = 0,
            };
        default:
            console.log("error");
    }
}
export default glogbalReducer
