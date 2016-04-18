import React from "react";

import Title from './Header/Title';

export default class Header extends React.Component{

		updateTitle(e){
			var newTitle = e.target.value;
			this.props.changeTitle(newTitle);
		}
	render() {
		


		return (
			<div>
				<Title title = {this.props.title}/>
				<input value = {this.props.title} onChange = {this.updateTitle.bind(this)}/>
			</div>
			);
	}
}