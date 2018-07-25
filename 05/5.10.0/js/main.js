/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 2 - Gapminder Clone
*/

d3.json("data/data.json").then(function(data){
	data.forEach(d => {
		d.year = +d.year
	});
	console.log(data[0]);
	const svg = d3.select('#chart-area').append('svg')
								.attr('height', '500px')
								.attr('width', '600px')

		const formattedData = data.map(function(year){
			return year["countries"].filter(function(country){
					var dataExists = (country.income && country.life_exp);
					return dataExists
			}).map(function(country){
					country.income = +country.income;
					country.life_exp = +country.life_exp;
					return country;            
			})
	});
	console.log(formattedData);
	var timeLabel = g.append("text")
    .attr("y", height -10)
    .attr("x", width - 40)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("1800");
})