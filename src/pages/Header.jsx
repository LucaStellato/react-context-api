import { NavLink } from "react-router-dom";
import logo from "../assets/logos2.png"
import { useContext, useState } from 'react'
import BudgetContext from '../contexts/BudgetContext'
export default function Header() {
    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    function HandleClick() {
        if (budgetMode == true) {
            setBudgetMode(false)
        } else {
            setBudgetMode(true)
        }

    }

    return (

        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: "80px" }}>
                <div className="container-fluid ms-2" >
                    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" style={{ height: "200px" }} className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link" aria-current="page">HomePage</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/ChiSiamo' className="nav-link">Chi Siamo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/prodotti' className="nav-link">Prodotti</NavLink>
                            </li>
                        </ul>
                        <button onClick={HandleClick}>mode budget active</button>
                    </div>
                </div>
            </nav>
        </header >

    )
}