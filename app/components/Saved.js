var React = require("react");

var Saved = React.createClass(
{
	getInitialState: function()
	{
		return 
		{
			savedArticles: []
		};
	},

	render: function()
	{
		return 
		(
			<section>
				<h1>hello</h1>
				<p>Bob</p>
			</section>);
	}
})

module.exports = Saved;