

	let blocos = document.querySelectorAll('li');
	let maxIndex = blocos.length;
	let player = 1;


		for(let i = 0; i < maxIndex; i++){
			blocos[i].style.color = 'white';
			blocos[i].setAttribute('jogador','');
		}
	document.querySelector('.container').style.userSelect = 'none';
	
	
	for(let i = 0;i < maxIndex;i++){
		blocos[i].addEventListener('click',()=>{
			
			if(blocos[i].getAttribute('jogador') == ''){
				if(player == 1){
					blocos[i].innerHTML = "X";
					blocos[i].style.color = 'red';
					blocos[i].setAttribute('jogador','one');
					player = 2;
	
				decretarVitoria();
				}else if(player == 2){
					blocos[i].innerHTML = "O";
					blocos[i].style.color = 'blue';
					blocos[i].setAttribute('jogador','two');
					player = 1;
					
				decretarVitoria();
				}
			}
			
		});
	}

document.querySelector('input[type=button]').addEventListener('click',()=>{reiniciarJogo()})

function reiniciarJogo(){
	for(let i = 0;i < maxIndex;i++){
		blocos[i].style.color = 'white';
		blocos[i].innerHTML = '';
		player = 1;
		blocos[i].setAttribute('jogador','');
	}
}

	document.querySelector('input[type=checkbox]').addEventListener('click',()=>{
		changeColor();
	})




	/*Funcoes*/

		function changeColor(){

			let checkedBox = document.getElementById("checkedColor");

		if(checkedBox.checked == true)
		{
			//tema dark
			document.querySelector('body').style.backgroundImage = 'linear-gradient(to top left,#22223B,#001D3D)';
			document.querySelector('input[type=button]').style.backgroundColor = 'white';
			document.querySelector('input[type=button]').style.color = '#061A40';
			document.querySelector('.container-switch span').style.color = 'white';
			document.querySelector('.container').style.borderColor = 'white';
			document.querySelector('.container').style.backgroundColor = '#212429';

			
		}else if(checkedBox.checked == false){

			//tema light
			document.querySelector('body').style.backgroundImage = 'linear-gradient(to bottom left,#00B4D8,#03045E)';
			document.querySelector('input[type=button]').style.backgroundColor = '#061A40';
			document.querySelector('input[type=button]').style.color = 'white';
			document.querySelector('.container-switch span').style.color = 'white';
			document.querySelector('.container').style.borderColor = '#061A40';
			document.querySelector('.container').style.backgroundColor = 'white';

		}



	}

	function decretarVitoria(){
		function Vit1() {
		 	alert('O jogador 1 venceu!');
		 	for(let i = 0; i < maxIndex; i++)
				blocos[i].setAttribute('jogador','');
			player = 1;
			reiniciarJogo();
		}
		function Vit2() { 
			alert('O jogador 2 venceu!');
			for(let i = 0; i < maxIndex; i++)
				blocos[i].setAttribute('jogador','');
			player = 1;
			reiniciarJogo();
		
		}

		if(blocos[0].getAttribute('jogador') == ('one') && blocos[1].getAttribute('jogador') == 'one' && blocos[2].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[3].getAttribute('jogador') == 'one' && blocos[4].getAttribute('jogador') == 'one' && blocos[5].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[6].getAttribute('jogador') == 'one' && blocos[7].getAttribute('jogador') == 'one' && blocos[8].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[0].getAttribute('jogador') == 'one' && blocos[3].getAttribute('jogador') == 'one' && blocos[6].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[1].getAttribute('jogador') == 'one' && blocos[4].getAttribute('jogador') == 'one' && blocos[7].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[2].getAttribute('jogador') == 'one' && blocos[5].getAttribute('jogador') == 'one' && blocos[8].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[0].getAttribute('jogador') == 'one' && blocos[4].getAttribute('jogador') == 'one' && blocos[8].getAttribute('jogador') == 'one')
			Vit1();
		else if(blocos[2].getAttribute('jogador') == 'one' && blocos[4].getAttribute('jogador') == 'one' && blocos[6].getAttribute('jogador') == 'one')
			Vit1();

		else if(blocos[0].getAttribute('jogador') == 'two' && blocos[1].getAttribute('jogador') == 'two' && blocos[2].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[3].getAttribute('jogador') == 'two' && blocos[4].getAttribute('jogador') == 'two' && blocos[5].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[6].getAttribute('jogador') == 'two' && blocos[7].getAttribute('jogador') == 'two' && blocos[8].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[0].getAttribute('jogador') == 'two' && blocos[3].getAttribute('jogador') == 'two' && blocos[6].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[1].getAttribute('jogador') == 'two' && blocos[4].getAttribute('jogador') == 'two' && blocos[7].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[2].getAttribute('jogador') == 'two' && blocos[5].getAttribute('jogador') == 'two' && blocos[8].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[0].getAttribute('jogador') == 'two' && blocos[4].getAttribute('jogador') == 'two' && blocos[8].getAttribute('jogador') == 'two')
			Vit2();
		else if(blocos[2].getAttribute('jogador') == 'two' && blocos[4].getAttribute('jogador') == 'two' && blocos[6].getAttribute('jogador') == 'two')
			Vit2();

	}


 