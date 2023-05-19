import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';

function Paginacion({productosPorPagina, totalProductos,paginaActual,setPaginaActual}){

    const numeroPaginas = [];

    for(let i = 1; i<Math.ceil(totalProductos/productosPorPagina);i++){
        numeroPaginas.push(i);
    }

    const paginaAnterior = () =>{
        setPaginaActual(paginaActual-1)
    }

    const paginaSiguiente = () =>{
        setPaginaActual(paginaActual+1)
    }

    const paginaEspecifica = (n) =>{
        setPaginaActual(n)
    }

    /*return (
        <Nav className ="flex-row" as="ul"
            role = 'navigation'
            aria-label = 'pagination'
        >
            <Button className='pagination-previous' type="button" size="sm" disabled={paginaActual===numeroPaginas[0]} onClick={paginaAnterior}>Anterior</Button>
            
            <ul className="flex-row">
                {numeroPaginas.map(nPagina =>(
                    <li key ={nPagina}  >
                        <Button 
                            className={`pagination-link ${ nPagina === paginaActual? 'is-current':'' }`}
                            onClick={()=>paginaEspecifica(nPagina)}
                        >{nPagina}
                        </Button> 
                    </li>
                ))}

            </ul>
            <Button className='pagination-next' type="button" size="sm" disabled={paginaActual===numeroPaginas[numeroPaginas.length-1]} onClick={paginaSiguiente}>Siguiente</Button>
        </Nav>
    )*/


}
export default Paginacion;