const initialState = 0;

const changeState = (state=initialState, action)=>{
    console.log('mohan', action.type)
    switch(action.type){
        case 'slidehide': return state==0?1:0;
        default: return state;
    }
}
export default changeState;