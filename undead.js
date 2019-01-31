
window.onload = function() 
{
	var $table=null;
 $('div').each(function (index, value)
 {
	if($(this).attr('data-purpose')=='col2') 
	{
		 $table=value;
	}
 });
 
	var $button = $("<button type='button'>");
	$button.text("Downlaod Excel");
	$button.insertBefore($table);
    
	$button.click(function () 
	{
	 var   csv ="Course,Author,Review,Ratings,Price,Remarks,Lectures,Duration\r\n";
	
	  
	 $('div').each(function (index, value) 
	 {
	if($(this).attr('data-purpose')=='search-course-cards') 
	{
		
		 var coursename="";
	 var remarks=""; 
	  var lectures="";
	  var duration="";
	  var author ="";
	  var price = "";
	  var ratings ="";
	  var review ="";
	  
	var nodes = value.childNodes;
 
	for(var i=0;i<nodes.length;i++)
	{
	
	 
	 var subnodes = nodes[i].childNodes;
      coursename = subnodes[0].childNodes[1].childNodes[0].childNodes[0].innerHTML.replace(/,/g,'');
	 var attribute=subnodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes;
	 if(attribute.length!=2)
	 {		
		 
		   lectures=subnodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML.split("-->")[1].split("<!")[0] ;
		 duration=subnodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].innerHTML.split("-->")[1].split("<!")[0] ;
	
	}
	 else
	 {
		  remarks = subnodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML.split("-->")[1].split("<!")[0] ;
		   lectures=subnodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0].innerHTML.split("-->")[1].split("<!")[0] ;
		   duration=subnodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[1].innerHTML.split("-->")[1].split("<!")[0] ;
	
	 }
	 
	 
	  author = subnodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0].innerHTML.replace(',','');
	  price = subnodes[0].childNodes[1].childNodes[5].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].innerHTML.replace(',','');
	  ratings = subnodes[0].childNodes[1].childNodes[5].childNodes[1].childNodes[0].childNodes[0].childNodes[0].getAttribute("aria-label");
	  review = subnodes[0].childNodes[1].childNodes[5].childNodes[1].childNodes[0].childNodes[1].innerHTML.replace(',','');
   
     
	}
	csv+=coursename+","+author+","+review+","+ratings+","+price+","+remarks+","+lectures+","+duration+"\r\n";
	}   
});

console.log(csv);
 
    var file = new Blob([csv], {type: csv});
	if (window.navigator.msSaveOrOpenBlob) // IE10+
		window.navigator.msSaveOrOpenBlob(file, "Data.csv");
	else {  
		var a = document.createElement("a"),
				url = URL.createObjectURL(file);
		a.href = url;
		a.download = "Data.csv" ;
		document.body.appendChild(a);
		a.click();
		setTimeout(function() {
			document.body.removeChild(a);
			window.URL.revokeObjectURL(url);  
		}, 0); 
	}

	
	
	
	});
} 
 