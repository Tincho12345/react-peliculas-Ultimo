import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./actores.model";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";;

export default function FormulariosActores(props:FormulariosActoresProps){
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este Campo es Obligatorio').primeraLetraMayuscula()
            })}
            
            >

            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre"/>
                    <Button disabled={formikProps.isSubmitting}
                    type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>                
                </Form>
            )}
        </Formik>
    )
}

interface FormulariosActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}