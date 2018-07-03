
	
	// Defining SVG
	var margin = {top: 40, right: 50, bottom: 60, left:180};
	var width = $('.viz11').width() - margin.left - margin.right;
	var height = 300 - margin.top - margin.bottom;

	var svg5 = d3.select('.viz3').select('.viz31')
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('border', '1px solid black')
		.style('margin-bottom', '2%')
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	/*console.log($('.viz321').width());
	console.log((width + margin.left + margin.right)/4 + 45);
	console.log($('.viz326').width());*/
	var svg61 = d3.select('.viz3').select('.viz32').select('.viz321')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/3 + 45)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-left', '1px solid black')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + ((width + margin.left + margin.right)/6) + ',' + margin.top/2 + ')');


	var svg62 = d3.select('.viz3').select('.viz32').select('.viz322')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 20)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');

	var svg63 = d3.select('.viz3').select('.viz32').select('.viz323')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/6 + 20)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');


	var svg64 = d3.select('.viz3').select('.viz32').select('.viz324')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/12 + 15)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');


	var svg65 = d3.select('.viz3').select('.viz32').select('.viz325')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/12 + 15)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');

	var svg66 = d3.select('.viz3').select('.viz32').select('.viz326')
		.append('svg')
		.attr('width', (width + margin.left + margin.right)/12 + 15)
		.attr('height', 540)
		.style('background-color', 'rgba(255,255,255,0.3)')
		.style('margin-bottom', '2%')
		
		.style('border-top', '1px solid black')
		.style('border-bottom', '1px solid black')
		.append('g')
		.attr('transform', 'translate(' + 0 + ',' + margin.top/2 + ')');

	
	//Defining Scales

	var xScale5 = d3.scaleBand()
		.rangeRound([width, 0]);

	var yScale5 = d3.scaleBand()
		.rangeRound([height,0]);



	var xScale61 = d3.scaleLinear()
		.range([0, (width + margin.left + margin.right)/5]);

	var xScale62 = d3.scaleLinear()
		.range([0, (width + margin.left + margin.right)/6 + 15]);

	var xScale63 = d3.scaleLinear()
		.range([0, (width + margin.left + margin.right)/6 + 15]);

	var xScale64 = d3.scaleLinear()
		.range([0, (width + margin.left + margin.right)/12 + 15]);

	var xScale65 = d3.scaleLinear()
		.range([0, (width + margin.left + margin.right)/12 + 15]);

	var xScale66 = d3.scaleLinear()
		.range([0, (width + margin.left + margin.right)/12 + 15]);


	var yScale61 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale62 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale63 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale64 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale65 = d3.scaleBand()
		.rangeRound([470,0]);

	var yScale66 = d3.scaleBand()
		.rangeRound([470,0]);




    //Defining Axis
 
	var xAxis5 = d3.axisBottom()
	.scale(xScale5);

	var yAxis5= d3.axisLeft()
	.scale(yScale5);

	var xAxis61 = d3.axisBottom()
	.scale(xScale61).ticks(4);

	var xAxis62 = d3.axisBottom()
	.scale(xScale62).ticks(4);

	var xAxis63 = d3.axisBottom()
	.scale(xScale63).ticks(4);

	var xAxis64 = d3.axisBottom()
	.scale(xScale64).ticks(2);

	var xAxis65 = d3.axisBottom()
	.scale(xScale65).ticks(2);

	var xAxis66 = d3.axisBottom()
	.scale(xScale66).ticks(2);

	var yAxis61= d3.axisLeft()
	.scale(yScale61);

	var yAxis62= d3.axisLeft()
	.scale(yScale62);

	var yAxis63= d3.axisLeft()
	.scale(yScale63);

	var yAxis64= d3.axisLeft()
	.scale(yScale64);

	var yAxis65= d3.axisLeft()
	.scale(yScale65);

	var yAxis66= d3.axisLeft()
	.scale(yScale66);


	

    // Binding Data to DataBase.csv

    d3.csv('./csv/DataBase_45.csv', function(error, data){

	
		data.forEach(function(d){
			 d.Year = +d.Year; // to convert strings to integers
			 d.NumberOfDoF = +d.NumberOfDoF;
			 d.VenueIndex = +d.VenueIndex;
			 d.NumMotors = +d.NumMotors;
		 	 d.NumLinks = +d.NumLinks;
			 
			

		});

	//----------- Start of Viz 31------------------------------------- Start of Viz 31 ------------------------------------

	xScale5.domain(data.map(function(d){ return d.TranslationalWorkspace;}));

	
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale5.domain(['Missing', 'N/A: 0 degrees', 'Small: < 120 degrees', 'Medium: < 240 degrees', 'Large: < 360 degrees']);

	// gridlines in x axis function
	function make_x_gridlines() {		
	    return d3.axisBottom(xScale5)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines() {		
	    return d3.axisLeft(yScale5)
	        
	}

	// add the X gridlines
  svg5.append("g")			
      .attr("class", "grid")
      .attr("transform", "translate(0," + 200 + ")")
      .call(make_x_gridlines()
          .tickSize(-200)
          .tickFormat("")
      )

  // add the Y gridlines
  svg5.append("g")			
      .attr("class", "grid")
      .call(make_y_gridlines()
          .tickSize(-width)
          .tickFormat("")
      )

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg5.append('g')
		.attr('transform', 'translate(0,' + 200 + ')')
		.attr('class', 'x axis')
		.call(xAxis5);

	// y-axis is translated to (0,0)
	svg5.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis5);


	var shapeCircle = d3.symbol().size(150).type(d3.symbolCircle);
	var shapeTriangle = d3.symbol().size(150).type(d3.symbolTriangle);
	var xCord = data.map(function(d){return xScale5(d.TranslationalWorkspace) + 65});
	var yCord = data.map(function(d){return yScale5(d.RotationalWorkspace) + 20});
	

	svg5.selectAll(".point5")
	    .data(data)
	    .enter().append("path")
	    .attr("class", "data point5")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	   	.attr('d', function(d) {

   			if(d.ProductType == "Commercial Product"){
   				return shapeTriangle();
   			}

   			else {return shapeCircle();}


   		})
	    .attr("transform", function(d, i) { return "translate(" + xCord[i] + "," + yCord[i] + ")"; });


	// Hover Dialog Box


		var hoverBox5 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText5 = d3.select('.card-text');
		var cardImage5 = d3.select('.card-image');
		var cardTitle5 = d3.select('.card-title');


	    // For Hover

	    

	    d3.selectAll('.point5').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox5.style("visibility", "visible");
			cardText5.html("<p><b> Translational: </b>" + d.TranslationalWorkspace + "<br>" + "<b> Rotational: </b>" + d.RotationalWorkspace + "<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle5.html(d.Device);



		})

		
		d3.selectAll('.point5').on("mousemove", function(){return hoverBox5.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point5').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox5.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).
	svg5.append('text')
		.attr('x', 10)
		.attr('y', 10)
		.attr('class', 'label')
		.text('Rotational Workspace');


	svg5.append('text')
		.attr('x', width/2 + 60)
		.attr('y', 240)
		.attr('text-anchor', 'end')
		.attr('class', 'label')
		.text('Translational Workspace');

	

//----------- End of of Viz 31------------------------------------- End  of Viz 31------------------------------------

//----------- Start of Viz 321------------------------------------- Start of Viz 321------------------------------------

	xScale61.domain([-20,210]).nice();
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale61.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg61.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis61);

	// y-axis is translated to (0,0)
	svg61.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis61);

	// gridlines in x axis function
	function make_x_gridlines61() {		
	    return d3.axisBottom(xScale61)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines61() {		
	    return d3.axisLeft(yScale61)
	        
	}

	// add the X gridlines
	  svg61.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines61()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg61.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines61()
	          .tickSize(-width)
	          .tickFormat("")
	      )

	

	svg61.selectAll(".point61")
	    .data(data)
	    .enter().append("rect")
	    .attr("class", "data point61")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	    .attr('x', function(d){
	    	if(d.D1 >= 0) return 18;
	    	else return xScale61(d.D1)-8;
	    })
	    .attr('y', function(d){return yScale61(d.Device)+2.5})
	    .attr('height', yScale61.bandwidth()-5)
    	.attr('width', function(d){
    		if(d.D1 > 0){if(d.D1 > 18) return xScale61(d.D1)-19; else return xScale61(d.D1)-5;} 
    		else if(d.D1 == 0) return 2;
			else return Math.abs(xScale61(d.D1));
    	});
	    


	// Hover Dialog Box


		var hoverBox61 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardImage61 = d3.select('.card-image');
		var cardText61 = d3.select('.card-text');
		var cardTitle61 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point61').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox61.style("visibility", "visible");
			cardText61.html("<p><b> D1: </b>" + d.D1 + "cm<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle61.html(d.Device);
			cardImage61.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point61').on("mousemove", function(){return hoverBox61.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point61').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox61.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).
	svg61.append('text')
		.attr('x', -50)
		.attr('y', 5)
		.attr('class', 'label')
		.style('font-size', 12)
		.text('Device');


	svg61.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('D1(cm)');

//----------- End of of Viz 321------------------------------------- End  of Viz 321------------------------------------

//----------- Start of Viz 322------------------------------------- Start of Viz 322------------------------------------

	xScale62.domain([-10,320]).nice();
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale62.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg62.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis62);

	// y-axis is translated to (0,0)
	svg62.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis62);


	
	// gridlines in x axis function
	function make_x_gridlines62() {		
	    return d3.axisBottom(xScale62)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines62() {		
	    return d3.axisLeft(yScale62)
	        
	}

	// add the X gridlines
	  svg62.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines62()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg62.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines62()
	          .tickSize(-width)
	          .tickFormat("")
	      )


	
	

	svg62.selectAll(".point62")
	    .data(data)
	    .enter().append("rect")
	    .attr("class", "data point62")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	    .attr('x', function(d){
	    	if(d.D2 >= 0) return 24;
	    	else return xScale62(d.D2)-16;
	    })
	    .attr('y', function(d){return yScale62(d.Device)+2.5})
	    .attr('height', yScale62.bandwidth()-5)
    	.attr('width', function(d){
    		if(d.D2 > 0){if(d.D2 > 24) return xScale62(d.D2)-24; else return xScale62(d.D2)- xScale62(d.D2)/2;} 
    		else if(d.D2 == 0) return 1;
			else return Math.abs(xScale62(d.D2));
    	});


	svg62.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox62 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText62 = d3.select('.card-text');
		var cardImage62 = d3.select('.card-image');
		var cardTitle62 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point62').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox62.style("visibility", "visible");
			cardText62.html("<p><b> D2: </b>" + d.D2 + "cm<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle62.html(d.Device);
			cardImage62.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point62').on("mousemove", function(){return hoverBox62.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point62').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox62.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg62.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('D2(cm)');

	svg62.append('text')
		.attr('x', 160)
		.attr('y', -5)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('Translational Workspace');


//----------- End of of Viz 322------------------------------------- End  of Viz 322------------------------------------

//----------- Start of Viz 323------------------------------------- Start of Viz 323------------------------------------

	xScale63.domain([-20,210]).nice();
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale63.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg63.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis63);

	// y-axis is translated to (0,0)
	svg63.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis63);


	// gridlines in x axis function
	function make_x_gridlines63() {		
	    return d3.axisBottom(xScale63)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines63() {		
	    return d3.axisLeft(yScale63)
	        
	}

	// add the X gridlines
	  svg63.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines63()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg63.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines63()
	          .tickSize(-width)
	          .tickFormat("")
	      )



	svg63.selectAll(".point63")
	    .data(data)
	    .enter().append("rect")
	    .attr("class", "data point63")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	    .attr('x', function(d){
	    	if(d.D3 >= 0) return 16;
	    	else return xScale63(d.D3)-7;
	    })
	    .attr('y', function(d){return yScale61(d.Device)+2.5})
	    .attr('height', yScale63.bandwidth()-5)
    	.attr('width', function(d){
    		if(d.D3 > 0){if(d.D3 > 16) return xScale63(d.D3)-16; else return xScale63(d.D3)- xScale63(d.D3)/2;}
    		else if(d.D3 == 0) return 1;
			else return Math.abs(xScale63(d.D3));
    	});


	svg63.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox63 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText63 = d3.select('.card-text');
		var cardImage63 = d3.select('.card-image');
		var cardTitle63 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point63').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox63.style("visibility", "visible");
			cardText63.html("<p><b> D3: </b>" + d.D3 + "cm<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle63.html(d.Device);
			cardImage63.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point63').on("mousemove", function(){return hoverBox63.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point63').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox63.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg63.append('text')
		.attr('x', 120)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('D3(cm)');


//----------- End of of Viz 323------------------------------------- End  of Viz 323------------------------------------







//----------- Start of Viz 324------------------------------------- Start of Viz 324------------------------------------

	xScale64.domain([-20,450]).nice();
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale64.domain(data.map(function(d){ return d.Device;}));

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg64.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis64);

	// y-axis is translated to (0,0)
	svg64.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis64);


	// gridlines in x axis function
	function make_x_gridlines64() {		
	    return d3.axisBottom(xScale64).ticks(3)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines64() {		
	    return d3.axisLeft(yScale64)
	        
	}

	// add the X gridlines
	  svg64.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines64()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg64.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines64()
	          .tickSize(-width)
	          .tickFormat("")
	      )


	var xCord = data.map(function(d){return xScale5(d.TranslationalWorkspace) + 75});
	var yCord = data.map(function(d){return yScale5(d.RotationalWorkspace) + 35});
	

	svg64.selectAll(".point64")
	    .data(data)
	    .enter().append("rect")
	    .attr("class", "data point64")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	    .attr('x', function(d){
	    	if(d.D4 >= 0) return 10;
	    	else return xScale64(d.D4)-1;
	    })
	    .attr('y', function(d){return yScale61(d.Device)+2.5})
	    .attr('height', yScale64.bandwidth()-5)
    	.attr('width', function(d){
    		if(d.D4 > 0) return xScale64(d.D4)-10;
    		else if(d.D4 == 0) return 1;
			else return Math.abs(xScale64(d.D4));
    	});


	svg64.selectAll('.y.tick').select('text').text('');
	    

// Hover Dialog Box


		var hoverBox64 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText64 = d3.select('.card-text');
		var cardImage64 = d3.select('.card-image');
		var cardTitle64 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point64').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox64.style("visibility", "visible");
			cardText64.html("<p><b> D4: </b>" + d.D4 + "deg<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle64.html(d.Device);
			cardImage64.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point64').on("mousemove", function(){return hoverBox64.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point64').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox64.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg64.append('text')
		.attr('x', 70)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('D4(deg)');


	svg64.append('text')
		.attr('x', 90)
		.attr('y', -5)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('Rotational');

//----------- End of of Viz 324------------------------------------- End  of Viz 324------------------------------------

//----------- Start of Viz 325------------------------------------- Start of Viz 325------------------------------------

	xScale65.domain([-20,450]).nice();
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale65.domain(data.map(function(d){ return d.Device;}));

	

	// gridlines in x axis function
	function make_x_gridlines65() {		
	    return d3.axisBottom(xScale65).ticks(3)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines65() {		
	    return d3.axisLeft(yScale65)
	        
	}

	// add the X gridlines
	  svg65.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines64()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg65.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines64()
	          .tickSize(-width)
	          .tickFormat("")
	      )
	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg65.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis65);

	// y-axis is translated to (0,0)
	svg65.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis65);


	var xCord = data.map(function(d){return xScale5(d.TranslationalWorkspace) + 75});
	var yCord = data.map(function(d){return yScale5(d.RotationalWorkspace) + 35});
	

	svg65.selectAll(".point65")
	    .data(data)
	    .enter().append("rect")
	    .attr("class", "data point65")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	    .attr('x', function(d){
	    	if(d.D5 >= 0) return 10;
	    	else return xScale65(d.D5)-1;
	    })
	    .attr('y', function(d){return yScale65(d.Device)+2.5})
	    .attr('height', yScale65.bandwidth()-5)
    	.attr('width', function(d){
    		if(d.D5 > 0) return xScale65(d.D5)-10;
    		else if(d.D5 == 0) return 5;
			else return Math.abs(xScale61(d.D5));
    	});


	svg65.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox65 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText65 = d3.select('.card-text');
		var cardImage65 = d3.select('.card-image');
		var cardTitle65 = d3.select('.card-title')


	    // For Hover

	    

	    d3.selectAll('.point65').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox65.style("visibility", "visible");
			cardText65.html("<p><b> D5: </b>" + d.D5 + "deg<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle65.html(d.Device);
			cardImage65.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point65').on("mousemove", function(){return hoverBox65.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point65').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox65.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg65.append('text')
		.attr('x', 60)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('D5(deg)');

	svg65.append('text')
		.attr('x', 65)
		.attr('y', -5)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('Workspace');

//----------- End of of Viz 325------------------------------------- End  of Viz 325------------------------------------

//----------- Start of Viz 326------------------------------------- Start of Viz 326------------------------------------

	xScale66.domain([-20,450]).nice();
	//yScale5.domain(data.map(function (d) { return d.RotationalWorkspace; }));
	yScale66.domain(data.map(function(d){ return d.Device;}));

	

	// gridlines in x axis function
	function make_x_gridlines66() {		
	    return d3.axisBottom(xScale66).ticks(3)
	        
	}

	// gridlines in y axis function
	function make_y_gridlines66() {		
	    return d3.axisLeft(yScale66)
	        
	}

	// add the X gridlines
	  svg66.append("g")			
	      .attr("class", "grid v3")
	      .attr("transform", "translate(0," + 470 + ")")
	      .call(make_x_gridlines66()
	          .tickSize(-470)
	          .tickFormat("")
	      )

	  // add the Y gridlines
	  svg66.append("g")			
	      .attr("class", "grid")
	      .call(make_y_gridlines66()
	          .tickSize(-width)
	          .tickFormat("")
	      )

	
	// adding axes is also simpler now, just translate x-axis to (0,height) and it's alread defined to be a bottom axis. 
	svg66.append('g')
		.attr('transform', 'translate(0,' + 470 + ')')
		.attr('class', 'x axis')
		.call(xAxis66);

	// y-axis is translated to (0,0)
	svg66.append('g')
		.attr('transform', 'translate(0,0)')
		.attr('class', 'y axis')
		.call(yAxis66);


	var xCord = data.map(function(d){return xScale5(d.TranslationalWorkspace) + 75});
	var yCord = data.map(function(d){return yScale5(d.RotationalWorkspace) + 35});
	

	svg66.selectAll(".point66")
	    .data(data)
	    .enter().append("rect")
	    .attr("class", "data point66")
	    .attr('cursor', 'pointer')
	    .attr('id', function(d){return 'id' + d.NumberOfDoF + d.ProductType.substring(0,1);})
	    .attr('fill', function(d){return DoFColor(d.NumberOfDoF)})
	    .attr('x', function(d){
	    	if(d.D6 >= 0) return 10;
	    	else return xScale66(d.D6)-1;
	    })
	    .attr('y', function(d){return yScale66(d.Device)+2.5})
	    .attr('height', yScale66.bandwidth()-5)
    	.attr('width', function(d){
    		if(d.D6 > 0) return xScale66(d.D6)-10;
    		else if(d.D6 == 0) return 5;
			else return Math.abs(xScale66(d.D6));
    	});


	svg66.selectAll('.y.tick').select('text').text('');
	    


	// Hover Dialog Box


		var hoverBox66 = d3.select(".hoverBox").style("visibility", "hidden");
		var cardText66 = d3.select('.card-text');
		var cardTitle66 = d3.select('.card-title');
		var cardImage66 = d3.select('.card-image');


	    // For Hover

	    

	    d3.selectAll('.point66').on("mouseover", function(d){

	    	d3.select(this)
	    		.attr('r', 10)
	    		.style('stroke-width', '2')
	    		.style('stroke', 'black');

 

			hoverBox66.style("visibility", "visible");
			cardText66.html("<p><b> D6: </b>" + d.D6 + "deg<br>" + "<b> DoF: </b>" + d.NumberOfDoF + "</p>");
			cardTitle66.html(d.Device);
			cardImage66.html('<img class="card-image-tag" src="http://localhost:3000/' + d.Device + '/Figure1-1.png">')



		})

		
		d3.selectAll('.point66').on("mousemove", function(){return hoverBox66.style("top",
		    (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

		

		d3.selectAll('.point66').on("mouseout", function(){


			d3.select(this)
				.attr('r', 8)
				.style('stroke', 'none');



			 hoverBox66.style("visibility", "hidden");

		});
 


	// adding label. For x-axis, it's at (10, 10), and for y-axis at (width, height-10).


	svg66.append('text')
		.attr('x', 60)
		.attr('y', 510)
		.attr('text-anchor', 'end')
		.style('font-size', 12)
		.attr('class', 'label')
		.text('D6(deg)');

//----------- End of of Viz 326------------------------------------- End  of Viz 326------------------------------------


	});





