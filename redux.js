import {combineReducers,createStore} from 'redux';

//action.js

export const deleteName=()=>({
    type:'DELETE_NAME',
    name:''
});

//引数nameを取り{type:'ADD_NAME',name:name}を返すjsの関数
export const setName=(name)=>({
    type:'ADD_NAME',
    name:name
});

INITIAL_STATE={
    name:'Nanashinogonbee',
};

//reducer.js
const reducer = (state=INITIAL_STATE,action)=>{
        switch (action.type) {
            case "ADD_NAME":
                return{
                    ...state,
                    name:action.name
                };
            case "DELETE_NAME":
                return{
                    ...state,
                    name:""
                };
            default:
                return state;
        };
}

export const reducers=combineReducers({
    user:reducer
})

//store.js
export const store=createStore(reducers)


//storeの中身をコンソールで確認
console.log(store.getState)

//storeはjsonのオブジェクト。jsの関数のtypeodでstoreのstateがオブジェクトであることを確かめる。
console.log(typeof store.getState)

//storeもjsオブジェクトであり、4つしかメソッドを持たないことを確認
console.log(store)

