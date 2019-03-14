import React from 'react'
import CardChart from './CardChart'
import Dropdown from './dropdown.js'
import './DisplayCard.css';
import Summary from './summary.js'

var configFile = require('./pageViews.js');

class PopUpPageViews extends React.Component {
  constructor(props) {
    super(props);
	this.state={
		timespan_line:7,
		//timespan_line1:7,
		timespan_line2:7,
		line_series: configFile.get_line_series(7),
		//line1_series: configFile.get_line1_series(30),
        line2_series: configFile.get_line2_series(7),
        line_summary: configFile.get_line_summary_data(7)
	};
	//console.log("hi");
	this.handleChange_line=this.handleChange_line.bind(this)
	//this.handleChange_line1=this.handleChange_line1.bind(this);
    this.handleChange_line2=this.handleChange_line2.bind(this);
    this.handleChange_line_summary=this.handleChange_line_summary.bind(this);
  }	
  
  componentDidMount(){
	  this.setState({configFile: require('./pageViews.js')});
  }
  
  handleChange_line(e){
		this.setState({
                        timespan_line:e.target.value,
                        line_series:configFile.get_line_series(e.target.value)
                    });
        //also set the sliced data
        //console.log('dropdown entered');
        //console.log(e.target.value);
		//console.log(this.state.line_series);
  }
  
  /*handleChange_line1(e){
		this.setState({timespan_line1:e.target.value,
					   line1_series: configFile.get_line1_series(e.target.value)})
		//also set the sliced data
  }
  */
  handleChange_line2(e){
		this.setState({timespan_line2:e.target.value,
					   line2_series: configFile.get_line2_series(e.target.value)});
		//also set the sliced data
  }

  handleChange_line_summary(e){
    this.setState({timespan_line:e.target.value,
                   line_summary: configFile.get_line_summary_data(e.target.value)});
    //also set the sliced data
}
 
  render() {

    return (
      <div>
	    <h3>Page Views</h3>
		<Dropdown option = {0} optionValue={this.state.timespan_line} handleChange={this.handleChange_line}/>
		<CardChart options={configFile.line_options} series = {this.state.line_series} />	
        <Summary summary_data = {configFile.line_summary_data} colors = {configFile.line_summary_colors}/>
		<hr/>
		
		<h3>Page Views - Average, Minimum and Maximum</h3>
		<Dropdown option = {0} optionValue={this.state.timespan_line2} handleChange={this.handleChange_line2}/>
		<CardChart options={configFile.line2_options} series = {this.state.line2_series} />
	
	  </div>
    );
  }
}

export default PopUpPageViews;