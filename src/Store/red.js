import {createStore} from "redux";

const init ={
    data : null
}

const Red =(state=init,action)=>{

    switch(action.type){
        case 'auth':
            return{
                ...state,data : action.user
            }

            default:
            return state
    }

}

const Store = createStore(Red);

export default Store;