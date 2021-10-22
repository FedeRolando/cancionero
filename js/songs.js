/*const songTemplate = {
	title: "",
	autor: "",
	originalTone: "",
	favoriteTone: "",
	tone: function(){
		selectedTone = ;
	},
	chords: function(){
		chords = `
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._} ${selectedTone._} ${selectedTone._} ${selectedTone._}]
				</div>
				<p>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</p>
				<p>
					<span></span>
					<span></span>
					<span></span> 
					<span></span>
				</p>
			</div>

			<div>
				<div class="chordPart">
					2 [${selectedTone._} ${selectedTone._} ${selectedTone._} ${selectedTone._}]
				</div>
				<p>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._} ${selectedTone._} ${selectedTone._} ${selectedTone._} ${selectedTone._}]
				</div>
				<p>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</p>	
			</div>
		</div>
		`;
	}
}*/

const laCerveza = {
	title: "La cerveza",
	autor: "LPDA",
	originalTone: "D",
	favoriteTone: "E",
	tone: function(){
		selectedTone = toneE;
	},
	chords: function(){
		chords = `
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._4th} ${selectedTone._6th_m} ${selectedTone._5th}]
				</div>
				<p>
					<span>Cuando la cerveza</span>
					<span>se calienta demasiado</span>
					<span>el cenicero está lleno</span>
					<span>y el paquete vacío</span>
				</p>
				<p>
					<span>Pierdo la cabeza</span>
					<span>y me siento un desgraciado</span>
					<span>como quien tiene por hobby</span> 
					<span>al vino del estío</span>
				</p>
			</div>

			<div>
				<div class="chordPart">
					2a [${selectedTone._2nd} ${selectedTone._4th} ${selectedTone._1st} ${selectedTone._5th}]
				</div>
				<p>
					<span>Traté de que el corazón</span>
					<span>No me diera explicación</span>
					<span>Para no derramar</span>
					<span>Lágrimas en tu honor</span>
				</p>
				<div class="chordPart">
					2b [${selectedTone._2nd} ${selectedTone._4th} ${selectedTone._1st} ${selectedTone._5th} ${selectedTone._7th_b} ${selectedTone._4th}]
				</div>
				<p>
					<span>Traté de que la razón</span>
					<span>Me llevara al buen camino</span>
					<span>Ella me presentó al vino</span>
					<span>Al que agradecido estoy</span>
				</p>	
			</div>
		</div>

		<div class="column">
			<div>
				<div class="chordPart">
					3 [${selectedTone._6th_m} ${selectedTone._1st} ${selectedTone._5th} ${selectedTone._4th}]
				</div>
				<p>
					<span>Y hoy resulta que ayer</span>
					<span>la princesa se hizo reina</span>
					<span>aquel cepillo sin dientes</span>
					<span>hoy es el que mejor peina</span>
				</p>
				<p>
					<span>Ya no deshace el somier</span>
					<span>aquel amor tan fugaz</span>
					<span>que en ese cuarto de hotel</span>
					<span>se declaraba inmortal</span>
				</p>
			</div>

			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._4th} ${selectedTone._6th_m} ${selectedTone._5th}]	
				</div>
				<p>
					<span>Cuando las estrellas</span>
					<span>iluminan mi pasado</span>
					<span>puedo verte de rodillas</span>
					<span>pidiendome que vuelva</span>
				</p>
				<p>
					<span>Y hoy en mi ventana</span>
					<span>veo llover sobremojado</span>
					<span>Me siento un niño indefenso</span>
					<span>en medio de la selva</span>
				</p>
			</div>
		</div>

		<div class="column">
			<div>
				<div class="chordPart">
					2a [${selectedTone._2nd} ${selectedTone._4th} ${selectedTone._1st} ${selectedTone._5th}]
				</div>
				<p>
					<span>Traté de que mi ojos</span>
					<span>no te vieran tan lejos</span>
					<span>pero siempre será así</span>
					<span>mi triste porvenir</span>
				</p>
				<div class="chordPart">
					2b [${selectedTone._2nd} ${selectedTone._4th} ${selectedTone._1st} ${selectedTone._5th} ${selectedTone._7th_b} ${selectedTone._4th}]
				</div>
				<p>
					<span>Traté de que mi pasión</span>
					<span>se perdiera entre el montón</span>
					<span>pero siempre será igual</span>
					<span>siempre se volverá al primer amor</span>
				</p>			
			</div>
		</div>`;
	}
}

const tanPerfectoQueAsusta = {
	title: "Tan perfecto que asusta",
	autor: "Callejeros",
	originalTone: "F#m",
	favoriteTone: "",
	tone: function(){
		selectedTone = toneFsm;
	},
	chords: function(){
		chords = `
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._4th_m} ${selectedTone._7th} ${selectedTone._5th_m} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Tener la oportunidad</span>
					<span>poder estar más allá</span>
					<span>tan acostumbrado a no ser</span>
					<span>a desconfiar, a no ganar</span>
				</p>
				<p>
					<span>El mar se te abrió una vez</span>
					<span>se te abrió para no parar</span>
					<span>y vos no te despertaste</span> 
					<span>lo arruinaste una vez más</span>
				</p>
			</div>

			<div>
				<div class="chordPart">
					2 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._4th_m} ${selectedTone._7th}]
				</div>
				<p>
					<span>Es tan perfecto que asusta</span>
					<span>¿por qué nunca es justa la fecilidad?</span>
					<span>Saber elegir es lo que cuesta más</span>
					<span>No cualquiera suma sin restar</span>
				</p>	
			</div>
		</div>
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._4th_m} ${selectedTone._7th} ${selectedTone._5th_m} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Sentís la electricidad</span>
					<span>y no la sabés llevar</span>
					<span>te quema, te paraliza</span>
					<span>no te deja reaccionar</span>
				</p>
				<p>
					<span>El enemigo peor</span>
					<span>ese gran saboteador</span>
					<span>siempre será uno mismo</span> 
					<span>y ese miedo a estar mejor</span>
				</p>
			</div>
		</div>
		<div class="column">
			<div>
				<div class="chordPart">
					2 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._4th_m} ${selectedTone._7th}]
				</div>
				<p>
					<span>Es tan perfecto que asusta</span>
					<span>¿por qué nunca es justa la fecilidad?</span>
					<span>Saber elegir es lo que cuesta más</span>
					<span>No cualquiera suma sin restar</span>
				</p>	
				<p>
					<span>Es tan perfecto que asusta</span>
					<span>¿por qué nunca es justa la fecilidad?</span>
					<span>Y la puta nunca es justa</span>
					<span>¿por qué? Porque algunos nunca la tendrán</span>
				</p>	
			</div>
		</div>
		`;
	}
}

const veneno = {
	title: "Veneno",
	autor: "La renga",
	originalTone: "C",
	favoriteTone: "C",
	tone: function(){
		selectedTone = toneC;
	},
	chords: function(){
		chords = `
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._6th_m} ${selectedTone._1st} ${selectedTone._6th_m}]
				</div>
				<p>
					<span>En un rincón de las sierras</span>
					<span>donde arden las estrellas</span>
					<span>dejé mi herida abierta</span>
					<span>en un valle de penas</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._2nd_m} ${selectedTone._6th_m} ${selectedTone._2nd_m} ${selectedTone._3rd}]
				</div>
				<p>
					<span>Casi sin darte cuenta</span>
					<span>se te puede enfermar el corazón</span>
					<span>Cuando uno menos lo espera</span> 
					<span>el veneno ya está en tus venas</span>
				</p>
			</div>

			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._6th_m} ${selectedTone._1st} ${selectedTone._6th_m}]
				</div>
				<p>
					<span>En un río de deshielo</span>
					<span>al sol de una mañana</span>
					<span>trajeron en un cuerpo</span>
					<span>a un ángel de montaña</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._2nd_m} ${selectedTone._6th_m} ${selectedTone._2nd_m} ${selectedTone._3rd}]
				</div>
				<p>
					<span>Un par de ojos negros</span>
					<span>te pueden robar la ilusión</span>
					<span>y no hay cura ni remedio</span>
					<span>que te haga ver mejor</span>
				</p>	
			</div>
		</div>

		<div class="column">
		<div>
			<div class="chordPart">
				1 [${selectedTone._1st} ${selectedTone._6th_m} ${selectedTone._1st} ${selectedTone._6th_m}]
			</div>
			<p>
				<span>La luna y mi suerte</span>
				<span>rompieron el encanto</span>
				<span>Perdí mi sueño en la noche</span>
				<span>que el ángel se hizo diablo</span>
			</p>
			<div class="chordPart">
				2 [${selectedTone._2nd_m} ${selectedTone._6th_m} ${selectedTone._2nd_m} ${selectedTone._3rd}]
			</div>
			<p>
				<span>Un par de ojos negros</span>
				<span>te pueden robar la ilusión</span>
				<span>y no hay cura ni remedio</span> 
				<span>que te haga ver mejor</span>
			</p>
		</div>

		<div>
			<div class="chordPart">
				1 [${selectedTone._1st} ${selectedTone._6th_m} ${selectedTone._1st} ${selectedTone._6th_m}]
			</div>
			<p>
				<span>En un rincón de las sierras</span>
				<span>donde arden las estrellas</span>
				<span>dejé mi herida abierta</span>
				<span>en un valle de penas</span>
			</p>
			<div class="chordPart">
				2 [${selectedTone._2nd_m} ${selectedTone._6th_m} ${selectedTone._2nd_m} ${selectedTone._3rd}]
			</div>
			<p>
				<span>Casi sin darte cuenta</span>
				<span>se te puede enfermar el corazón</span>
				<span>Cuando uno menos lo espera</span>
				<span>el veneno ya está en tus venas</span>
			</p>	
		</div>
	</div>
		`;
	}
}

const misterios = {
	title: "Misterios",
	autor: "Don Osvaldo",
	originalTone: "Db",
	favoriteTone: "Db",
	tone: function(){
		selectedTone = toneDb;
	},
	chords: function(){
		chords = `
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._6th_m} ${selectedTone._3rd_m}]
				</div>
				<p>
					<span>Con la llave en la mano</span>
					<span>la puso en la puerta</span>
					<span>giró a la izquierda y abrió</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th} ${selectedTone._1st} ${selectedTone._4th} ${selectedTone._5th}]
				</div>
				<p>
					<span>El quería volver a la noche</span>
					<span>que tanto deseaba, que siempre buscó</span>
				</p>
			</div>

			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._6th_m} ${selectedTone._3rd_m}]
				</div>
				<p>
					<span>En un cuento sin brujas ni hadas</span>
					<span>miró a la luna, siempre lo escuchó</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th} ${selectedTone._1st} ${selectedTone._4th} ${selectedTone._5th}]
				</div>
				<p>
					<span>Le contó que ese sueño despertaba</span>
					<span>misterios dormidos en su corazón</span>
				</p>	
			</div>
		</div>

		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._6th_m} ${selectedTone._3rd_m}]
				</div>
				<p>
					<span>Si pudiera extrañarte un día</span>
					<span>decia, estaría muy lejos de vos</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th} ${selectedTone._1st} ${selectedTone._4th} ${selectedTone._5th}]
				</div>
				<p>
					<span>Le rezaba a un padre sin hijos</span>
					<span>que no era profeta de su religión</span>
				</p>
			</div>
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._6th_m} ${selectedTone._3rd_m}]
				</div>
				<p>
					<span>Ese árbol que está frente suyo</span>
					<span>testigo del viejo algún día nació</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th} ${selectedTone._1st} ${selectedTone._4th} ${selectedTone._5th}]
				</div>
				<p>
					<span>Insolado de tantos veranos sin agua</span>
					<span>lo mira y le pide perdón</span>
				</p>	
			</div>
		</div>

		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._6th_m} ${selectedTone._3rd_m}]
				</div>
				<p>
					<span>El espejo relfeja su esencia profunda</span>
					<span>inocente, que nadie educó</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th} ${selectedTone._1st} ${selectedTone._4th} ${selectedTone._5th}]
				</div>
				<p>
					<span>es herencia de todo un camino</span>
					<span>cargado en tristeza y ajeno al rencor</span>
				</p>
			</div>
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st} ${selectedTone._5th} ${selectedTone._6th_m} ${selectedTone._3rd_m}]
				</div>
				<p>
					<span>El desierto en las noches sin luna</span>
					<span>está tan oscuro que se puede ver</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th} ${selectedTone._1st} ${selectedTone._4th} ${selectedTone._5th}]
				</div>
				<p>
					<span>Las estrellas son dados tirados</span>
					<span>de un juego macabro sin resolver</span>
				</p>	
			</div>
		</div>

		`;
	}
}

const misLatidos = {
	title: "Mis latidos",
	autor: "Don Osvaldo",
	originalTone: "F#m",
	favoriteTone: "Fm",
	tone: function(){
		selectedTone = toneFm;
	},
	chords: function(){
		chords = `
		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st_m} ${selectedTone._3rd} ${selectedTone._6th}]
				</div>
				<p>
					<span>Tal vez me queden</span>
					<span>pendientes los ocasos</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th_m} ${selectedTone._5th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>el mar rompiendo</span>
					<span>de lleno en mis talones</span>
				</p>
				<div class="chordPart">
					1 [${selectedTone._1st_m} ${selectedTone._3rd} ${selectedTone._6th}]
				</div>
				<p>
					<span>El sol dorando</span>
					<span>las pieles con sus rayos</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th_m} ${selectedTone._5th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>canciones mieles</span>
					<span>flechas y corazones</span>
				</p>
			</div>
			<div>
				<div class="chordPart">
					3 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._7th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Pero jamás habré negado mis latidos</span>
					<span>o negociado la razón por el auxilio</span>
				</p>
				<div class="chordPart">
					3 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._7th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Porque en honor a la verdad</span>
					<span>no es solo un dicho</span>
					<span>y el fin les llega</span>
					<span>a los que viven sin principios</span>
				</p>
			</div>
		</div>

		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st_m} ${selectedTone._3rd} ${selectedTone._6th}]
				</div>
				<p>
					<span>Tal vez el tiempo</span>
					<span>me oxide la destreza</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th_m} ${selectedTone._5th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>y menos ágil</span>
					<span>me aquiete entre la selva</span>
				</p>
				<div class="chordPart">
					1 [${selectedTone._1st_m} ${selectedTone._3rd} ${selectedTone._6th}]
				</div>
				<p>
					<span>Tal vez no logre</span>
					<span>esquivar tanta certeza</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th_m} ${selectedTone._5th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>y asuma insomne</span>
					<span>el temor a que no vuelvas</span>
				</p>
			</div>
			<div>
				<div class="chordPart">
					3 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._7th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Pero jamás habré negado mis latidos</span>
					<span>o negociado la razón por el auxilio</span>
				</p>
				<div class="chordPart">
					3 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._7th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Porque en honor a la verdad</span>
					<span>no es solo un dicho</span>
					<span>y el fin les llega</span>
					<span>a los que viven sin principios</span>
				</p>
			</div>
		</div>

		<div class="column">
			<div>
				<div class="chordPart">
					1 [${selectedTone._1st_m} ${selectedTone._3rd} ${selectedTone._6th}]
				</div>
				<p>
					<span>Tal vez me pierda</span>
					<span>por siempre en los abismos</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th_m} ${selectedTone._5th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>y no conozca</span>
					<span>de cerca el paraiso</span>
				</p>
				<div class="chordPart">
					1 [${selectedTone._1st_m} ${selectedTone._3rd} ${selectedTone._6th}]
				</div>
				<p>
					<span>Que el infortunio</span>
					<span>me arrope con su abrigo</span>
				</p>
				<div class="chordPart">
					2 [${selectedTone._4th_m} ${selectedTone._5th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>y ese sea el precio</span>
					<span>de haber sido uno mismo</span>
				</p>
			</div>
			<div>
				<div class="chordPart">
					3 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._7th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Pero jamás habré negado mis latidos</span>
					<span>o negociado la razón por el auxilio</span>
				</p>
				<div class="chordPart">
					3 [${selectedTone._6th} ${selectedTone._3rd} ${selectedTone._7th} ${selectedTone._1st_m}]
				</div>
				<p>
					<span>Porque en honor a la verdad</span>
					<span>no es solo un dicho</span>
					<span>y el fin les llega</span>
					<span>a los que viven sin principios</span>
				</p>
			</div>
		</div>

		`;
	}
}



const canciones = [laCerveza,tanPerfectoQueAsusta,veneno,misterios,misLatidos];
