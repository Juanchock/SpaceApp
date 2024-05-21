
function uno (dos) {
    console.log("uno")
    setTimeout(dos,3000)
   
}
function dos () {
    console.log("dos")
  
}

setTimeout(()=> uno(dos),5000)


const nombre = function (){
    console.log("nombre")
}

nombre()

const persona = () => console.log("Juanchock")

persona();