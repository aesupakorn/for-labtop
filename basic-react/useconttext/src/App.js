import React, { useReducer, useState } from 'react';
import './App.css';
import LoginArea from './components/LoginArea';
//ถ้า stateไม่ซับซ้อน ใช้useState ถ้าstate>2 ให้ใช้useReducer
function reducer(state, action){
    if(action.type === 'login'){
        const {username , password}=action.payload;
        return {username , password}
    }
    else if(action.type ==='logout'){
        return null;
    }
    else { return state; }
}
const  AuthContext = React.createContext();

function App() {
    const [authState,authDispatch]=  useReducer(reducer, null);// (ฟังก์ชันที่จะreducer,ค่าเริ่มต้นของstate)

    return (

        <AuthContext.Provider value={{authState,authDispatch}}> {/*การส่งobject ไปโดยไม่ต้องใส่value*/}
            <main className='app-main'>
                <div className='app-container'>
                    <LoginArea/>
                </div>
            </main>
        </AuthContext.Provider>
    );
}
export {AuthContext};
export default App;
