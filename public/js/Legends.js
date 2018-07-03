var svgLegend1 = d3.select('.legend-dof')
		.append('svg')
		.attr('width', $('.legend-dof').width())
		.attr('height', 30)
		.append('g');

var svgLegend2 = d3.select('.legend-pt')
	.append('svg')
	.attr('width', $('.legend-pt').width())
	.attr('height', 30)
	


var shapeCircle = d3.symbol().size(100).type(d3.symbolCircle);
var shapeTriangle = d3.symbol().size(100).type(d3.symbolTriangle);
// Number of DoF

var dofArray = [1, 2, 3, 4, 6, 7];

// Product Type

var ptArray = ['Commercial Product', 'Research Prototype']

//Legends DoF
		
 var legend1 = svgLegend1.selectAll('legend')
	.data(dofArray)
	.enter().append('g')
	.attr('class', 'legend')
	.attr('transform', function(d,i){ return 'translate(' + i * 50 + ',' + 0 + ')'; });

// give x value equal to the legend elements. 

legend1.append('rect')
	.attr('x', 15)
	.attr('width', 18)
	.attr('height', 18)
	.style('fill', function(d,i){return DoFColor(dofArray[i]);});

// add text to the legend elements.

legend1.append('text')
	.attr('x', 10)
	.attr('y', 9)
	.attr('dy', '.35em')
	.style('text-anchor', 'end')
	.text(function(d){ return d; }); 


//Legends DoF

 var legend2 = svgLegend2.selectAll('legend')
	.data(ptArray)
	.enter().append('g')
	.attr('class', 'legend')
	.attr('transform', function(d,i){ return 'translate(' + (10 + i * 200) + ',' + 10 + ')'; });

// give x value equal to the legend elements. 

legend2.append('path')
	.attr('x', 10)
	.attr('y', 20)
	.attr('width', 18)
	.attr('height', 18)
	.attr('d', function(d) {

			if(d == "Commercial Product"){
				return shapeTriangle();
			}

			else {return shapeCircle();}


	});

// add text to the legend elements.

legend2.append('text')
	.attr('x', 20)
	.attr('y', 0)
	.attr('dy', '.35em')
	
	.text(function(d){ return d; }); 



// DoF function for color

function DoFColor(n){

	switch(n) {
    case 1:
        return 'rgb(244,209,102)';
        break;
    case 2:
        return 'rgb(229,174,108)';
        break;
    case 3:
        return 'rgb(195,197,93)';
        break;
    case 4:
        return 'rgb(152,214,135)';
        break;
    case 6:
    	return 'rgb(36,105,61)';
        break;
    case 7:
        return 'rgb(42,87,131)';
        break;
    default:
    	return 'rgb(244,209,102)';
        
	}
}