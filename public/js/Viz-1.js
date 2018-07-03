
	
	//console.log('viz1');
	// Defining SVG
	var margin = {top: 40, right: 50, bottom: 60, left:180};
	var width = $('.viz11').width() - margin.left - margin.right;
	var height = 350 - margin.top - margin.bottom;
	//console.log(width);
	var svg1 = d3.select('.viz1').select('.viz11')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('border', '1px solid black')
		.style('margin-bottom', '1%')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
		


	var svg2 = d3.select('.viz1').select('.viz12')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	//Defining Scales

	var xScale1 = d3.scaleLinear()
		.range([0, width]);

	var yScale1 = d3.scaleBand()
		.rangeRound([height,0]); 


	var xScale2 = d3.scaleBand()
	    .rangeRound([0, width])
	    .paddingInner(0.05)
	    .align(0.1);

	var yScale2 = d3.scaleLinear()
	    .rangeRound([height, 0]);



    //Defining Axis

    // the axes 
	var xAxis1 = d3.axisBottom()
	.scale(xScale1);



	var yAxis1 = d3.axisLeft()
	.scale(yScale1);


	
	

    // Binding Data to DataBase.csv

    d3.csv('./csv/DataBase_45.csv', function(error, data){


	
		data.forEach(function(d){
			 d.Year = +d.Year; // to convert strings to integers
			 d.NumberOfDoF = +d.NumberOfDoF;
			 
			 
			

		});



	//----------- Start of Viz 11------------------------------------- Start of Viz 11------------------------------------

		xScale1.domain([1990,2017]).nice();

		
		yScale1.domain(data.map(function(d){return d.Venue}));

		// gridlines in x axis function
		function make_x_gridlines() {		
		    return d3.axisBottom(xScale1)
		        
		}

		// gridlines in y axis function
		function make_y_gridlines() {		
		    return d3.axisLeft(yScale1)
		        
		}

		// add the X gridlines
	  svg1.append("g")			
	      .attr("class", "grid")
	      .attr("transform", "translate(0," + 250 + ")")
	      .call(make_x_gridlines()
	          .tickSize(-250)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg1.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines()
	          .tickSize(-width)
	          .tickFormat("")
	      )



		// Adding axes 
		svg1.append('g')
			.attr('transform', 'translate(0,' + 250 + ')')
			.attr('class', 'x axis')
			.call(xAxis1);

		svg1.append('g')
			.attr('transform', 'translate(0,0)')
			.attr('class', 'y axis')
			.call(yAxis1)
			.selectAll(".tick text")
      			.call(wrap, yScale1.bandwidth());

			

		// Defining labels for y-Axis

	
		var shapeCircle = d3.symbol().size(150).type(d3.symbolCircle);
		var shapeTriangle = d3.symbol().size(150).type(d3.symbolTriangle);
		var yCord = data.map(function(d){ return yScale1(d.Venue) + 12});

		svg1.selectAll(".point")
		    .data(data)
		    .enter().append("path")
		    .attr("class", "data point")
		    .attr('cursor', 'pointer')
		    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1) + d.DoFTypeIndex + d.Mechanism.substring(0,1) + d.ApplicationTagIndex;})
		    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
		   	.attr('d', function(d) {

	   			if(d.ProductType == "Commercial Product"){
	   				return shapeTriangle();
	   			}

	   			else {return shapeCircle();}


	   		})
		    .attr("transform", function(d,i) { return "translate(" + xScale1(d.Year) + "," + yCord[i] + ")"; });



		// Hover Dialog Box


		var hoverBox1 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText1 = d3.select('.card-text');
		
		var cardImage1 = d3.select('.card-image');
		var cardTitle1 = d3.select('.card-title');


	    // For Hover

	    

	    d3.selectAll('.point').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox1.style("visibility", "visible");
			cardText1.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle1.html(d.Device);
			cardImage1.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point').on("mousemove", function(){return hoverBox1.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox1.style("visibility", "hidden");

		});



		// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).
		svg1.append('text')
			.attr('x', 10)
			.attr('y', 10)
			.attr('class', 'label')
			.text('Venue');


		svg1.append('text')
			.attr('x', width/2 + 30)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label')
			.text('Publication Year');

		function wrap(text, width) {
		  text.each(function() {
		    var text = d3.select(this),
		        words = text.text().split(/\s+/).reverse(),
		        word,
		        line = [],
		        lineNumber = 0,
		        lineHeight = 1, // ems
		        y = text.attr("y"),
		        dy = parseFloat(text.attr("dy")),
		        tspan = text.text(null).append("tspan").attr("x", -15).attr("y", y).attr("dy", dy + "em")
		    while (word = words.pop()) {
		      line.push(word)
		      tspan.text(line.join(" "))
		      if (tspan.node().getComputedTextLength() > 140) {
		        line.pop()
		        tspan.text(line.join(" "))
		        line = [word]
		        tspan = text.append("tspan").attr("x", -15).attr("y", y).attr("dy", `${++lineNumber * lineHeight + dy}em`).text(word)
		      }
		    }
		  })
		}




	//----------- End of of Viz 11------------------------------------- End  of Viz 11 ------------------------------------

	
	//----------------------------------- Start of Viz12----------------------------	

		

		d3.csv("./csv/stackedYear.csv", function(d, i, columns) {
		  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
		  d.total = t;
		  return d;
		}, function(error, data1) {
			  if (error) throw error;

			  var keys = data1.columns.slice(1);

			  //data1.sort(function(a, b) { return b.total - a.total; });
			  xScale2.domain(data1.map(function(d) { return d.Year; }));
			  yScale2.domain([0, 10]).nice();

			  // gridlines in x axis function
				function make_x_gridlines() {		
				    return d3.axisBottom(xScale2)
				        
				}

				// gridlines in y axis function
				function make_y_gridlines() {		
				    return d3.axisLeft(yScale2)
				        
				}

				// add the X gridlines
			  svg2.append("g")			
			      .attr("class", "grid")
			      .attr("transform", "translate(0," + 250 + ")")
			      .call(make_x_gridlines()
			          .tickSize(-250)
			          .tickFormat("")
			      )

			  // add the Y gridlines
			  svg2.append("g")			
			      .attr("class", "grid")
			      .call(make_y_gridlines()
			          .tickSize(-width)
			          .tickFormat("")
			      )
			

			  svg2.selectAll(".point2")
			    .data(d3.stack().keys(keys)(data1))
			    .enter().append("g")
			      .attr('class', 'data point2')
			      .attr('cursor', 'pointer')
			    .selectAll("rect")
			    .data(function(d) { return d; })
			    .enter().append("rect")
			      .attr("x", function(d) { return xScale2(d.data.Year); })
			      .attr("y", function(d) { return yScale2(d[1]); })
			      .attr("height", function(d) { return yScale2(d[0]) - yScale2(d[1]); })
			      .attr("width", xScale2.bandwidth());

			  // adding color to bars according to degrees of freedom
	   		  d3.selectAll('.point2').data(data).attr('fill', function(d){return DoFColor(d.NumberOfDoF)});


				// Hover Dialog Box


				var hoverBox2 = d3.select(".hoverBox").style("visibility", "hidden");
				var cardText2 = d3.select('.card-text');
				var cardTitle2 = d3.select('.card-title');
				var cardImage2 = d3.select('.card-image');
				


			    // For Hover

			    

			    d3.selectAll('.point2').on("mouseover", function(d){

			    	initialColor = d3.select(this).style('fill');
			    	d3.select(this)
			    		.attr('r', 10)
			    		
			    		.style('stroke-width', '2')
			    		.style('stroke', 'black');

		 

					hoverBox2.style("visibility", "visible");
					cardText2.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
					cardTitle2.html(d.Device);
					cardImage2.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



				})

				
				d3.selectAll('.point2').on("mousemove", function(){return hoverBox2.style("top",
				    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

				

				d3.selectAll('.point2').on("mouseout", function(){


					d3.select(this)
						.attr('r', 8)
						.style('stroke', 'none');
					


					 hoverBox2.style("visibility", "hidden");

				});


				

			  // add axes
			  svg2.append("g")
			      .attr("class", "axis")
			      .attr("transform", "translate(0," + 250 + ")")
			      .call(d3.axisBottom(xScale2));

			  svg2.append("g")
			      .attr("class", "axis")
			      .call(d3.axisLeft(yScale2).ticks(5));
			    

			  //adding text to axes

			  svg2.append('text')
				.attr('x', 10)
				.attr('y', 10)
				.attr('class', 'label')
				.text('Number of Records');


			  svg2.append('text')
				.attr('x', width/2 + 30)
				.attr('y', 290)
				.attr('text-anchor', 'end')
				.attr('class', 'label')
				.text('Publication Year');

			  
		}); 

		


	//----------------------------------- Start of Viz12----------------------------	




	});// End of Data Binding

	





