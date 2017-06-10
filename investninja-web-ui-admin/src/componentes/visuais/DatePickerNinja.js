import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class DatePickerNinja extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            startDate: new Date()
        };        
    }

    defineSizeLabel() {
        let result = Math.min(4, 12 - this.props.columns);
        return "col-sm-" + result + " control-label";
    }

    defineSizeInput() {        
        return "col-sm-" + this.props.columns;
    }

    trasformValue() {
        return moment(this.props.value);
    }

    render() {
        return (
            <div className="form-group">
                <label className={this.defineSizeLabel()} htmlFor={this.props.name}>{this.props.label}</label>
                <div className={this.defineSizeInput()}>
                    <DatePicker 
                        dateFormat="DD/MM/YYYY"
                        label={this.props.label}
                        name={this.props.name}                                                
                        onChange={this.props.onChange}
                        selected={this.trasformValue()}/>                   
                </div>
            </div>
        )
    }
}