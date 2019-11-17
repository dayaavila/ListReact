import React from 'react';
import {Button} from './components/common/Buttons/Button';
import {ListaDeValores} from './components/common/ListaDeValores/ListaDeValores';
import {Texto} from './components/common/Texto/Texto'
import './App.css';
//import { any, number } from 'prop-types';

/*----- Valores que recibe de Texto.tsx*/
interface AppState {
    valorActualTexto: string;
    valoresDeLaLista: Array<string>;
    //deleteItem: any;
}

/*class ClasePadre {
    Pinta1() {
        //console.log("Padre 1");
    }
    Pinta2() {
        console.log("Padre 2");
    }
}

class ClaseHijo extends ClasePadre {
    Pinta2() {
        ClasePadre.prototype.Pinta2();
        console.log("Hijo 2");
    }
}*/

export class App extends React.Component <any, AppState> {
    constructor(props: AppState){
        super(props);
       /* let objeto = new ClaseHijo();
        objeto.Pinta1();
        objeto.Pinta2();*/

        this.state = {
            valorActualTexto:"",
            valoresDeLaLista: new Array<string>(),
        }
    }

    setValue(newValue:string) {
        this.setState({
            valorActualTexto: newValue
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ListaDeValores
                            text={"Lista"}
                            value={this.state.valoresDeLaLista}
                            //onItemDelete={this.state.delItem.bind(this)}
                    />
                    <Texto value={this.state.valorActualTexto}
                           onPublishValue={this.setValue.bind(this)}
                           onKeyDown={this.addItem.bind(this)}
                    />
                    <Button text={"AGREGAR"}
                            onClick={this.addItem.bind(this)}
                    />
                </header>
            </div>
        );
    }

    addItem() {
        let lista:Array<string> = this.state.valoresDeLaLista;
        lista.push(this.state.valorActualTexto);
        this.setState({
            valoresDeLaLista: lista,
            valorActualTexto:""
        });
    }
}

