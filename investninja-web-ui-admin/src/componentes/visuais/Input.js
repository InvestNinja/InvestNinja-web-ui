import React from 'react';

export default class Input extends React.Component {

    defineSizeLabel() {
        let result = Math.min(4, 12 - this.props.columns);
        return "col-sm-" + result + " control-label";
    }

    defineSizeInput() {        
        return "col-sm-" + this.props.columns;
    }

    render() {
        return (
            <div className="form-group">
                <label className={this.defineSizeLabel()} htmlFor={this.props.name}>{this.props.label}</label>
                <div className={this.defineSizeInput()}>
                    <input 
                        type={this.props.type} 
                        id={this.props.name} 
                        name={this.props.name}  
                        placeholder={this.props.placeholder} 
                        className="col-sm-12" 
                        value={this.props.value}
                        onChange={this.props.onChange}/>                        
                </div>
            </div>
        )
    }
}