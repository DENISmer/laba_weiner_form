import '../../App.css';
import {FormEvent, useState} from "react";
import { useNavigate } from "react-router-dom";
import {
    Route,
    Routes,
    Link
} from 'react-router-dom';
import MainWindow from "../mainWindow/mainWindow";
import Registration from "../registration/Registration";

export default function Auth(){
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [loginError, setLoginError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError,setPasswordError] = useState('');
    const [repeat,setRepeatPassword] = useState('');
    const [repeatError,setRepeatPasswordError] = useState('');

    const isValid = (): boolean => {
        let result = true;
        console.log("isValid", login.length);
        setLoginError("");
        if (login.length < 6) {
            console.log("Error")
            setLoginError("слишком короткий логин");
            result = false;
        }
        else if(login.length > 20){
            setLoginError("слишком длинный логин");
            result = false;
        }
        else if(/[^a-zA-Z0-9]/.test(login)){
            setLoginError('недопустимые символы в логине');
            result = false

        }
        if (password.length === 0) {
            setPasswordError('Слишком короткий пароль!');
            result = false
        }
        if (password !== repeat){
            setRepeatPasswordError('Пароли не совпадают');
            result = false;
        }
        return result;
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValid()) {

            console.log("it's done");
        }

    };
    return <>
        <form  className="Forms" onSubmit={handleSubmit}>
            <div>
                <h1>Authorization</h1>
            </div>
            <div>
                <input className='Forms-input-items' onChange={e => setLogin(e.target.value)} type="text" placeholder="login" value={login}/>
                {loginError && <div className="error">{loginError}</div>}
            </div><br/>

            <div>
                <input className='Forms-input-items' onChange={e => setPassword(e.target.value)} type="password" placeholder="password"
                       value={password}/>
                {passwordError && <div className="error">{passwordError}</div>}
            </div><br/>

            <div>
                <input className='Forms-input-items' onChange={e => setRepeatPassword(e.target.value)} type="password" placeholder="repeat password"
                       value={repeat}/>
                {repeatError && <div className="error">{repeatError}</div>}
            </div>

            <div>
                <button className="App-header-items" type="sumbit">login</button>
            </div>
            <div>
                <button className="App-header-items" onClick={()=> navigate("/registration")}>sign up</button>
            </div>
        </form>
        <Routes>
            <Route path="/registration" element={<Registration />}/>
        </Routes>
        </>;
}