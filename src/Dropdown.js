import React from 'react';
import './dropdown.css';
import optionData from './dropdownOptions.js'

class Dropdown extends React.Component
{

    render()
    {
        let menu;
        var list=optionData[this.props.option];
        menu=list.map(ele=><option value={ele[0]}>{ele[1]}</option>);
        const optionList=<div className="dropdown"><select value={this.props.optionValue} onChange = {this.props.handleChange}>
		                    {menu}
                        </select></div>;
        return optionList;
    }
}

export default Dropdown;