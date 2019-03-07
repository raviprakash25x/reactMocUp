import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Dropdown extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        const optionList=<div className="dropdown"><select defaultValue={this.props.defaultValue} onChange={this.props.handleChange}>
		                        <option value="7">Last 7 days</option>
		                        <option value="30">Last 30 days</option>
		                        <option value="90">Last 90 days</option>
                        </select> </div>;
        return optionList;
    }
}

export default Dropdown;