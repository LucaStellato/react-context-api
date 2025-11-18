import jmb from '../assets/jmb.png'
import { useContext } from 'react'
import BudgetContext from '../contexts/BudgetContext'
export default function HomePageLayout() {
    const { name } = useContext(BudgetContext)
    return (
        <>
            <div>{name}</div>
            <main className='' style={{}}>
                <div className='d-flex mt-4'>
                    <div>
                        <img src={jmb}></img>
                    </div>
                    <div>
                        <h2 style={{ color: '#802c6e', marginTop: '100px', fontSize: '40px' }}>Benvenuto in boolify l'e-commerce più in voga del momento</h2>
                        <a class="btn btn" style={{
                            backgroundColor: '#802c6e', color: 'white', width: '260px', marginTop: '40px', marginLeft: '122px'
                        }} href="/prodotti" role="button" > Scopri i nostri prodotti</a>
                        <div>
                            <p style={{ marginTop: '30px', marginLeft: '220px' }} className='text-secondary'>oppure</p>
                            <a className="btn btn-outline-secondary" style={{ marginTop: '20px', marginLeft: '178px' }} href="/ChiSiamo" role='button'>Scopri chi siamo</a>
                        </div>
                    </div>


                </div >

            </main >
        </>
    )
}