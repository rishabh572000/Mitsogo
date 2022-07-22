const initialState = 0;

const changeState = (state=initialState, action)=>{
    switch(action.type){
        case 'slidehide': return state==0?1:0;
        default: return state;
    }
}
export default changeState;