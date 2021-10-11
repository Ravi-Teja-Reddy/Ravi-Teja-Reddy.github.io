// document.getElementById("date").innerHTML=Date();

var date = document.getElementById("ab")
function clock() {
  var dt = new Date().toString()
   date.textContent = dt.split(' ').slice(0, 5).join(' ')
  //date.innerHTML = dt.split(' ').slice(0, 5).join(' ')

  //console.log("teja")
}

 setInterval(clock, 1000)
// date.innerHTML="ravi"
//clock()



function hide123()
{
	document.getElementById("contact").style.display = "block";

	document.getElementById("education").style.display = "none";
	document.getElementById("education1").style.display = "none";

	document.getElementById("skills").style.display = "none";

	document.getElementById("about").style.display="none";
	
}


function hide234()
{
	document.getElementById("contact").style.display = "none";

	document.getElementById("education").style.display = "none";
	document.getElementById("education1").style.display = "none";

	document.getElementById("skills").style.display = "none";

	document.getElementById("about").style.display="block";
}

function hide124()
{
	document.getElementById("contact").style.display = "none";

	document.getElementById("education").style.display = "block";

  document.getElementById("education1").style.display = "block";
	document.getElementById("skills").style.display = "none";

	document.getElementById("about").style.display="none";
}

function hide134()
{
	document.getElementById("contact").style.display = "none";

	document.getElementById("education").style.display = "none";

	document.getElementById("skills").style.display = "block";

	document.getElementById("about").style.display="none";
	document.getElementById("education1").style.display = "none";
}

function hide()
{
	document.getElementById("contact").style.display = "none";

	document.getElementById("education").style.display = "none";

	document.getElementById("skills").style.display = "none";

	document.getElementById("about").style.display="none";
	document.getElementById("education1").style.display = "none";
}

