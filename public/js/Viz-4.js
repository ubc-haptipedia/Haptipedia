
	
	// Defining SVG
	var margin = {top: 40, right: 50, bottom: 60, left:180};
	var width = $('.viz11').width() - margin.left - margin.right;
	var height = 300 - margin.top - margin.bottom;



	/*console.log($('.viz321').width());
	console.log((width + margin.left + margin.right)/4 + 45);
	console.log($('.viz326').width());*/
	var svg71 = d3.select('.viz4').select('.viz41').select('.viz411')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/4 + 45)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-left', '1px solid black')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + ((width + margin.left + margin.right)/12 + (width + margin.left + margin.right)/48) + ',' + margin.top/2 + ')');


	var svg72 = d3.select('.viz4').select('.viz41').select('.viz412')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/5)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');

	var svg73 = d3.select('.viz4').select('.viz41').select('.viz413')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/5)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');


	var svg74 = d3.select('.viz4').select('.viz41').select('.viz414')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/5)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');



	var svg75 = d3.select('.viz4').select('.viz41').select('.viz415')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/5)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');


	var svg81 = d3.select('.viz4').select('.viz42').select('.viz421')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 30)
		.attr('height', 350)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + 30 + ',' + margin.top + ')');

	var svg82 = d3.select('.viz4').select('.viz42').select('.viz422')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 30)
		.attr('height', 350)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + 30 + ',' + margin.top + ')');

	var svg83 = d3.select('.viz4').select('.viz42').select('.viz423')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 30)
		.attr('height', 350)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + 30 + ',' + margin.top + ')');

	var svg84 = d3.select('.viz4').select('.viz42').select('.viz424')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 30)
		.attr('height', 350)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + 30 + ',' + margin.top + ')');

	var svg85 = d3.select('.viz4').select('.viz42').select('.viz425')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 30)
		.attr('height', 350)
		.style('background-color', 'rgba(255,255,255,0.5)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + 30 + ',' + margin.top + ')');

	
	//Defining Scales



	var xScale71 = d3.scaleBand()
		.rangeRound([0, (width + margin.left + margin.right)/5 -5]);

	var xScale72 = d3.scaleBand()
		.rangeRound([0, (width + margin.left + margin.right)/5 -5]);

	var xScale73 = d3.scaleBand()
		.rangeRound([0, (width + margin.left + margin.right)/5 -5]);

	var xScale74 = d3.scaleBand()
		.rangeRound([0, (width + margin.left + margin.right)/5 -5]);

	

	var xScale75 = d3.scaleBand()
		.rangeRound([0, (width + margin.left + margin.right)/5 -5]);


	var yScale71 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale72 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale73 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale74 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale75 = d3.scaleBand()
		.rangeRound([470,0]);




	var xScale81 = d3.scaleBand()
	    .rangeRound([0, ((width + margin.left + margin.right)/6 - 20)])
	    .paddingInner(0.05)
	    .align(0.1);

    var xScale82 = d3.scaleBand()
	    .rangeRound([0, ((width + margin.left + margin.right)/6 - 20)])
	    .paddingInner(0.05)
	    .align(0.1);

    var xScale83 = d3.scaleBand()
	    .rangeRound([0, ((width + margin.left + margin.right)/6 - 20)])
	    .paddingInner(0.05)
	    .align(0.1);

    var xScale84 = d3.scaleBand()
	    .rangeRound([0, ((width + margin.left + margin.right)/6 - 20)])
	    .paddingInner(0.05)
	    .align(0.1);

    var xScale85 = d3.scaleBand()
	    .rangeRound([0, ((width + margin.left + margin.right)/6 - 20)])
	    .paddingInner(0.05)
	    .align(0.1);

	var yScale81 = d3.scaleLinear()
	    .rangeRound([250, 0]);

    var yScale82 = d3.scaleLinear()
	    .rangeRound([250, 0]);

    var yScale83 = d3.scaleLinear()
	    .rangeRound([250, 0]);

    var yScale84 = d3.scaleLinear()
	    .rangeRound([250, 0]);

    var yScale85 = d3.scaleLinear()
	    .rangeRound([250, 0]);




    //Defining Axis
 
	

	var xAxis71 = d3.axisBottom()
	.scale(xScale71);

	var xAxis72 = d3.axisBottom()
	.scale(xScale72);

	var xAxis73 = d3.axisBottom()
	.scale(xScale73);

	var xAxis74 = d3.axisBottom()
	.scale(xScale74);

	

	var xAxis75 = d3.axisBottom()
	.scale(xScale75);

	var yAxis71= d3.axisLeft()
	.scale(yScale71);

	var yAxis72= d3.axisLeft()
	.scale(yScale72);

	var yAxis73= d3.axisLeft()
	.scale(yScale73);

	var yAxis74= d3.axisLeft()
	.scale(yScale74);

	

	var yAxis75= d3.axisLeft()
	.scale(yScale75);


	

    // Binding Data to DataBase.csv

    d3.csv('./csv/DataBase_45.csv', function(error, data){

	
		data.forEach(function(d){
			 d.Year = +d.Year; // to convert strings to integers
			 d.NumberOfDoF = +d.NumberOfDoF;
			 d.VenueIndex = +d.VenueIndex;
			 d.NumMotors = +d.NumMotors;
		 	 d.NumLinks = +d.NumLinks;
			 
			

		});


//----------- Start of Viz 411------------------------------------- Start of Viz 411------------------------------------

	xScale71.domain(data.map(function(d){ return d.Portability;}));
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale71.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg71.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis71);

	// y-axis is translated to (0,0)
	svg71.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis71);

	// gridlines in x axis function
	function make_x_gridlines71() {		
	    return d3.axisBottom(xScale71)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines71() {		
	    return d3.axisLeft(yScale71)
	        
	}

	// add the X gridlines
	  svg71.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines71()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg71.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines71()
	          .tickSize(-width)
	          .tickFormat("")
	      )




	var shapeCross = d3.symbol().size(100).type(d3.symbolCross);
	
	var xCord = data.map(function(d){return xScale71(d.Portability) + 35});
	var yCord = data.map(function(d){return yScale71(d.Device)+ 5});
	

	svg71.selectAll(".point71")
	    .data(data)
	    .enter().append("path")
	    .attr("class", "data point71")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	   	.attr('d',shapeCross())
	    .attr("transform", function(d, i) { return "translate(" + xCord[i] + "," + yCord[i] + ")"; });
	    


	// Hover Dialog Box


		var hoverBox71 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardImage71 = d3.select('.card-image');
		var cardText71 = d3.select('.card-text');
		var cardTitle71 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point71').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox71.style("visibility", "visible");
			cardText71.html("<p><b> Portability: </b>" + d.Portability + "<br>" + "<b> Robustness </b>" + d.Robustness + "<br>" + "<b> Fabricability: </b>" + d.Fabricability + "<br>" + "<b> Obtainability: </b>" + d.Obtainability + "<br>" + "<b> Repairability: </b>" + d.Repairability + "</p>");
			cardTitle71.html(d.Device);
			cardImage71.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point71').on("mousemove", function(){return hoverBox71.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point71').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox71.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).
	svg71.append('text')
		.attr('x', -50)
		.attr('y', 5)
		.attr('class', 'label')
		.style('font-size', 12)
		.text('Device');


	svg71.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label portability-label')
		
		.text('Portability')
		



//----------- End of of Viz 411------------------------------------- End  of Viz 411------------------------------------

//----------- Start of Viz 412------------------------------------- Start of Viz 412------------------------------------

	xScale72.domain(data.map(function(d){ return d.Robustness;}));
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale72.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg72.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis72);

	// y-axis is translated to (0,0)
	svg72.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis72);


	
	// gridlines in x axis function
	function make_x_gridlines72() {		
	    return d3.axisBottom(xScale72)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines72() {		
	    return d3.axisLeft(yScale72)
	        
	}

	// add the X gridlines
	  svg72.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines72()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg72.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines72()
	          .tickSize(-width)
	          .tickFormat("")
	      )


	var shapeCross = d3.symbol().size(100).type(d3.symbolCross);
	
	var xCord = data.map(function(d){return xScale71(d.Robustness) + 35});
	var yCord = data.map(function(d){return yScale71(d.Device)+ 5});
	

	svg72.selectAll(".point72")
	    .data(data)
	    .enter().append("path")
	    .attr("class", "data point72")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	   	.attr('d',shapeCross())
	    .attr("transform", function(d, i) { return "translate(" + xCord[i] + "," + yCord[i] + ")"; });


	svg72.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox72 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText72 = d3.select('.card-text');
		var cardImage72 = d3.select('.card-image');
		var cardTitle72 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point72').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox72.style("visibility", "visible");
			cardText72.html("<p><b> Portability: </b>" + d.Portability + "<br>" + "<b> Robustness </b>" + d.Robustness + "<br>" + "<b> Fabricability: </b>" + d.Fabricability + "<br>" + "<b> Obtainability: </b>" + d.Obtainability + "<br>" + "<b> Repairability: </b>" + d.Repairability + "</p>");
			cardTitle72.html(d.Device);
			cardImage72.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point72').on("mousemove", function(){return hoverBox72.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point72').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox72.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg72.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label robustness-label')
		.text('Robustness');


//----------- End of of Viz 412------------------------------------- End  of Viz 412------------------------------------

//----------- Start of Viz 413------------------------------------- Start of Viz 413------------------------------------

	xScale73.domain(data.map(function(d){ return d.Fabricability;}));
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale73.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg73.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis73);

	// y-axis is translated to (0,0)
	svg73.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis73);


	// gridlines in x axis function
	function make_x_gridlines73() {		
	    return d3.axisBottom(xScale73)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines73() {		
	    return d3.axisLeft(yScale73)
	        
	}

	// add the X gridlines
	  svg73.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines73()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg73.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines73()
	          .tickSize(-width)
	          .tickFormat("")
	      )


	var shapeCross = d3.symbol().size(100).type(d3.symbolCross);
	
	var xCord = data.map(function(d){return xScale73(d.Fabricability) + 35});
	var yCord = data.map(function(d){return yScale73(d.Device)+ 5});
	

	svg73.selectAll(".point73")
	    .data(data)
	    .enter().append("path")
	    .attr("class", "data point73")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	   	.attr('d',shapeCross())
	    .attr("transform", function(d, i) { return "translate(" + xCord[i] + "," + yCord[i] + ")"; });


	svg73.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox73 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText73 = d3.select('.card-text');
		var cardImage73 = d3.select('.card-image');
		var cardTitle73 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point73').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox73.style("visibility", "visible");
			cardText73.html("<p><b> Portability: </b>" + d.Portability + "<br>" + "<b> Robustness </b>" + d.Robustness + "<br>" + "<b> Fabricability: </b>" + d.Fabricability + "<br>" + "<b> Obtainability: </b>" + d.Obtainability + "<br>" + "<b> Repairability: </b>" + d.Repairability + "</p>");
			cardTitle73.html(d.Device);
			cardImage73.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point73').on("mousemove", function(){return hoverBox73.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point73').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox73.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg73.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label fabricability-label')
		.text('Fabricability');


//----------- End of of Viz 413------------------------------------- End  of Viz 413------------------------------------



//----------- Start of Viz 414------------------------------------- Start of Viz 414------------------------------------

	xScale74.domain(data.map(function(d){ return d.Obtainability;}));
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale74.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg74.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis74);

	// y-axis is translated to (0,0)
	svg74.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis74);


	// gridlines in x axis function
	function make_x_gridlines74() {		
	    return d3.axisBottom(xScale74)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines74() {		
	    return d3.axisLeft(yScale74)
	        
	}

	// add the X gridlines
	  svg74.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines74()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg74.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines74()
	          .tickSize(-width)
	          .tickFormat("")
	      )


	var shapeCross = d3.symbol().size(100).type(d3.symbolCross);
	
	var xCord = data.map(function(d){return xScale74(d.Obtainability) + 35});
	var yCord = data.map(function(d){return yScale74(d.Device)+ 5});
	

	svg74.selectAll(".point74")
	    .data(data)
	    .enter().append("path")
	    .attr("class", "data point74")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	   	.attr('d',shapeCross())
	    .attr("transform", function(d, i) { return "translate(" + xCord[i] + "," + yCord[i] + ")"; });


	svg74.selectAll('.y.tick').select('text').text('');
	    

// Hover Dialog Box


		var hoverBox74 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText74 = d3.select('.card-text');
		var cardImage74 = d3.select('.card-image');
		var cardTitle74 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point74').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox74.style("visibility", "visible");
			cardText74.html("<p><b> Portability: </b>" + d.Portability + "<br>" + "<b> Robustness </b>" + d.Robustness + "<br>" + "<b> Fabricability: </b>" + d.Fabricability + "<br>" + "<b> Obtainability: </b>" + d.Obtainability + "<br>" + "<b> Repairability: </b>" + d.Repairability + "</p>");
			cardTitle74.html(d.Device);
			cardImage74.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point74').on("mousemove", function(){return hoverBox74.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point74').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox74.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg74.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label obtainability-label')
		.text('Obtainability');

//----------- End of of Viz 414------------------------------------- End  of Viz 414------------------------------------



//----------- Start of Viz 415------------------------------------- Start of Viz 415------------------------------------

	xScale75.domain(data.map(function(d){ return d.Repairability;}));
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale75.domain(data.map(function(d){ return d.Device;}));

	

	// gridlines in x axis function
	function make_x_gridlines75() {		
	    return d3.axisBottom(xScale75)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines75() {		
	    return d3.axisLeft(yScale75)
	        
	}

	// add the X gridlines
	  svg75.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines75()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg75.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines75()
	          .tickSize(-width)
	          .tickFormat("")
	      )

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg75.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis75);

	// y-axis is translated to (0,0)
	svg75.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis75);


	var shapeCross = d3.symbol().size(100).type(d3.symbolCross);
	
	var xCord = data.map(function(d){return xScale74(d.Obtainability) + 35});
	var yCord = data.map(function(d){return yScale74(d.Device)+ 5});
	

	svg75.selectAll(".point75")
	    .data(data)
	    .enter().append("path")
	    .attr("class", "data point75")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	   	.attr('d',shapeCross())
	    .attr("transform", function(d, i) { return "translate(" + xCord[i] + "," + yCord[i] + ")"; });


	svg75.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox75 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText75 = d3.select('.card-text');
		var cardTitle75 = d3.select('.card-title');
		var cardImage75 = d3.select('.card-image');


	    // For Hover

	    

	    d3.selectAll('.point75').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox75.style("visibility", "visible");
			cardText75.html("<p><b> Portability: </b>" + d.Portability + "<br>" + "<b> Robustness </b>" + d.Robustness + "<br>" + "<b> Fabricability: </b>" + d.Fabricability + "<br>" + "<b> Obtainability: </b>" + d.Obtainability + "<br>" + "<b> Repairability: </b>" + d.Repairability + "</p>");
			cardTitle75.html(d.Device);
			cardImage75.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point75').on("mousemove", function(){return hoverBox75.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point75').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox75.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg75.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label repairability-label')
		.text('Repairability');

//----------- End of of Viz 415------------------------------------- End  of Viz 415------------------------------------
	
//----------------------------------- Start of Viz421----------------------------	

	

	d3.csv("./csv/stackedPortability.csv", function(d, i, columns) {
	  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
	  d.total = t;
	  return d;
	}, function(error, data1) {
		  if (error) throw error;

		  var keys = data1.columns.slice(1);

		  //data1.sort(function(a, b) { return b.total - a.total; });
		  xScale81.domain(data1.map(function(d) { return d.Portability; }));
		  yScale81.domain([0, 30]).nice();

		  // gridlines in x axis function
			function make_x_gridlines() {		
			    return d3.axisBottom(xScale81)
			        
			}

			// gridlines in y axis function
			function make_y_gridlines() {		
			    return d3.axisLeft(yScale81)
			        
			}

			// add the X gridlines
		  svg81.append("g")			
		      .attr("class", "grid")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(make_x_gridlines()
		          .tickSize(-250)
		          .tickFormat("")
		      )

		  // add the Y gridlines
		  svg81.append("g")			
		      .attr("class", "grid")
		      .call(make_y_gridlines()
		          .tickSize(-width)
		          .tickFormat("")
		      )
		

		  svg81.selectAll(".point81")
		    .data(d3.stack().keys(keys)(data1))
		    .enter().append("g")
		      .attr('class', 'data point81')
		      .attr('cursor', 'pointer')
		    .selectAll("rect")
		    .data(function(d) { return d; })
		    .enter().append("rect")
		      .attr("x", function(d) { return xScale81(d.data.Portability); })
		      .attr("y", function(d) { return yScale81(d[1]); })
		      .attr("height", function(d) { return yScale81(d[0]) - yScale81(d[1]); })
		      .attr("width", xScale81.bandwidth());

		  // adding color to bars according to degrees of freedom
   		  d3.selectAll('.point81').data(data).attr('fill', function(d){return DoFColor(d.NumberOfDoF)});


			// Hover Dialog Box


			var hoverBox81 = d3.select(".hoverBox").style("visibility", "hidden");
			var cardText81 = d3.select('.card-text');
			var cardTitle81 = d3.select('.card-title');
			var cardImage81 = d3.select('.card-image');
			


		    // For Hover

		    

		    d3.selectAll('.point81').on("mouseover", function(d){

		    	initialColor = d3.select(this).style('fill');
		    	d3.select(this)
		    		.attr('r', 10)
		    		
		    		.style('stroke-width', '2')
		    		.style('stroke', 'black');

	 

				hoverBox81.style("visibility", "visible");
				cardText81.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
				cardTitle81.html(d.Device);
				cardImage81.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



			})

			
			d3.selectAll('.point81').on("mousemove", function(){return hoverBox81.style("top",
			    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

			

			d3.selectAll('.point81').on("mouseout", function(){


				d3.select(this)
					.attr('r', 8)
					.style('stroke', 'none');
				


				 hoverBox81.style("visibility", "hidden");

			});


			

		  // add axes
		  svg81.append("g")
		      .attr("class", "axis")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(d3.axisBottom(xScale81));

		  svg81.append("g")
		      .attr("class", "axis")
		      .call(d3.axisLeft(yScale81).ticks(5));
		    

		  //adding text to axes

		  svg81.append('text')
			.attr('x', -25)
			.attr('y', -15)
			.attr('class', 'label')
			.text('No. of Records');


		  svg81.append('text')
			.attr('x', 100)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label portability-label')
			.text('Portability');

		  
	}); 

	


//----------------------------------- Start of Viz421----------------------------	

//----------------------------------- Start of Viz422----------------------------	

	

	d3.csv("./csv/stackedRobustness.csv", function(d, i, columns) {
	  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
	  d.total = t;
	  return d;
	}, function(error, data1) {
		  if (error) throw error;

		  var keys = data1.columns.slice(1);

		  //data1.sort(function(a, b) { return b.total - a.total; });
		  xScale82.domain(data1.map(function(d) { return d.Robustness; }));
		  yScale82.domain([0, 30]).nice();

		  // gridlines in x axis function
			function make_x_gridlines() {		
			    return d3.axisBottom(xScale82)
			        
			}

			// gridlines in y axis function
			function make_y_gridlines() {		
			    return d3.axisLeft(yScale82)
			        
			}

			// add the X gridlines
		  svg82.append("g")			
		      .attr("class", "grid")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(make_x_gridlines()
		          .tickSize(-250)
		          .tickFormat("")
		      )

		  // add the Y gridlines
		  svg82.append("g")			
		      .attr("class", "grid")
		      .call(make_y_gridlines()
		          .tickSize(-width)
		          .tickFormat("")
		      )
		

		  svg82.selectAll(".point82")
		    .data(d3.stack().keys(keys)(data1))
		    .enter().append("g")
		      .attr('class', 'data point82')
		      .attr('cursor', 'pointer')
		    .selectAll("rect")
		    .data(function(d) { return d; })
		    .enter().append("rect")
		      .attr("x", function(d) { return xScale82(d.data.Robustness); })
		      .attr("y", function(d) { return yScale82(d[1]); })
		      .attr("height", function(d) { return yScale82(d[0]) - yScale82(d[1]); })
		      .attr("width", xScale82.bandwidth());

		  // adding color to bars according to degrees of freedom
   		  d3.selectAll('.point82').data(data).attr('fill', function(d){return DoFColor(d.NumberOfDoF)});


			// Hover Dialog Box


			var hoverBox82 = d3.select(".hoverBox").style("visibility", "hidden");
			var cardText82 = d3.select('.card-text');
			var cardTitle82 = d3.select('.card-title');
			var cardImage82 = d3.select('.card-image');
			


		    // For Hover

		    

		    d3.selectAll('.point82').on("mouseover", function(d){

		    	initialColor = d3.select(this).style('fill');
		    	d3.select(this)
		    		.attr('r', 10)
		    		
		    		.style('stroke-width', '2')
		    		.style('stroke', 'black');

	 

				hoverBox82.style("visibility", "visible");
				cardText82.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
				cardTitle82.html(d.Device);
				cardImage82.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



			})

			
			d3.selectAll('.point82').on("mousemove", function(){return hoverBox82.style("top",
			    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

			

			d3.selectAll('.point82').on("mouseout", function(){


				d3.select(this)
					.attr('r', 8)
					.style('stroke', 'none');
				


				 hoverBox82.style("visibility", "hidden");

			});


			

		  // add axes
		  svg82.append("g")
		      .attr("class", "axis")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(d3.axisBottom(xScale82));

		  svg82.append("g")
		      .attr("class", "axis")
		      .call(d3.axisLeft(yScale82).ticks(5));
		    

		  //adding text to axes

		  svg82.append('text')
			.attr('x', -25)
			.attr('y', -15)
			.attr('class', 'label')
			.text('No. of Records');


		  svg82.append('text')
			.attr('x', 100)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label robustness-label')
			.text('Robustness');

		  
	}); 

	


//----------------------------------- Start of Viz422----------------------------	

//----------------------------------- Start of Viz423----------------------------	

	

	d3.csv("./csv/stackedFabricability.csv", function(d, i, columns) {
	  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
	  d.total = t;
	  return d;
	}, function(error, data1) {
		  if (error) throw error;

		  var keys = data1.columns.slice(1);

		  //data1.sort(function(a, b) { return b.total - a.total; });
		  xScale83.domain(data1.map(function(d) { return d.Fabricability; }));
		  yScale83.domain([0, 30]).nice();

		  // gridlines in x axis function
			function make_x_gridlines() {		
			    return d3.axisBottom(xScale83)
			        
			}

			// gridlines in y axis function
			function make_y_gridlines() {		
			    return d3.axisLeft(yScale83)
			        
			}

			// add the X gridlines
		  svg83.append("g")			
		      .attr("class", "grid")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(make_x_gridlines()
		          .tickSize(-250)
		          .tickFormat("")
		      )

		  // add the Y gridlines
		  svg83.append("g")			
		      .attr("class", "grid")
		      .call(make_y_gridlines()
		          .tickSize(-width)
		          .tickFormat("")
		      )
		

		  svg83.selectAll(".point83")
		    .data(d3.stack().keys(keys)(data1))
		    .enter().append("g")
		      .attr('class', 'data point83')
		      .attr('cursor', 'pointer')
		    .selectAll("rect")
		    .data(function(d) { return d; })
		    .enter().append("rect")
		      .attr("x", function(d) { return xScale83(d.data.Fabricability); })
		      .attr("y", function(d) { return yScale83(d[1]); })
		      .attr("height", function(d) { return yScale83(d[0]) - yScale83(d[1]); })
		      .attr("width", xScale83.bandwidth());

		  // adding color to bars according to degrees of freedom
   		  d3.selectAll('.point83').data(data).attr('fill', function(d){return DoFColor(d.NumberOfDoF)});


			// Hover Dialog Box


			var hoverBox83 = d3.select(".hoverBox").style("visibility", "hidden");
			var cardText83 = d3.select('.card-text');
			var cardTitle83 = d3.select('.card-title');
			var cardImage83 = d3.select('.card-image');
			


		    // For Hover

		    

		    d3.selectAll('.point83').on("mouseover", function(d){

		    	initialColor = d3.select(this).style('fill');
		    	d3.select(this)
		    		.attr('r', 10)
		    		
		    		.style('stroke-width', '2')
		    		.style('stroke', 'black');

	 

				hoverBox83.style("visibility", "visible");
				cardText83.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
				cardTitle83.html(d.Device);
				cardImage83.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



			})

			
			d3.selectAll('.point83').on("mousemove", function(){return hoverBox83.style("top",
			    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

			

			d3.selectAll('.point83').on("mouseout", function(){


				d3.select(this)
					.attr('r', 8)
					.style('stroke', 'none');
				


				 hoverBox83.style("visibility", "hidden");

			});


			

		  // add axes
		  svg83.append("g")
		      .attr("class", "axis")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(d3.axisBottom(xScale83));

		  svg83.append("g")
		      .attr("class", "axis")
		      .call(d3.axisLeft(yScale83).ticks(5));
		    

		  //adding text to axes

		  svg83.append('text')
			.attr('x', -25)
			.attr('y', -15)
			.attr('class', 'label')
			.text('No. of Records');


		  svg83.append('text')
			.attr('x', 100)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label fabricability-label')
			.text('Fabricability');

		  
	}); 

	


//----------------------------------- Start of Viz423----------------------------	

//----------------------------------- Start of Viz424----------------------------	

	

	d3.csv("./csv/stackedObtainability.csv", function(d, i, columns) {
	  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
	  d.total = t;
	  return d;
	}, function(error, data1) {
		  if (error) throw error;

		  var keys = data1.columns.slice(1);

		  //data1.sort(function(a, b) { return b.total - a.total; });
		  xScale84.domain(data1.map(function(d) { return d.Obtainability; }));
		  yScale84.domain([0, 40]).nice();

		  // gridlines in x axis function
			function make_x_gridlines() {		
			    return d3.axisBottom(xScale84)
			        
			}

			// gridlines in y axis function
			function make_y_gridlines() {		
			    return d3.axisLeft(yScale84)
			        
			}

			// add the X gridlines
		  svg84.append("g")			
		      .attr("class", "grid")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(make_x_gridlines()
		          .tickSize(-250)
		          .tickFormat("")
		      )

		  // add the Y gridlines
		  svg84.append("g")			
		      .attr("class", "grid")
		      .call(make_y_gridlines()
		          .tickSize(-width)
		          .tickFormat("")
		      )
		

		  svg84.selectAll(".point84")
		    .data(d3.stack().keys(keys)(data1))
		    .enter().append("g")
		      .attr('class', 'data point84')
		      .attr('cursor', 'pointer')
		    .selectAll("rect")
		    .data(function(d) { return d; })
		    .enter().append("rect")
		      .attr("x", function(d) { return xScale84(d.data.Obtainability); })
		      .attr("y", function(d) { return yScale84(d[1]); })
		      .attr("height", function(d) { return yScale84(d[0]) - yScale84(d[1]); })
		      .attr("width", xScale84.bandwidth());

		  // adding color to bars according to degrees of freedom
   		  d3.selectAll('.point84').data(data).attr('fill', function(d){return DoFColor(d.NumberOfDoF)});


			// Hover Dialog Box


			var hoverBox84 = d3.select(".hoverBox").style("visibility", "hidden");
			var cardText84 = d3.select('.card-text');
			var cardTitle84 = d3.select('.card-title');
			var cardImage84 = d3.select('.card-image');
			


		    // For Hover

		    

		    d3.selectAll('.point84').on("mouseover", function(d){

		    	initialColor = d3.select(this).style('fill');
		    	d3.select(this)
		    		.attr('r', 10)
		    		
		    		.style('stroke-width', '2')
		    		.style('stroke', 'black');

	 

				hoverBox84.style("visibility", "visible");
				cardText84.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
				cardTitle84.html(d.Device);
				cardImage84.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



			})

			
			d3.selectAll('.point84').on("mousemove", function(){return hoverBox84.style("top",
			    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

			

			d3.selectAll('.point84').on("mouseout", function(){


				d3.select(this)
					.attr('r', 8)
					.style('stroke', 'none');
				


				 hoverBox84.style("visibility", "hidden");

			});


			

		  // add axes
		  svg84.append("g")
		      .attr("class", "axis")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(d3.axisBottom(xScale84));

		  svg84.append("g")
		      .attr("class", "axis")
		      .call(d3.axisLeft(yScale84).ticks(5));
		    

		  //adding text to axes

		  svg84.append('text')
			.attr('x', -25)
			.attr('y', -15)
			.attr('class', 'label')
			.text('No. of Records');


		  svg84.append('text')
			.attr('x', 100)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label obtainability-label')
			.text('Obtainability');

		  
	}); 

	


//----------------------------------- Start of Viz424----------------------------	

//----------------------------------- Start of Viz425----------------------------	

	

	d3.csv("./csv/stackedRepairability.csv", function(d, i, columns) {
	  for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
	  d.total = t;
	  return d;
	}, function(error, data1) {
		  if (error) throw error;

		  var keys = data1.columns.slice(1);

		  //data1.sort(function(a, b) { return b.total - a.total; });
		  xScale85.domain(data1.map(function(d) { return d.Repairability; }));
		  yScale85.domain([0, 20]).nice();

		  // gridlines in x axis function
			function make_x_gridlines() {		
			    return d3.axisBottom(xScale85)
			        
			}

			// gridlines in y axis function
			function make_y_gridlines() {		
			    return d3.axisLeft(yScale85)
			        
			}

			// add the X gridlines
		  svg85.append("g")			
		      .attr("class", "grid")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(make_x_gridlines()
		          .tickSize(-250)
		          .tickFormat("")
		      )

		  // add the Y gridlines
		  svg85.append("g")			
		      .attr("class", "grid")
		      .call(make_y_gridlines()
		          .tickSize(-width)
		          .tickFormat("")
		      )
		

		  svg85.selectAll(".point85")
		    .data(d3.stack().keys(keys)(data1))
		    .enter().append("g")
		      .attr('class', 'data point85')
		       .attr('cursor', 'pointer')
		    .selectAll("rect")
		    .data(function(d) { return d; })
		    .enter().append("rect")
		      .attr("x", function(d) { return xScale85(d.data.Repairability); })
		      .attr("y", function(d) { return yScale85(d[1]); })
		      .attr("height", function(d) { return yScale85(d[0]) - yScale85(d[1]); })
		      .attr("width", xScale85.bandwidth());

		  // adding color to bars according to degrees of freedom
   		  d3.selectAll('.point85').data(data).attr('fill', function(d){return DoFColor(d.NumberOfDoF)});


			// Hover Dialog Box


			var hoverBox85 = d3.select(".hoverBox").style("visibility", "hidden");
			var cardText85 = d3.select('.card-text');
			var cardTitle85 = d3.select('.card-title');
			var cardImage85 = d3.select('.card-image');
			


		    // For Hover

		    

		    d3.selectAll('.point85').on("mouseover", function(d){

		    	initialColor = d3.select(this).style('fill');
		    	d3.select(this)
		    		.attr('r', 10)
		    		
		    		.style('stroke-width', '2')
		    		.style('stroke', 'black');

	 

				hoverBox85.style("visibility", "visible");
				cardText85.html("<p><b> Year: </b>" + d.Year + "<br>" + "<b> Venue: </b>" + d.Venue + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
				cardTitle85.html(d.Device);
				cardImage85.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



			})

			
			d3.selectAll('.point85').on("mousemove", function(){return hoverBox85.style("top",
			    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

			

			d3.selectAll('.point85').on("mouseout", function(){


				d3.select(this)
					.attr('r', 8)
					.style('stroke', 'none');
				


				 hoverBox85.style("visibility", "hidden");

			});


			

		  // add axes
		  svg85.append("g")
		      .attr("class", "axis")
		      .attr("transform", "translate(0," + 250 + ")")
		      .call(d3.axisBottom(xScale85));

		  svg85.append("g")
		      .attr("class", "axis")
		      .call(d3.axisLeft(yScale85).ticks(5));
		    

		  //adding text to axes

		  svg85.append('text')
			.attr('x', -25)
			.attr('y', -15)
			.attr('class', 'label')
			.text('No. of Records');


		  svg85.append('text')
			.attr('x', 100)
			.attr('y', 290)
			.attr('text-anchor', 'end')
			.attr('class', 'label repairability-label')
			.text('Repairability');

		  
	}); 

	


//----------------------------------- Start of Viz425----------------------------	




});





