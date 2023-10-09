import { Name } from "./Name"

export const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white mt-auto" >
            <div className='container'>
                <section className='p-3'>      
                    <div className="row">        
                        <Name name='Batres Brazil' carnet='1069619' />
                        <Name name='Cuevas Pablo' carnet='1239719' />
                        {/* <Name name='De León Jocelyn' carnet='1305619' />*/}
                        <Name name='De Léon José' carnet='1072619' />
                        {/*<Name name='Jiménez Angel' carnet='1032517' />*/}
                    </div>      
                </section>                    
            </div>     
            <div className="p-3" style={{backgroundColor: '#FFF', color: '#000'}}>
                ©{new Date().getFullYear()} Derechos Reservados
            </div>           
        </footer>
    )
}