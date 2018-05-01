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
			document.body.innerHTML += "Avaliação:" + this.avaliacao + "<br>";
			document.body.innerHTML += this.comentario ? "Comentário: Muito Bom, uma experiência inesquecivel!<br><br>" : "Comentário: Irritante, esgotante e carente de qualquer tipo de diversão.<br><br>";
		}
	}
      
    //Objecto Ovwewatch
    var overwatch = new jogo("Overwatch", "Fps", "39.99 €", "8/10", true);
	overwatch.dados();
	
	//Objecto Minecraft
	var minecraft = new jogo("Minecraft", "Sandbox", "19.99 €", "10/10", true);
	minecraft.dados();
	
	//Objecto Overwatch
	var lol = new jogo("League of Legends", "MOBA", "Free", "0/10", false);
	lol.dados();

}