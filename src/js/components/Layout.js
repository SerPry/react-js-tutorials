import React from "react";

import Header from "./Header.js"
import Footer from './Footer.js';

export default class Layout extends React.Component{
	constructor(){
		super();
		this.state = {title:"Welcome, guest!"};
	}

	changeTitle(title){
		this.setState({title});
	}

	render() {
			// this.state.setState({title:"Welcome, guest"});
			
		return (
			<div>
				
				<Header changeTitle = {this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		);
	}
}