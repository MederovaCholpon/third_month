const numInput = document.querySelector(".numInput");
const numButton = document.querySelector(".numButton")
const numResult = document.querySelector(".numResult");

let numReg = /^1\d{13}$|^2\d{13}$/;

numButton.addEventListener("click",()=>{
	if (numReg.test(numInput.value)){
		numResult.innerText = "OK";
		numResult.style.color = "green";
	}else {
		numResult.innerText = "Not OK";
		numResult.style.color = "red";
	}
});

///* ******************** */

let block3 = 0;
function recurs(){
	block3=block3 +3;
	if (block3 > 300) return;
	document.querySelector(".block3").style.left = block3 + 'px';
	animation();
}

function animation(){
	setTimeout(recurs, 100);
}
animation(recurs);
