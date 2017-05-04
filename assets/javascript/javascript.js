function MiembroSquad(nombre, apellido, edad, hobbies) { //constructor creado con las propiedades solicitadas
    this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.hobbies = hobbies
}
//Creo una instancia por cada miembro de mi MiembroSquad
//const es como una variable utilizada en el nuevo ecmascript 6 que se usa cuando el valor siempre es el mismo, no cambia 
const Laura = new MiembroSquad("Laura", "Peláez", "undefined", "cinéfila")
const Orieta = new MiembroSquad("Orieta", "Toro", "27", "Leer y dormir")
const Constanza = new MiembroSquad("Constanza", "Pecori", "26", "tejer comer y dormir ")
const Rangi = new MiembroSquad("Rangi", "Becerra", "32", "viajar")
const Caterina = new MiembroSquad("Caterina", "Da Silva", "26", " juegos online")
const Rosa = new MiembroSquad("Rosa", "Díaz", "32", "Pensar en la inmortalidad del cangrejo")
const Genesis = new MiembroSquad("Genesis", "Narváez", "27", "pasear en bici.")