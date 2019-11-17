import * as React from 'react';
import './Button.css';

interface ButtonProps {
    text: string;
    onClick: any;
}
export class Button extends React.Component <ButtonProps,any> {

    onClick() {
        if (this.props.onClick) this.props.onClick();
    }

    render() {
        return (<input className={'button'}
                       type={'button'}
                       onClick={this.props.onClick}
                       value={this.props.text}/>);
    }
}