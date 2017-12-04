function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
$(document).ready(function() {
  $('button').on('drop', function() {
    return false;
  });
});

	document.getElementById("check-icon").style.visibility = 'hidden';
	document.getElementById("false-icon").style.visibility = 'hidden';
	document.getElementById("check-icon-1").style.visibility = 'hidden';
	document.getElementById("false-icon-1").style.visibility = 'hidden';
	document.getElementById("check-icon-2").style.visibility = 'hidden';
	document.getElementById("false-icon-2").style.visibility = 'hidden';
	document.getElementById("check-icon-3").style.visibility = 'hidden';
	document.getElementById("false-icon-3").style.visibility = 'hidden';
	document.getElementById("check-icon-4").style.visibility = 'hidden';
	document.getElementById("false-icon-4").style.visibility = 'hidden';
	document.getElementById("check-icon-5").style.visibility = 'hidden';
	document.getElementById("false-icon-5").style.visibility = 'hidden';
	document.getElementById("check-icon-6").style.visibility = 'hidden';
	document.getElementById("false-icon-6").style.visibility = 'hidden';
	document.getElementById("check-icon-7").style.visibility = 'hidden';
	document.getElementById("false-icon-7").style.visibility = 'hidden';

document.getElementById("empty-result").style.display = 'none';
    document.getElementById("false-result").style.display = 'none';
    document.getElementById("right-result").style.display = 'none';
function checkEmptyBox() {
	var div1 = document.getElementById("div1").hasChildNodes();
	var div2 = document.getElementById("div2").hasChildNodes();
	var div3 = document.getElementById("div3").hasChildNodes();
	var div4 = document.getElementById("div4").hasChildNodes();
	var div5 = document.getElementById("div5").hasChildNodes();
	var div6 = document.getElementById("div6").hasChildNodes();
	var div7 = document.getElementById("div7").hasChildNodes();
	var div8 = document.getElementById("div8").hasChildNodes();
    if(div1 == false || div2 == false || div3 == false || div4 == false || div5 == false || div6 == false || div7 == false || div8 == false){
		document.getElementById("empty-result").style.display = 'block';
	}else{
		document.getElementById("empty-result").style.display = 'none';
 }
}

 function myFunction() {
    var div1 = document.getElementById("div1").firstChild.innerHTML;
	var div2 = document.getElementById("div2").firstChild.innerHTML;
	var div3 = document.getElementById("div3").firstChild.innerHTML;
	var div4 = document.getElementById("div4").firstChild.innerHTML;
	var div5 = document.getElementById("div5").firstChild.innerHTML;
	var div6 = document.getElementById("div6").firstChild.innerHTML;
	var div7 = document.getElementById("div7").firstChild.innerHTML;
	var div8 = document.getElementById("div8").firstChild.innerHTML;
    if(div1 === "super"){
	    document.getElementById("check-icon").style.visibility = 'visible';
    }else{
		document.getElementById("false-icon").style.visibility = 'visible';
	}
	if(div2 === "funny"){
		document.getElementById("check-icon-1").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-1").style.visibility = 'visible';
	}
	if(div3 === "handsome"){
		document.getElementById("check-icon-2").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-2").style.visibility = 'visible';
	}
	if(div4 === "Genious"){
		document.getElementById("check-icon-3").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-3").style.visibility = 'visible';
	}
	if(div5 === "Creative"){
		document.getElementById("check-icon-4").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-4").style.visibility = 'visible';
	}
		if(div6 === "angry"){
		document.getElementById("check-icon-5").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-5").style.visibility = 'visible';
	}
		if(div7 === "king"){
		document.getElementById("check-icon-6").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-6").style.visibility = 'visible';
	}
		if(div8 === "prince"){
		document.getElementById("check-icon-7").style.visibility = 'visible';
	}else{
		document.getElementById("false-icon-7").style.visibility = 'visible';
	}
	 if(div1 !== "super" || div2 !== "funny" || div3 !== "handsome" || div4 !== "Genious" || div5 !== "Creative" || div6 !== "angry" || div7 !== "king" || div8 !== "prince"){
		 document.getElementById("false-result").style.display = 'block';
	 }else{
		 document.getElementById("right-result").style.display = 'block';
	 }
  }

	
	
	
	
	
	