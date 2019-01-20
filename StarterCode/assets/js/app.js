// @TODO: Creating scatter plot for web page

//setting up our area for the chart in our div id=scatter
var width = parseInt(d3.select("#scatter").style("width"));

//Setting the height of the graph
var height = width - width/4;

//Setting the margin spacing for the graph
var margin = 20;

// space for the graph Labels
LabelA = 110;

// padding for the text at the bottom and left Axes

var textPadBot = 40;
var textPadLeft = 40;

//creating the area for the svg area
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart")

//setting the radius of each scatter point so we can call it later
var dotRadius;
function dotGet() {
  if (width <= 530) {
    dotRadius = 5;
  }
  else {
    dotRadius = 10;
  }
}
dotGet();

//Bottom Axis
//creating group element to nest the interactive graph Labels
svg.append("g").attr("class", "xLabel")

//allows us to select xLabel components
var xLabel = d3.select(".xLabel")

function xLabelRefresh() {
  xLabel.attr(
    "transform",
    "translate(" +
      ((width - LabelA) / 2 +LabelA) +
      ", " + (height - margin - textPadBot) +
      ")"
  );
}
xLabelRefresh();

//Appending the three labels to the svg for x Label
//poverty
xLabel
  .append("text")
  .attr("y", -25)
  .attr("data-name", "poverty")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("In Poverty (%)");
//Age
xLabel
  .append("text")
  .attr("y", 0)
  .attr("data-name", "age")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("Age (Median)");
//Age
xLabel
  .append("text")
  .attr("y", 25)
  .attr("data-name", "income")
  .attr("data-axis", "x")
  .attr("class", "aText inactive x")
  .text("Household Income (Median)");

//Y Axis creation
// making variables for yaxis transform/translate
var yLabelX = margin + textPadLeft;
var yLabelY = ((height + LabelA) / 2 - LabelA);

//Adding a class for the Y Label group
svg.append("g").attr("class", "yLabel")

//selecting the ylabel group
var yLabel = d3.select(".yLabel")

//nesting the the group's transform attribute in a function
//This makes it easier to make it change when the window changes
function yLabelRefresh() {
  yLabel.attr(
    "transform",
    "translate(" + yLabelX + ", " + yLabelY + ")rotate(-90)"
  );
}
yLabelRefresh();

//Appending to the y label text group
//Obesity
yLabel
  .append("text")
  .attr("y", -25)
  .attr("data-name", "obesity")
  .attr("data-axis", "y")
  .attr("class", "aText inactive y")
  .text("Obese (%)");

//Smoking
yLabel
  .append("text")
  .attr("y", 0)
  .attr("data-name", "smokes")
  .attr("data-axis", "y")
  .attr("class", "aText inactive y")
  .text("Smokes (%)");

//Lacks Healthcare
yLabel
  .append("text")
  .attr("y", 25)
  .attr("data-name", "healthcare")
  .attr("data-axis", "y")
  .attr("class", "aText inactive y")
  .text("Lacks Healthcare (%)");

//part 2 is importing our data from our CSV
d3.csv("assets/data/data.csv").then(function(data) {
  console.log(data);
});
