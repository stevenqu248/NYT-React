var React = require("react");

var Articles = React.createClass(
{
	getInitialState: function()
	{
		return 
		{
			articles: []
		};
	},

	render: function()
	{
		return 
		(<div class="row">
			<div class="col-sm-12">
				<br>

				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title"><strong><i class="fa fa-table"></i>Top Articles</strong></h3>
					</div>

					<div class="panel-body" id="well-section"></div>
				</div>
			</div>
		</div>);
	}
})

module.exports = Articles;