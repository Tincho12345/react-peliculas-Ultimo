import axios from "axios";
import FormulariosActores from "./FormularioActores";
import { actorCreacionDTO } from "./actores.model";
import { urlActores } from "utils/endpoints";
import { useHistory } from "react-router-dom";
import MostrarErrores from "utils/MostrarErrores";
import { useState } from "react";

export default function CrearActores(){
    
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();

    async function crear(actor: actorCreacionDTO) {
        try{
            await axios.post(urlActores, actor)
            history.push('/actores');
        }
        catch(error){
            setErrores(error.response.data);
        }
    }

    return(
        <>
            <h3>Crear Actores</h3>
            <MostrarErrores errores={errores} />
            <FormulariosActores
                modelo={{nombre: '', fechaNacimiento: undefined}}
                onSubmit={async valores => await crear(valores)}
            />
        </>
    )
}