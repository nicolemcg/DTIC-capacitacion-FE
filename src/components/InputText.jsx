import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";

function InputText({label, placeholder, estado, cambiarEstado}){
    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value});
    }

    return(
        <Form.Group className="mb-3 d-block">
            <Form.Label className="w-100 text-start">{label}</Form.Label>
            <Form.Control
                className="form-control"
                type="text"
                placeholder={placeholder}               
                value={estado.campo}
                onChange={onChange}
            />           
        </Form.Group>
    )
}

export default InputText;