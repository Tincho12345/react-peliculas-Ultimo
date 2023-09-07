import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return(
        <>
            <h3>Editar Cine</h3>
            <FormularioCines 
                modelo={{nombre: 'Sambil', latitud: -26.40366370447919, longitud: -54.63462352752686}} 
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}