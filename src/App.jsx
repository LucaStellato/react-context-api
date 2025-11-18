
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import DefaultLayout from './pages/DefaultLayout'
import Prodotti from './pages/prodotti'
import SingleProduct from './pages/SingleProduct'
import BudgetContext from './contexts/BudgetContext'
import { useContext, useState } from 'react'




function App() {

  const [budgetMode, setBudgetMode] = useState(false)

  return (
    <>
      <BudgetContext.Provider value={{
        budgetMode, setBudgetMode
      }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/ChiSiamo' element={<ChiSiamo />}></Route>
              <Route path='/Prodotti' element={<Prodotti />}></Route>
              <Route path='/Prodotti/:id' element={<SingleProduct />}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
