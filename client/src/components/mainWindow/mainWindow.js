import React from "react";
import './MainWindow.css';
import Chat from "../messages/Chat";
import { useNavigate } from "react-router-dom";
import {
    Route,
    Routes,
    Link
} from 'react-router-dom';

export default function MainWindow(){
    const navigate = useNavigate();

    return(
        <div>
            <header className='App-header'>
                <button className="App-header-items"  onClick={()=> navigate('/messages')}>
                    chat
                </button>
                <button className="App-header-items"  onClick={()=> navigate('/mainwindow')}>
                    news
                </button>
            </header>
            <Routes>
                <Route path="/messages" element={<Chat />}/>
                {/*<Route path="/mainwindow" element={<MainWindow />}/>*/}
            </Routes>
        </div>
    );
}