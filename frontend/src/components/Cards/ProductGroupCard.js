import React, { Component } from 'react';
import './ProductGroupCard.css';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';

const ProductGroupCard = ({ title, groupList }) => (
	<div>
		<div className="title">{title}</div>
		<div className="group">
			{Object.keys(groupList).map(key => (
				<div key={key} className="group-border">
					{groupList[key]} {key}
					<div className="remove-icon" 
						onClick={(a,b) => {
							go(key,groupList)
						}}>
						<MuiThemeProvider muiTheme={getMuiTheme()}>
							<NavigationClose style={{ color: '#2c8efe' }} />
						</MuiThemeProvider>
					</div>
				</div>
			))}
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<ContentAddCircleOutline style={{ color: '#2c8efe' }} />
			</MuiThemeProvider>
		</div>
	</div>
);

function go(a,b) {
	b.splice(a,1)
	console.log(b)
}
export default ProductGroupCard;
