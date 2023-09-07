import FormulariosActores from "./FormularioActores";

export default function EditarActores(){
    return(
        <>
        <h3>Editar Actores</h3>
        <FormulariosActores
                modelo={{nombre: 'Robert Anthony De Niro', 
                biografia: `# Robert 
Ha nacido **Robert**`,
                fechaNacimiento: new Date('1943-08-17T00:00:00'),
                fotoURL: 'https://hips.hearstapps.com/hmg-prod/images/robert-de-niro-attends-the-cinemacon-big-screen-achievement-news-photo-1660730297.jpg?crop=0.667xw:1.00xh;0.0828xw,0&resize=1200:*'}}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}