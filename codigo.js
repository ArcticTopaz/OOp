//Primeira função a ser executada
function Init() { 
	//BluePrint que irá ser usada pelos objectos
    function jogo(nome, genero, preco, avaliacao, comentario){
		this.nome = nome;
		this.genero  = genero;
		this.preco = preco;
		this.avaliacao = avaliacao;
		this.comentario= comentario;
		
		this.dados = function() {
			document.body.innerHTML += "Nome: " + this.nome + "<br>";
			document.body.innerHTML += "Género: " + this.genero + "<br>";
			document.body.innerHTML += "Preço: " + this.preco + "<br>";
			document.body.innerHTML += "Avaliação: " + this.avaliacao + this.comentario + "<br><br>";
		}
	}
      
    //Objecto Overwatch
    var overwatch = new jogo("Overwatch", "Fps", "39.99 €", "8/10", " Absolutamente Incrivel");
	overwatch.dados();
	
	//Objecto League of legends
	var lol = new jogo("League of Legends", "MOBA", "Free", "0/10", " Sem qualquer interesse ou diversão.");
	lol.dados();

}