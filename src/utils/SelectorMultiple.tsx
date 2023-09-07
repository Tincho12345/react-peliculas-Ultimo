import './SelectorMultiple.css'

export default function SelectorMultiple(props: selectorMultipleProps){
    //#region Funciones 
    function seleccionar(item: SelectorMultipleModel){
        const seleccionados = [...props.seleccionados, item];
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados, noSeleccionados);
    }

    function deseleccionar(item: SelectorMultipleModel){
        const seleccionados = props.seleccionados.filter(valor => valor !== item);
        const noSeleccionados = [...props.noSeleccionados, item];
        props.onChange(seleccionados, noSeleccionados);
    }

    function seleccionarTodo(){
        const seleccionados = [...props.seleccionados, ...props.noSeleccionados];
        const noSeleccionados: SelectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);      
    }

    function deseleccionarTodo(){
        const noSeleccionados = [...props.noSeleccionados, ...props.seleccionados];
        const seleccionados: SelectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);      
    }
    //#endregion

    return(
        <div className="selector-multiple">
            <ul>
                {props.noSeleccionados.map(item => 
                    <li key={item.llave} onClick={() => seleccionar(item)}>{item.valor}</li>)}
            </ul>
            <div className="selector-multiple-botones">
                <button type="button" onClick={seleccionarTodo}>{'>>'}</button>
                <button type="button" onClick={deseleccionarTodo}>{'<<'}</button>
            </div>
            <ul>
                {props.seleccionados.map(item => 
                    <li key={item.llave} onClick={() => deseleccionar(item)}>{item.valor}</li>)}
            </ul>
        </div>
    )
}

interface selectorMultipleProps {
    seleccionados: SelectorMultipleModel[];
    noSeleccionados: SelectorMultipleModel[];
    onChange(seleccionados: SelectorMultipleModel[], 
        noSeleccionados: SelectorMultipleModel[]): void;
}

export interface SelectorMultipleModel{
    llave: number;
    valor: string;
}