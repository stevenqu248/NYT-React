var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema(
{
	title: 
	{
		type: String,
		required: true
	},
	date: 
	{
		type: Date,
		required: true
	},
	url:
	{
		type: String,
		required: true
	}
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
