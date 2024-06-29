import { Message } from "./Messages";
import db from "./dbmessages"
type Month = (dia:number) => Message
const Enero:Month = (dia) => {
    const enero = db.enero
    if(dia < 6) return enero[0]
    return enero[1]
}
const Febrero:Month = (dia) => {
    const febrero = db.febrero
    if(dia <= 16) return febrero[0]
    return febrero[1]
}
const Marzo : Month = (dia) => {
    const marzo = db.marzo
    if(dia <= 17) return marzo[0]
    if(dia <= 20) return marzo[1]
    return marzo[2]
}
const Abril: Month = (dia) => {
    const abril = db.abril
    if(dia > 10 && dia <= 23) return abril[0]
    if(dia > 23 && dia <= 30) return abril[1]
    return abril[2]
}
const Mayo: Month = (dia) => {
    const mayo = db.mayo
    if(dia <= 9) return mayo[0]
    if(dia <= 23) return mayo[1]
    return mayo[2]
}
const Junio: Month = (dia) => {
    const junio = db.junio
    if(dia <= 10) return junio[0]
    if(dia >= 24 && dia <= 30) return junio[1]
    return junio[2]
}
const Julio: Month= (dia) =>{
    const julio = db.julio
    if(dia <=15) return julio[0]
    return julio[1]
}
const Agosto: Month= (dia) =>{
    const agosto = db.agosto
    if(dia <=13) return agosto[0]
    return agosto[1]
}
const Septiembre: Month= (dia) =>{
    const septiembre = db.septiembre
    if(dia >=13 && dia <=19) return septiembre[0]
    if(dia < 13) return septiembre[1]
    if(dia > 19 && dia <= 26) return septiembre[2]
    return septiembre[3]
}
const Octubre: Month = (dia) => {
    const octubre = db.octubre
    if(dia <= 10) return octubre[0]
    if(dia <= 20) return octubre[1]
    return octubre[2]
}
const Noviembre: Month = (dia) => {
    const noviembre = db.noviembre
    if(dia <= 20) return noviembre[0]
    return noviembre[1]
}
const Diciembre : Month = (dia) => {
    const diciembre = db.diciembre
    if(dia  <= 12) return diciembre[0]
    if(dia <= 27) return diciembre[1]
    return diciembre[2]
}
export default [Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre]