var React = require("react");

var Search = React.createClass(
{
	getInitialState: function()
	{
		return 
		{
			foundArticles: []
		};
	},

	render: function()
	{
		return 
		(
			<h3>Found You</h3>
    // <div class="row">
    //   <div class="col-sm-12">
    //     <br>
    //     <div class="panel panel-primary">
    //       <div class="panel-heading">
    //         <h3 class="panel-title"><strong><i class="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
    //       </div>
    //       <div class="panel-body">

    //         <!-- Here we create an HTML Form for handling the inputs-->
    //         <form role="form">

    //           <!-- Here we create the text box for capturing the search term-->
    //           <div class="form-group">
    //             <label for="search">Search Term:</label>
    //             <input type="text" class="form-control" id="search-term">
    //           </div>

    //           <!-- Here we capture the number of records that the user wants to retrieve  -->
    //           <div class="form-group">
    //             <label for="pwd">Number of Records to Retrieve:</label>
    //             <select class="form-control" id="num-records-select">
				// 			<option value="1">1</option>
				// 			<!-- Setting the option for 5 as default -->
				// 			<option value="5" selected>5</option>
				// 			<option value="10">10</option>
				// 		</select>
    //           </div>

    //           <!-- Here we capture the Start Year Parameter-->
    //           <div class="form-group">
    //             <label for="start-year">Start Year (Optional):</label>
    //             <input type="text" class="form-control" id="start-year">
    //           </div>

    //           <!-- Here we capture the End Year Parameter -->
    //           <div class="form-group">
    //             <label for="end-year">End Year (Optional):</label>
    //             <input type="text" class="form-control" id="end-year">
    //           </div>

    //           <!-- Here we have our final submit button -->
    //           <button type="submit" class="btn btn-default" id="run-search"><i class="fa fa-search"></i> Search</button>
    //           <button type="button" class="btn btn-default" id="clear-all"><i class="fa fa-trash"></i> Clear Results</button>

    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    //     <!-- This row will handle all of the retrieved articles -->
    // <div class="row">
    //   <div class="col-sm-12">
    //     <br>

    //     <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->
    //     <div class="panel panel-primary">

    //       <!-- Panel Heading for the retrieved articles box -->
    //       <div class="panel-heading">
    //         <h3 class="panel-title"><strong><i class="fa fa-table"></i>   Top Articles</strong></h3>
    //       </div>

    //       <!-- This main panel will hold each of the resulting articles -->
    //       <div class="panel-body" id="well-section">
    //       </div>
    //     </div>
    //   </div>
    // </div>
    	);
	}
})

module.exports = Search;