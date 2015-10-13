describe("Monopoly",function(){

	beforeEach(function(){
		new iniJuego();
	});

	describe("Crear el juego",function(){
		it("debería existir tablero",function(){
			expect(tablero).toBeDefined();
		});

		it("debería existir 40 casillas",function(){
			expect(tablero.numeroCasillas).toEqual(40);
		});

	});

	describe("Comprobar las calles",function(){
		it("en la casilla 1 debería estar la calle RONDA DE VALENCIA",function(){
			expect(tablero.casillas[1].tema.nombre).toEqual('RONDA DE VALENCIA');
			expect(tablero.casillas[1].tema.color).toEqual('MARRON');
			expect(tablero.casillas[1].tema.precio).toEqual(60);
		});

		it("en la casilla 3 debería estar la calle PLAZA LAVAPIES",function(){
			expect(tablero.casillas[3].tema.nombre).toEqual('PLAZA LAVAPIES');
			expect(tablero.casillas[3].tema.color).toEqual('MARRON');
			expect(tablero.casillas[3].tema.precio).toEqual(60);
		});

		it("en la casilla 6 debería estar la calle GLORIETA CUATRO CAMINOS",function(){
			expect(tablero.casillas[6].tema.nombre).toEqual('GLORIETA CUATRO CAMINOS');
			expect(tablero.casillas[6].tema.color).toEqual('AZULCLARO');
			expect(tablero.casillas[6].tema.precio).toEqual(100);
		});

		it("en la casilla 8 debería estar la calle AVENIDA REINA SOFIA",function(){
			expect(tablero.casillas[8].tema.nombre).toEqual('AVENIDA REINA SOFIA');
			expect(tablero.casillas[8].tema.color).toEqual('AZULCLARO');
			expect(tablero.casillas[8].tema.precio).toEqual(100);
		});

		it("en la casilla 9 debería estar la calle CALLE BRAVO MURILLO",function(){
			expect(tablero.casillas[9].tema.nombre).toEqual('CALLE BRAVO MURILLO');
			expect(tablero.casillas[9].tema.color).toEqual('AZULCLARO');
			expect(tablero.casillas[9].tema.precio).toEqual(120);
		});

		it("en la casilla 11 debería estar la calle GLORIETA DE BILBAO",function(){
			expect(tablero.casillas[11].tema.nombre).toEqual('GLORIETA DE BILBAO');
			expect(tablero.casillas[11].tema.color).toEqual('ROSA');
			expect(tablero.casillas[11].tema.precio).toEqual(140);
		});

		it("en la casilla 13 debería estar la calle ALBERTO AGUILERA",function(){
			expect(tablero.casillas[13].tema.nombre).toEqual('CALLE ALBERTO AGUILERA');
			expect(tablero.casillas[13].tema.color).toEqual('ROSA');
			expect(tablero.casillas[13].tema.precio).toEqual(140);
		});
		it("en la casilla 14 debería estar la calle FUENCABRAL",function(){
			expect(tablero.casillas[14].tema.nombre).toEqual('CALLE FUENCABRAL');
			expect(tablero.casillas[14].tema.color).toEqual('ROSA');
			expect(tablero.casillas[14].tema.precio).toEqual(160);
		});

		it("en la casilla 16 debería estar la calle AVENIDA FELIPE II",function(){
			expect(tablero.casillas[16].tema.nombre).toEqual('AVENIDA FELIPE II');
			expect(tablero.casillas[16].tema.color).toEqual('NARANJA');
			expect(tablero.casillas[16].tema.precio).toEqual(180);
		});

		it("en la casilla 18 debería estar la calle VELAZQUEZ",function(){
			expect(tablero.casillas[18].tema.nombre).toEqual('CALLE VELAZQUEZ');
			expect(tablero.casillas[18].tema.color).toEqual('NARANJA');
			expect(tablero.casillas[18].tema.precio).toEqual(180);
		});

		it("en la casilla 19 debería estar la calle SERRANO",function(){
			expect(tablero.casillas[19].tema.nombre).toEqual('CALLE SERRANO');
			expect(tablero.casillas[19].tema.color).toEqual('NARANJA');
			expect(tablero.casillas[19].tema.precio).toEqual(200);
		});

		it("en la casilla 21 debería estar la calle AVENIDA DE AMERICA",function(){
			expect(tablero.casillas[21].tema.nombre).toEqual('AVENIDA DE AMERICA');
			expect(tablero.casillas[21].tema.color).toEqual('ROJO');
			expect(tablero.casillas[21].tema.precio).toEqual(220);
		});

		it("en la casilla 23 debería estar la calle MARIA DE MOLINA",function(){
			expect(tablero.casillas[23].tema.nombre).toEqual('CALLE MARIA DE MOLINA');
			expect(tablero.casillas[23].tema.color).toEqual('ROJO');
			expect(tablero.casillas[23].tema.precio).toEqual(220);
		});

		it("en la casilla 24 debería estar la calle CEA BERMUDEZ",function(){
			expect(tablero.casillas[24].tema.nombre).toEqual('CALLE CEA BERMUDEZ');
			expect(tablero.casillas[24].tema.color).toEqual('ROJO');
			expect(tablero.casillas[24].tema.precio).toEqual(240);
		});

		it("en la casilla 26 debería estar la calle AVENIDA DE LOS REYES CATOLICOS",function(){
			expect(tablero.casillas[26].tema.nombre).toEqual('AVENIDA DE LOS REYES CATOLICOS');
			expect(tablero.casillas[26].tema.color).toEqual('AMARILLO');
			expect(tablero.casillas[26].tema.precio).toEqual(260);
		});

		it("en la casilla 27 debería estar la calle BAILEN",function(){
			expect(tablero.casillas[27].tema.nombre).toEqual('CALLE BAILEN');
			expect(tablero.casillas[27].tema.color).toEqual('AMARILLO');
			expect(tablero.casillas[27].tema.precio).toEqual(260);
		});

		it("en la casilla 29 debería estar la calle PLAZA DE ESPAÑA",function(){
			expect(tablero.casillas[29].tema.nombre).toEqual('PLAZA DE ESPAÑA');
			expect(tablero.casillas[29].tema.color).toEqual('AMARILLO');
			expect(tablero.casillas[29].tema.precio).toEqual(280);
		});

		it("en la casilla 31 debería estar la calle PUERTA DEL SOL",function(){
			expect(tablero.casillas[31].tema.nombre).toEqual('PUERTA DEL SOL');
			expect(tablero.casillas[31].tema.color).toEqual('VERDE');
			expect(tablero.casillas[31].tema.precio).toEqual(300);
		});

		it("en la casilla 32 debería estar la calle ALCALA",function(){
			expect(tablero.casillas[32].tema.nombre).toEqual('CALLE ALCALA');
			expect(tablero.casillas[32].tema.color).toEqual('VERDE');
			expect(tablero.casillas[32].tema.precio).toEqual(300);
		});

		it("en la casilla 34 debería estar la calle GRAN VIA",function(){
			expect(tablero.casillas[34].tema.nombre).toEqual('GRAN VIA');
			expect(tablero.casillas[34].tema.color).toEqual('VERDE');
			expect(tablero.casillas[34].tema.precio).toEqual(320);
		});

		it("en la casilla 37 debería estar la calle PASEO DE LA CASTELLANA",function(){
			expect(tablero.casillas[37].tema.nombre).toEqual('PASEO DE LA CASTELLANA');
			expect(tablero.casillas[37].tema.color).toEqual('AZULOSCURO');
			expect(tablero.casillas[37].tema.precio).toEqual(380);
		});

		it("en la casilla 39 debería estar la calle PASEO DEL PRADO",function(){
			expect(tablero.casillas[39].tema.nombre).toEqual('PASEO DEL PRADO');
			expect(tablero.casillas[39].tema.color).toEqual('AZULOSCURO');
			expect(tablero.casillas[39].tema.precio).toEqual(400);
		});
	});

	describe("Comprobar la salida",function(){
		it("en la casilla 0 debería estar la casilla de Salida ",function(){
			expect(tablero.casillas[0].tema.nombre).toEqual('Salida');
		});

	});

	describe("Comprobar las estaciones",function(){
		it("en la casilla 5 debería estar la estacion de goya ",function(){
			expect(tablero.casillas[5].tema.nombre).toEqual('ESTACION DE GOYA');
		});
		
		it("en la casilla 15 debería estar la estacion de las delicias ",function(){
			expect(tablero.casillas[15].tema.nombre).toEqual('ESTACION DE LAS DELICIAS');
		});

		it("en la casilla 25 debería estar la estacion de medio dia ",function(){
			expect(tablero.casillas[25].tema.nombre).toEqual('ESTACION DE MEDIO DIA');
		});

		it("en la casilla 35 debería estar la estacion del norte ",function(){
			expect(tablero.casillas[35].tema.nombre).toEqual('ESTACION DEL NORTE');
		});
	});

	describe("Comprobar las cajas de comunidad",function(){
		it("en la casilla 2 debería estar la caja de comunidad ",function(){
			expect(tablero.casillas[2].tema.nombre).toEqual('Caja de comunidad');
		});

		it("en la casilla 17 debería estar la caja de comunidad ",function(){
			expect(tablero.casillas[17].tema.nombre).toEqual('Caja de comunidad');
		});

		it("en la casilla 33 debería estar la caja de comunidad ",function(){
			expect(tablero.casillas[33].tema.nombre).toEqual('Caja de comunidad');
		});

	});

	describe("Comprobar las sorpresas",function(){
		it("en la casilla 7 debería estar una sorpresa",function(){
			expect(tablero.casillas[7].tema.nombre).toEqual('Sorpresa');
		});

		it("en la casilla 22 debería estar una sorpresa",function(){
			expect(tablero.casillas[22].tema.nombre).toEqual('Sorpresa');
		});

		it("en la casilla 36 debería estar una sorpresa",function(){
			expect(tablero.casillas[36].tema.nombre).toEqual('Sorpresa');
		});
	});

	describe("Comprobar la carcel",function(){
		it("en la casilla 10 debería estar la carcel",function(){
			expect(tablero.casillas[10].tema.nombre).toEqual('Carcel');
		});

		it("en la casilla 30 debería estar la volver a la carcel",function(){
			expect(tablero.casillas[30].tema.nombre).toEqual('VolverCarcel');
		});
	});

	describe("Comprobar el parking",function(){
		it("en la casilla 20 debería estar el parcking",function(){
			expect(tablero.casillas[20].tema.nombre).toEqual('Parcking');
		});

	});

	describe("Comprobar los impuestos",function(){
		it("en la casilla 4 debería estar el impuesto sobre capital ",function(){
			expect(tablero.casillas[4].tema.nombre).toEqual('IMPUESTO SOBRE CAPITAL');
		});
		
		it("en la casilla 12 debería estar el impuesto de compañia de electricidad ",function(){
			expect(tablero.casillas[12].tema.nombre).toEqual('COMPAÑIA DE ELECTRICIDAD');
		});

		it("en la casilla 28 debería estar el impuesto de compañia de agua ",function(){
			expect(tablero.casillas[28].tema.nombre).toEqual('COMPAÑIA DE AGUA');
		});

		it("en la casilla 38 debería estar el impuesto de lujo ",function(){
			expect(tablero.casillas[38].tema.nombre).toEqual('ImpuestoLujo');
		});
	});


})