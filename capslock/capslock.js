
		//using externer file js link up that time working
			window.addEventListener('keyup',event => {
				var isCaps = event.getModifierState('CapsLock');
			
				var errTry = document.getElementById('error');
				if(isCaps){
					//TRUE
					errTry.innerText = "capslock is on";
				}else{
					//FALSE
					errTry.innerText = "off";
				}
			});

		