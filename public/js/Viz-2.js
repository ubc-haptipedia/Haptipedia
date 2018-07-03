
	console.log('viz-2');
	// Defining SVG
	var margin = {top: 40, right: 50, bottom: 60, left:180};
	var width = $('.viz11').width() - margin.left - margin.right;
	var height = 350 - margin.top - margin.bottom;

	var svg3 = d3.select('.viz2').select('.viz21')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('border', '1px solid black')
		.style('margin-bottom', '1%')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	var svg4 = d3.select('.viz2').select('.viz22')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '1%')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	//Defining Scales

	var xScale3 = d3.scaleLinear()
		.range([0, width]);

	var yScale3 = d3.scaleLinear()
		.range([height,0]);

	var xScale4 = d3.scaleBand()
		.rangeRound([width,0]);

	var yScale4 = d3.scaleLinear()
		.range([height, 0]);




    //Defining Axis
 
	var xAxis3 = d3.axisBottom()
	.scale(xScale3).ticks(8);

	var yAxis3 = d3.axisLeft()
	.scale(yScale3);

	var xAxis4 = d3.axisBottom()
	.scale(xScale4);

	var yAxis4 = d3.axisLeft()
	.scale(yScale4);


	

    // Binding Data to DataBase.csv

    d3.csv('./csv/DataBase_45.csv', function(error, data){

	
		data.forEach(function(d){
			 d.Year = +d.Year; // to convert strings to integers
			 d.NumberOfDoF = +d.NumberOfDoF;
			 
			 d.NumMotors = +d.NumMotors;
		 	 d.NumLinks = +d.NumLinks;
			 
			

		});

	//----------- Start of of Viz 21------------------------------------- Start  of Viz 21 ------------------------------------

		xScale3.domain([-1,16]).nice();
		yScale3.domain([-2,9]).nice();

		// gridlines in x axis function
				

				// gridlines in y axis function
				function make_y_gridlines() {		
				    return d3.axisLeft(yScale3)
				        
				}

				/*function make_x_gridlines() {		
				    return d3.axisBottom().tickSize(-250)
			          .tickFormat("").scale(xScale3);
				        
				}*/

				var make_x_gridlines_var = d3.axisBottom()
								.tickFormat("")
								.tickSize(-250)
								.scale(xScale3);
			 

			  // add the Y gridlines
			  svg3.append("g")			
			      .attr("class", "grid")
			      .call(make_y_gridlines()
			          .tickSize(-width)
			          .tickFormat("")
			      );

		      // add the X gridlines
			  svg3.append("g")			
			      .attr("class", "grid")
			      .attr("transform", "translate(0," + 250 + ")")
			      .call(make_x_gridlines_var);
			

		// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
		svg3.append('g')
			.attr('transform', 'translate(0,' + 250 + ')')
			.attr('class', 'x axis')
			.call(xAxis3);

		// y-axis is translated to (0,0)
		svg3.append('g')
			.attr('transform', 'translate(0,0)')
			.attr('class', 'y axis')
			.call(yAxis3);


		var shapeCircle = d3.symbol().size(150).type(d3.symbolCircle);
		var shapeTriangle = d3.symbol().size(150).type(d3.symbolTriangle);




		svg3.selectAll(".point3")
		    .data(data)
		    .enter().append("path")
		    .attr("class", "data point3")
		    .attr('cursor', 'pointer')
		    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
		    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
		   	.attr('d', function(d) {

	   			if(d.ProductType == "Commercial Product"){
	   				return shapeTriangle();
	   			}

	   			else {return shapeCircle();}


	   		})
		    .attr("transform", function(d) { return "translate(" + xScale3(d.NumLinks) + "," + yScale3(d.NumMotors) + ")"; });


		// Hover Dialog Box


		var hoverBox3 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardImage3 = d3.select('.card-image');
		var cardText3 = d3.select('.card-text');
		var cardTitle3 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point3').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox3.style("visibility", "visible");
			cardText3.html("<p><b> Num of Motors: </b>" + d.NumMotors + "<br>" + "<b> Num of Links: </b>" + d.NumLinks + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle3.html(d.Device);
			cardImage3.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point3').on("mousemove", function(){return hoverBox3.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point3').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox3.style("visibility", "hidden");

		});



	 
	 


		// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).
		svg3.append('text')
			.attr('x', 10)
			.attr('y', 10)
			.attr('class', 'label')
			.text('Num of Motors');


		svg3.append('text')
			.attr('x', width/2 + 30)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label')
			.text('Num of Links');

		

	// -------------------------------------- End of Viz 21 ---------------------------------------------


	//----------- Start of Viz 22------------------------------------- Start of Viz 22------------------------------------

		xScale4.domain(data.map(function(d){return d['Workspace Classification']}));

		
		yScale4.domain([-30,400]).nice();

		// gridlines in x axis function
		function make_x_gridlines() {		
		    return d3.axisBottom(xScale4)
		        
		}

		// gridlines in y axis function
		function make_y_gridlines() {		
		    return d3.axisLeft(yScale4)
		        
		}

		// add the X gridlines
	  svg4.append("g")			
	      .attr("class", "grid")
	      .attr("transform", "translate(0," + 250 + ")")
	      .call(make_x_gridlines()
	          .tickSize(-250)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg4.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines()
	          .tickSize(-width)
	          .tickFormat("")
	      )


		// Adding axes 
		svg4.append('g')
			.attr('transform', 'translate(0,' + 250 + ')')
			.attr('class', 'x axis')
			.call(xAxis4);

		svg4.append('g')
			.attr('transform', 'translate(0,0)')
			.attr('class', 'y axis')
			.call(yAxis4);

			

		// Defining labels for y-Axis

		var xCord = data.map(function(d){ return xScale4(d['Workspace Classification']) + 55});

		var shapeCircle = d3.symbol().size(150).type(d3.symbolCircle);
		var shapeTriangle = d3.symbol().size(150).type(d3.symbolTriangle);


		svg4.selectAll(".point4")
		    .data(data)
		    .enter().append("path")
		    .attr("class", "data point4")
		    .attr('cursor', 'pointer')
		    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
		    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
		   	.attr('d', function(d) {

	   			if(d.ProductType == "Commercial Product"){
	   				return shapeTriangle();
	   			}

	   			else {return shapeCircle();}


	   		})
		    .attr("transform", function(d,i) { return "translate(" + xCord[i] + "," + yScale4(d.PeakForceNewton) + ")"; });

	    // Hover Dialog Box


		var hoverBox4 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText4 = d3.select('.card-text');
		var cardImage4 = d3.select('.card-image');
		var cardTitle4 = d3.select('.card-title');


     	// For Hover

	    

	    d3.selectAll('.point4').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox4.style("visibility", "visible");
			cardText4.html("<p><b> Peak Force: </b>" + d.PeakForceNewton + "<br>" + "<b> Workspace Classification: </b>" + d['Workspace Classification'] + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle4.html(d.Device);
			cardImage4.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')




		})

		
		d3.selectAll('.point4').on("mousemove", function(){return hoverBox4.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point4').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox4.style("visibility", "hidden");

		});

		



		
	 


		// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).
		svg4.append('text')
			.attr('x', 10)
			.attr('y', 10)
			.attr('class', 'label')
			.text('Peak Force');


		svg4.append('text')
			.attr('x', width/2 + 30)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label')
			.text('Workspace');





	//----------- End of of Viz 22------------------------------------- End  of Viz 22 ------------------------------------



	});



