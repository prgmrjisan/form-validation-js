		


//	var pattern = new RegExp('[a-z][A-Z][0-9]','ig');
//	var str = "wscubetech";
	//console.log(pattern.toString());  \
	
	function passwordCheck(data){
		var tcolorChange = 	document.getElementsByClassName('password_check');
		
		const lowerCase = new RegExp('(?=.*[a-z])');
		const upperCase = new RegExp('(?=.*[A-Z])');
		const number = new RegExp('(?=.*[0-9])');
		const specialChar = new RegExp('(?=.*[!@#/$%\&*\^\])');
		const eightChar = new RegExp('(?=.{8,})')
	
		if(eightChar.test(data)){
			//use variable targeted value
			document.getElementsByClassName('password_check')[0].style.color = "blue";
		//	document.getElementById('index_write')[0].innerText = "8 character";
		}else{
			
			document.getElementsByClassName('password_check')[0].style.color = "white";
		//	document.getElementById('index_write')[0].innerText = "8 not fill character";

		}
		if(lowerCase.test(data)){
			
			document.getElementsByClassName('password_check')[1].style.color = "blue";
		}else{
			
			document.getElementsByClassName('password_check')[1].style.color = "white";

		}
		if(upperCase.test(data)){
			
			document.getElementsByClassName('password_check')[2].style.color = "blue";
		}else{
			
			document.getElementsByClassName('password_check')[2].style.color = "white";

		}
		
		if(number.test(data)){
			
			document.getElementsByClassName('password_check')[3].style.color = "blue";
		}else{
			
			document.getElementsByClassName('password_check')[3].style.color = "white";

		}
		
		if(specialChar.test(data)){
			
			document.getElementsByClassName('password_check')[4].style.color = "blue";
		}else{
			
			document.getElementsByClassName('password_check')[4].style.color = "white";

		}
		
	
	}