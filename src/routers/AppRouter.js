import React from 'react'
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom'
import { JornalScreen } from '../components/jornal/JornalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth/*' element={<AuthRouter></AuthRouter>}>
            </Route>
            <Route path='/main' element={<JornalScreen></JornalScreen>}>                            
            </Route>
            <Route path='/*' element={<JornalScreen></JornalScreen>}/>        
        </Routes>        
    </BrowserRouter>

  )
}
