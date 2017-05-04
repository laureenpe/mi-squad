function MiembroSquad(nombre, apellido, edad, hobbies) { //constructor creado con las propiedades solicitadas
    this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.hobbies = hobbies
}
//Creo una instancia por cada miembro de mi MiembroSquad
//const es como una variable utilizada en el nuevo ecmascript 6 que se usa cuando el valor siempre es el mismo, no cambia 
const laura = new MiembroSquad("Laura", "Peláez", "undefined", "cinéfila")
const orieta = new MiembroSquad("Orieta", "Toro", "27", "Leer y dormir")
const constanza = new MiembroSquad("Constanza", "Pecori", "26", "tejer comer y dormir ")
const rangi = new MiembroSquad("Rangi", "Becerra", "32", "viajar")
const caterina = new MiembroSquad("Caterina", "Da Silva", "26", " juegos online")
const rosa = new MiembroSquad("Rosa", "Díaz", "32", "Pensar en la inmortalidad del cangrejo")
const genesis = new MiembroSquad("Genesis", "Narváez", "27", "pasear en bici.")

console.log(laura.nombre);