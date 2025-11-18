
export default function Footer() {
    return (
        <>        <footer style={{ backgroundColor: '#fff8f9', minHeight: '100px' }}>
            <div className='row'>
                <h4 className='mt-4' style={{ color: '#802c6e', textAlign: 'center' }}>se hai bisogno contattaci su:</h4>
                <div className="d-flex justify-content-center" style={{
                    color: '#802c6e'
                }}>
                    <i className="bi bi-envelope me-3"></i>
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-twitter-x me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                    <i className="bi bi-telephone me-3"></i>
                </div>
            </div>

        </footer>
        </>

    )
}
