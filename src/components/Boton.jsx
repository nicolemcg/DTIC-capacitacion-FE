import Button from 'react-bootstrap/Button';


function Boton({texto, funcion_click}){
    return (
        <div>
            <Button type="button" onClick={funcion_click}>{texto}</Button>
        </div>
    )
}


export default Boton;