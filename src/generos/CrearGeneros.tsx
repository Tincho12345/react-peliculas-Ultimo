import axios from "axios";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import { useHistory } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";

export default function CrearGenero() {
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(genero: generoCreacionDTO) {
        try {
            await axios.post(urlGeneros, genero)
            history.push('/generos');
        } 
        catch (error) {
            setErrores(error.response.data);
        }
    }

    return(
        <>
            <h3>Crear Género</h3>
            <MostrarErrores errores={errores} />
            <FormularioGeneros modelo={{nombre: ''}}
                onSubmit={async valores => {
                    await crear(valores);
                }}
            />
        </>
    )
}