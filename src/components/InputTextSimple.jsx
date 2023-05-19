import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";


function InputTextSimple({label, placeholder, estado, cambiarEstado}){
    const onChange = (e) => {
        cambiarEstado( e.target.value);
    }

    return(
        <>
            <Container className= "d-grid w-50">
                <Form.Group >
                <Form.Label style={{marginBottom: '.5rem'}}>{label}</Form.Label>
                <Form.Control
                    type="text"
                    placeholder={placeholder}               
                    value={estado.campo}
                    onChange={onChange}
                />           
                </Form.Group>
            </Container>
        </>
        
    )
}

export default InputTextSimple;