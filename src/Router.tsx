import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ExchangePage, ExchangeResultPage} from './components/Pages'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ExchangePage />}/>
                <Route path='/result' element={<ExchangeResultPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;