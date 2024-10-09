		//using externer file js link up that time working
			
	

			var patten = /\s/g;
			var errTry = document.getElementById('error');
			
			function white(data){
				var isSpace = patten.test(data);
				
			if(isSpace){
					//TRUE
					errTry.innerText = "not allow";
				}else{
					//FALSE
					errTry.innerText = "allow";
				}

			}
				
			