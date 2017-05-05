function MiembroSquad(nombre, apellido, edad, hobbies) { //constructor creado con las propiedades solicitadas
    this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.hobbies = hobbies // debe ser un array porque existen varios hobbies
}

//Creo una instancia por cada miembro de mi MiembroSquad
//const es como una variable utilizada en el nuevo ecmascript 6 que se usa cuando el valor siempre es el mismo, no cambia 
//const laura = new MiembroSquad("Laura", "Peláez", "undefined", "cinéfila")
/*const orieta = new MiembroSquad("Orieta", "Toro", "27", ["Leer", "dormir"])
const constanza = new MiembroSquad("Constanza", "Pecori", "26", ["tejer", "comer", "dormir "])
const rangi = new MiembroSquad("Rangi", "Becerra", "32", ["viajar"])
const caterina = new MiembroSquad("Caterina", "Da Silva", "26", ["juegos online"])
const rosa = new MiembroSquad("Rosa", "Díaz", "32", ["Pensar en la inmortalidad del cangrejo"])
const genesis = new MiembroSquad("Genesis", "Narváez", "27", ["pasear en bici"])*/
function inicializar() {
    var contenedor = document.getElementById("contenedor");

    var teamMates = [new MiembroSquad("Orieta", "Toro", "27", ["Leer", "dormir"]), new MiembroSquad("Constanza", "Pecori", "26", ["tejer", "comer", "dormir "]),
        new MiembroSquad("Rangi", "Becerra", "32", ["viajar"]), new MiembroSquad("Caterina", "Da Silva", "26", ["juegos online"]), new MiembroSquad("Rosa", "Díaz", "32", ["Pensar en la inmortalidad del cangrejo"]),
        new MiembroSquad("Genesis", "Narváez", "27", ["pasear en bici"])
    ];
    console.log(teamMates);
    var html = ""; //creo esta variable para que me agrupe un bloque de codigo html y me lo ingrese al contenedor
    for (var i = 0; i < teamMates.length; i++) { //recorro mi array teamMates que me contiene las nuevas instancias
        html += "<section><strong>Nombre: </strong>" + //+= para que concatene las cosas y me muestre todo
            teamMates[i].nombre + "</br>" + " <strong> Apellido: </strong>" +
            teamMates[i].apellido + "</br>" + "<strong> edad: </strong>" +
            teamMates[i].edad + "</br>"

        html += "<strong> hobbies : </strong>" + "<ul>"; // porque necesito crear un  ul q me meta los li

        for (var j = 0; j < teamMates[i].hobbies.length; j++) { //como hobbies es un array de varias cosas, necesito recorrerlo para buscar el hobbie
            html += "<li>" + teamMates[i].hobbies[j] + "</li>";
        }
        html += "</ul></section><br/>";
    }
    contenedor.innerHTML = html;

}


//El body puede  utilizar una funcion q se llama onload y esto lo que hace es que cuando se carga la pagina, se puede llamar una funcion