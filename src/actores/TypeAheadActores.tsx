import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";
import { ReactElement, useState } from "react";

export default function TypeAheadActores(props: typeAheadActoresProps){

    const actores: actorPeliculaDTO[]= [
        {
            id: 1, nombre: 'Megan Fox', personaje: '', foto:'https://www.losandes.com.ar/resizer/LyDaZUt6wB52lVlmt4whelFwq3M=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/QLQXWU72JJFPBDVPOPNDR3NXEY.jpg'
        },
        {
            id: 2, nombre: 'Brad Peet', personaje: '', foto:'https://images.mubicdn.net/images/cast_member/2552/cache-207-1524922850/image-w856.jpg?size=800x'
        },
        {
            id: 3, nombre: 'Denzel Wadshington', personaje: '', foto:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/05/denzel-washington-2697085.jpg?tf=3840x'
        }
    ]

    const seleccion: actorPeliculaDTO[]=[];

    const [elementoArrastrado, setElementoArrastrado] =
     useState<actorPeliculaDTO | undefined>(undefined)

    function manejarDragStart(actor: actorPeliculaDTO){
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO){
        if(!elementoArrastrado) return;

        if (actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = 
                props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice =
                props.actores.findIndex(x => x.id === actor.id);

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }

    return(
        <>
            <label>Actores</label>
            <Typeahead 
                id="typeahead"
                onChange={actores => {
                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1){
                        props.onAdd([...props.actores, actores[0]]);
                    }                   
                }}
                options={actores}
                labelKey={actor => actor.nombre}
                filterBy={['nombre']}
                placeholder="Escriba el Nombre del Actor"
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="Imágen Actor" src={actor.foto} 
                        style={{
                            height: '64px',
                            marginRight: '10px',
                            width: '64px'
                        }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actores.map(actor => 
                    <li 
                        draggable={true}
                        onDragStart={()=> manejarDragStart(actor)}
                        onDragOver={()=> manejarDragOver(actor)}
                        className="list-group-item list-group-item-action"
                        key={actor.id}>
                        {props.listadoUI(actor)}
                        <span className="badge badge-primary badge-pill pointer"
                        style={{marginLeft: '0.5rem'}}
                        onClick={() => props.onRemove(actor)}
                        >
                            X
                        </span>
                    </li>)}
            </ul>
        </>
    )
}


interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}
