import React from 'react'
import closelogo from './close_logo.svg';
import './App.css';
import PopUpBulkApi from './popUp_bulkApi.js'
import PopUpNativeCrm from './popUp_nativeCrm.js'


class PopUp extends React.Component {
  constructor(props) {
    super(props);
	console.log("hi");
  }	
 
  render() {
	  let display;
	  switch(this.props.module)
	  {
		  case 1:display=<PopUpBulkApi/>;
				 break;
		  case 2:display=<PopUpNativeCrm/>;
				break;
		  /*case 3:display=<PopUpPageViews/>;
				break;
		  case 4:display=<PopUpLeadScoring/>;
				break;
		  case 5:display=<PopUpEmailSends/>;
				break;
		  case 6:display=<PopUpFormSubmissions/>;
				break;
		  case 7:display=<PopUpContacts/>;
				break;*/
		  default:display=null;
	  }
	  
    return (
		<div className = "ExpandedView" id = "expandedView">
					<div className = "ExpandedViewBackground" onClick = {this.props.onClose}>
					</div>
					<div className = "ExpandedViewContent">
						<div className="HeaderLine">
						{/*<div className="DisplayCardHeader">
								Bulk API Syncs
						</div>*/}
							<div className="CloseIcon" onClick = {this.props.onClose}>
								<img src={closelogo} />
							</div>
						</div>
						
						{/*<div className="ExpandedBulkAPIChart" id="expandedBulkAPIChart"/>							*/}
							{display}
						
					</div>
		</div>
    );
  }
}

export default PopUp;