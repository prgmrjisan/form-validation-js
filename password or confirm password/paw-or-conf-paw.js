
		
			var pwd = document.getElementById('password');
			var flag = 1; // 1 = no error 0 = yes error
			
			function check(elem){
				var errShow = document.getElementById('error');
				
				if (elem.value.length > 0){
			
				if(elem.value != pwd.value){
					errShow.innerText = "this password not match";
					
					flag = 0;
				}else{
					errShow.innerText = "yes!";
					flag = 1;
					}
				}else{
					errShow.innerText = "please enter confirm password!";
					flag = 0;
				}
					
			}
			function validate(){
			
			if(flag == 1){
				return true;
			
			}else{
				return false;
			}
			
			
			}