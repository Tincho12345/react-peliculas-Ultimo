import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";

export default function FiltroPeliculas(){

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const genero: generoDTO [] = [
        {id: 1, nombre: 'Acción'},
        {id: 2, nombre: 'Drama'},
        {id: 3, nombre: 'Comedia'},
        {id: 4, nombre: 'Ciencia Ficción'},
    ]

    return(
        <>
            <h3>Filtrar Películas</h3>

            <Formik initialValues = {valorInicial}
                onSubmit={valores => console.log(valores)}           
            >
                {(FormikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Título</label>
                                <input type="text" 
                                    className="form-control" id="titulo"
                                    placeholder="Titulo de la película"
                                    {...FormikProps.getFieldProps('titulo')}
                                />
                                <div className="form-group mx-sm-3 mb-2">
                                    <select className="form-control"
                                        {...FormikProps.getFieldProps('generoId')}
                                    >
                                        <option value="0" disabled>---Seleccione un Género--</option>
                                        {genero.map(genero => <option key={genero.id} 
                                            value={genero.id}>{genero.nombre}</option>)}
                                    </select>
                                </div>
                                <div className="form-group mx-sm-3 mb-2">
                                    <Field className="form-check-input" id="proximosEstrenos" name="proximosEstrenos" type="checkbox" />
                                    <label className="form-chek-label" htmlFor="proximosEstrenos">Próximos Estrenos</label>
                                </div>
                                <div className="form-group mx-sm-3 mb-2">
                                    <Field className="form-check-input" id="enCines" name="enCines" type="checkbox" />
                                    <label className="form-chek-label" htmlFor="enCines">En Cines</label>
                                </div>
                                <Button
                                    className="btn btn-primary mb-2 mx-sm-3"
                                    onclick={() => FormikProps.submitForm()}
                                >Filtrar</Button>
                                <Button
                                    className="btn btn-danger mb-2 mx-sm-3"
                                    onclick={()=> FormikProps.setValues(valorInicial)}
                                >Limpiar</Button>
                            </div>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    )
}

interface filtroPeliculasForm {
    titulo: string,
    generoId: number,
    proximosEstrenos: boolean,
    enCines: boolean
}
