import * as React from 'react';
import './ListaDeValores.css'

interface ListProps {
    text: string;
    value: Array<string>;
    //itemElement: any;
}
export class ListaDeValores extends React.Component <ListProps,any> {
    render() {
        return (
            <div>
                <p>Lista</p>
                <li className={'list'}>
                    {this.props.value.map((element: string, index: number) => {
                            return <ul key={index}>{element}
                                <button className={'buttonDel'}
                                        //onClick={this.delItem.bind(this, index)}
                                >Delete
                                </button>
                            </ul>
                        }
                    )}
                </li>
            </div>
        );
    }

    /*------------ eventos -----------*/
    delItem(index: number) {
        //this.props.itemElement(index);
    }
}