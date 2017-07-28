import React from "react"

import Search from "./Search"

import Saved from "./Saved"

class Main extends React.Component (
{
	constructor()
	{
		super();
        this.state = {
            articles: []
        };
    },

	render()
	{
		return (
			<section>
				<div class="jumbotron" style={{backgroundColor: '#20315A', color: 'white'}}>
					<h1 class="text-center"><strong><i class="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
				</div>
				<Search/>
				<Saved/>
			</section>
			
		);
	}
})

export default Main;