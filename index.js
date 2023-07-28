// 1
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
	if(counter == 650){
		clearInterval();
	}else{
		counter  += 1;
		number.innerHTML = counter + "";
	}

},780);
////2
let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
	if(counter2 == 650){
		clearInterval();
	}else{
		counter2  += 1;
		number2.innerHTML = counter2 + "";
	}

},600);
//////3
let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
	if(counter3 == 344){
		clearInterval();
	}else{
		counter3  += 1;
		number3.innerHTML = counter + "";
	}

},550);
//////4
let number4 = document.getElementById("number4");
let counter4 = 0;
setInterval(() => {
	if(counter4 == 670){
		clearInterval();
	}else{
		counter4  += 1;
		number4.innerHTML = counter + "";
	}

},300);