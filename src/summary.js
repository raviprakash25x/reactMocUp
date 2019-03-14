import React from 'react';
import ReactDOM from 'react-dom';
import './summary.css'

/*sample data to be received as props
var data = {
			'Total Inbound':20,
			'Total Outbound': 40,
			'Total Outbound Completed': 60,
			'Total Outbound Pending': 10,
			'Total Outbound Failed': 7
			};	*/		
			
const Headers = ({ data }) =>
  Object.entries(data).map(([k, v]) => (
            <th key={k} className='th1'>{k}</th>
		
  ));
  
const Data = ({ data, colors}) =>
  Object.entries(data).map(([k, v], index) => (
            <th key={k} className='th2' style={{color:colors[index]}}>{v}</th>
		
  ));
    
			
class Summary extends React.Component
{
    constructor(props)
    {
        super(props);
    }
	
    render()
    {
	  //console.log(this.props.colors);
	  return(
        <div>
			<table border='0'>
			<tbody>
				<tr>
					<Data data={this.props.summary_data} colors = {this.props.colors}/>
				</tr>
				<tr>
					<Headers data={this.props.summary_data}/>
				</tr>	
			</tbody>
			</table>
		</div>
	  );
	}
}

export default Summary;