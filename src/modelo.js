function Tablero(numeroCasillas){
	this.casillas=[]
	this.numeroCasillas=numeroCasillas
	this.agregarCasilla=function(posicion,casilla){
		this.casillas[posicion]=casilla
	}
	this.iniciarTablero=function(){
		for(i=0;i<numeroCasillas;i++){
			this.casillas[i] = new Casilla(new Calle())
		}
	}
	this.configurarTablero=function(){
		this.agregarCasilla(0,new Casilla(new Salida))
		this.agregarCasilla(1,new Casilla(new Calle("RONDA DE VALENCIA","MARRON",60)))
		this.agregarCasilla(2,new Casilla(new CajaComunidad))
		this.agregarCasilla(3,new Casilla(new Calle("PLAZA LAVAPIES","MARRON",60)))
		this.agregarCasilla(4,new Casilla(new Impuesto("IMPUESTO SOBRE CAPITAL",200)))
		this.agregarCasilla(5,new Casilla(new Estacion("ESTACION DE GOYA",200)))
		this.agregarCasilla(6,new Casilla(new Calle("GLORIETA CUATRO CAMINOS","AZULCLARO",100)))
		this.agregarCasilla(7,new Casilla(new Sorpresa))
		this.agregarCasilla(8,new Casilla(new Calle("AVENIDA REINA SOFIA","AZULCLARO",100)))
		this.agregarCasilla(9,new Casilla(new Calle("CALLE BRAVO MURILLO","AZULCLARO",120)))
		this.agregarCasilla(10,new Casilla(new Carcel))
		this.agregarCasilla(11,new Casilla(new Calle("GLORIETA DE BILBAO","ROSA",140)))
		this.agregarCasilla(12,new Casilla(new Impuesto("COMPAÑIA DE ELECTRICIDAD",150)))
		this.agregarCasilla(13,new Casilla(new Calle("CALLE ALBERTO AGUILERA","ROSA",140)))
		this.agregarCasilla(14,new Casilla(new Calle("CALLE FUENCABRAL","ROSA",160)))
		this.agregarCasilla(15,new Casilla(new Estacion("ESTACION DE LAS DELICIAS",200)))
		this.agregarCasilla(16,new Casilla(new Calle("AVENIDA FELIPE II","NARANJA",180)))
		this.agregarCasilla(17,new Casilla(new CajaComunidad))
		this.agregarCasilla(18,new Casilla(new Calle("CALLE VELAZQUEZ","NARANJA",180)))
		this.agregarCasilla(19,new Casilla(new Calle("CALLE SERRANO","NARANJA",200)))
		this.agregarCasilla(20,new Casilla(new Parcking))
		this.agregarCasilla(21,new Casilla(new Calle("AVENIDA DE AMERICA","ROJO",220)))
		this.agregarCasilla(22,new Casilla(new Sorpresa))
		this.agregarCasilla(23,new Casilla(new Calle("CALLE MARIA DE MOLINA","ROJO",220)))
		this.agregarCasilla(24,new Casilla(new Calle("CALLE CEA BERMUDEZ","ROJO",240)))
		this.agregarCasilla(25,new Casilla(new Estacion("ESTACION DE MEDIO DIA",200)))
		this.agregarCasilla(26,new Casilla(new Calle("AVENIDA DE LOS REYES CATOLICOS","AMARILLO",260)))
		this.agregarCasilla(27,new Casilla(new Calle("CALLE BAILEN","AMARILLO",260)))
		this.agregarCasilla(28,new Casilla(new Impuesto("COMPAÑIA DE AGUA",150)))
		this.agregarCasilla(29,new Casilla(new Calle("PLAZA DE ESPAÑA","AMARILLO",280)))
		this.agregarCasilla(30,new Casilla(new VolverCarcel))
		this.agregarCasilla(31,new Casilla(new Calle("PUERTA DEL SOL","VERDE",300)))
		this.agregarCasilla(32,new Casilla(new Calle("CALLE ALCALA","VERDE",300)))
		this.agregarCasilla(33,new Casilla(new CajaComunidad))
		this.agregarCasilla(34,new Casilla(new Calle("GRAN VIA","VERDE",320)))
		this.agregarCasilla(35,new Casilla(new Estacion("ESTACION DEL NORTE",200)))
		this.agregarCasilla(36,new Casilla(new Sorpresa))
		this.agregarCasilla(37,new Casilla(new Calle("PASEO DE LA CASTELLANA","AZULOSCURO",380)))
		this.agregarCasilla(38,new Casilla(new ImpuestoLujo))
		this.agregarCasilla(39,new Casilla(new Calle("PASEO DEL PRADO","AZULOSCURO",400)))
	}
	this.obtenerCasilla=function(posicion){
		return this.casillas[posicion]
	}
	this.obtenerPosicion=function(cadena){
		for(i=0;i<this.numeroCasillas;i++){
			casilla=this.casillas[i]
			if(casilla.tema.nombre==cadena)
				return i
		}
	}
	this.iniciarTablero()
}

function Casilla(tema){
	this.tema=tema
	this.obtenerTema=function(){
		return tema
	}
}

function Calle(nombre,color,precio){
	this.nombre=nombre
	this.color=color
	this.precio=precio

	this.getNombre=function(){
		return nombre
	}
	this.getColor=function(){
		return color
	}
	this.getPrecio=function(){
		return precio
	}
	this.setNombre=function(nombre){
		this.nombre=nombre
	}
	this.setColor=function(color){
		this.color=color
	}
	this.setPrecio=function(precio){
		this.precio=precio
	}

}

function Salida(){
	this.nombre="Salida"
}

function Carcel(){
	this.nombre="Carcel"
}

function Estacion(nombre,precio){
	this.nombre=nombre
	this.precio=precio

	this.getNombre=function(){
		return nombre
	}
	this.getPrecio=function(){
		return precio
	}
	this.setNombre=function(nombre){
		this.nombre=nombre
	}
	this.setPrecio=function(precio){
		this.precio=precio
	}
}

function CajaComunidad(){
	this.nombre="Caja de comunidad"
}

function Sorpresa(){
	this.nombre="Sorpresa"
}

function Impuesto(nombre,precio){
	this.nombre=nombre
	this.precio=precio

	this.getNombre=function(){
		return nombre
	}
	this.getPrecio=function(){
		return precio
	}
	this.setNombre=function(nombre){
		this.nombre=nombre
	}
	this.setPrecio=function(precio){
		this.precio=precio
	}
}

function ImpuestoLujo(){
	this.nombre="ImpuestoLujo"
}

function Parcking(){
	this.nombre="Parcking"
}

function VolverCarcel(){
	this.nombre="VolverCarcel"
}

function iniJuego(){
	tablero = new Tablero(40)
	dado = new Dado()
	tablero.configurarTablero()
}

function Dado(){
	this.lanzar=function(){
		return Math.round(Math.random()*5+1)
	}
}

function Usuario(nombre){
	this.nombre=nombre
	juego 
	
	this.getNombre=function(){
		return nombre
	}
	this.setNombre=function(nombre){
		this.nombre=nombre
	}

}

function Ficha(usuario,color,saldo,partida){
	this.usuario=usuario
	this.color=color
	this.saldo=saldo
	this.partida=partida
	this.posicion=0
	var doble=0
	var carcel=false
	var contCarcel=0

	this.lanzar=function(){
		if(carcel){
			contCarcel++
			if(contCarcel==3){
				carcel=false
			}
			this.posicion=10
			return this.imprimirCasilla()
		}
		var x=partida.dado.lanzar()
		var y=partida.dado.lanzar()
		if(this.posicion+x+y > 39){
			this.posicion=(x+y)-(39-this.posicion)
		}
		else{
			this.posicion=this.posicion+x+y	
		}
		if(x==y){
			doble=doble+1
		}
		if(doble==3){
			carcel=true
		}
		console.log('Dado 1: '+x+' Dado 2: '+y)
		this.imprimirCasilla()
	}

	this.imprimirCasilla=function(){
		console.log('Estas en la casilla '+this.partida.tablero.casillas[this.posicion].tema.nombre+' y posicion '+this.posicion)
	}

}

function Juego(){
	this.usr=[]
	this.partidas=[]

	this.nuevoUsuario=function(nombre){
		this.usr.push(nombre)
	}

	this.nuevaPartida=function(){
		this.partidas.push(new Partida)
	}
}

function Partida(){
	this.participantes=[]
	this.fichasDisponibles=6
	var color=''

	this.tablero = new Tablero(40)
	this.dado = new Dado()
	this.tablero.configurarTablero()
	

	this.nuevoParticipante=function(usr){
		if(this.fichasDisponibles>0){
			switch(this.fichasDisponibles){
				case 1: color='azul'
				break
				case 2: color='rojo'
				break
				case 3: color='amarillo'
				break
				case 4: color='verde'
				break
				case 5: color='blanco'
				break
				case 6: color='negro'
				break
			}
			this.participantes[6-this.fichasDisponibles]=new Ficha(usr,color, 150000,this)
			this.fichasDisponibles--
		}
	}
}

