let groceries = ["bread", "milk", "peanut butter", "jelly", "chips"];

function showGroceries(){
	let i = 0;
	// Display all elements in groceries array
	for (i = 0; i < groceries.length; i = i + 1) {
	   console.log(i + " - " + groceries[i]);
	}
}

groceries = ["bread", "milk", "peanut butter", "jelly"];

function showGroceries2(){
	let i = 0;
	let textList = "<br><b style='font-size:1.5em; color:orange'>";
	// Display all elements in groceries array
	for (i = 0; i < groceries.length; i = i + 1) {
		 textList = textList + groceries[i] + "<br>";
	}
	 textList = textList + "</b>";
	document.getElementById("result2").innerHTML = textList;
	
}

function showGroceries3(){
	let i = 0;
	
	currentDisplay = document.getElementById("button3").innerHTML;
	
	if (currentDisplay === "Hide Groceries"){
		document.getElementById("result3").innerHTML = "";
		document.getElementById("button3").innerHTML = "Show Groceries";
	}
	else{
		document.getElementById("button3").innerHTML = "Hide Groceries";
		
		let list = "<br><b style='font-size:1.5em; color:blue;'>";
		// Display all elements in groceries array
		for (i = 0; i < groceries.length; i++) {
		   list = list + "&#8730; " + groceries[i] + "<br>";
		}
		
		list = list + "<br></b>"
		document.getElementById("result3").innerHTML = list;
	
	}	
}

function showGroceries4(){
	let i = 0;
	
	currentDisplay = document.getElementById("button4").innerHTML;
	
	if (currentDisplay === "Hide Groceries"){
		document.getElementById("result4").innerHTML = "";
		document.getElementById("button4").innerHTML = "Show Groceries";
	}
	else{
		document.getElementById("button4").innerHTML = "Hide Groceries";
		
		let list = "<br><b style='font-size:1.5em'>";
		// Display all elements in groceries array
		for (i = 0; i < groceries.length; i++) {
		   list = list + groceries[i] + "<br><br>";
		}
		
		list = list + "</b>"
		document.getElementById("result4").innerHTML = list;
	
	}	
}

function addToList(){
	let newItem = prompt("enter an item to add:");
	alert("Your item is " + newItem);		
	groceries.push(newItem);
}





    

