import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'


function Apresentacoes() {
    return (
        
        <div>
            <NavBar />
            <div className=' h-[80vh] flex justify-center flex-col gap-10 items-center '>
                <h1 className='text-3xl text-center text-[#EBEAD4]'>
                    A pagina apresentações esta vazia, por favor volte ao menu inicial.
                </h1>
                <Link to="/">
                <div className='w-fit h-fit bg-pink-900 p-5 rounded-md hover:scale-110 hover:bg-pink-800'>
                <h1 className='text-3xl text-center text-[#EBEAD4]'>Pagina inicial</h1>
                </div>
                
                </Link>
            </div>

        



            <Footer />
            
        </div>
    )
}

export default Apresentacoes 