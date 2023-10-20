class Base {
    constructor(nombre,tiempo){
        this.siguiente = null
        this.anterior = null
        this.nombre = nombre
        this.tiempo = tiempo
    }
}
class Ruta {
    constructor(){
        this.primero = null
    }
    agregar(nuevo){
        if (this.primero==null){
          this.primero=nuevo;
          nuevo.siguiente=nuevo;
          nuevo.anterior=nuevo;
        } else {
          nuevo.siguiente=this.primero;
          nuevo.anterior=this.primero.anterior;
          this.primero.anterior.siguiente=nuevo;
          this.primero.anterior=nuevo;
        }
    }
    buscar(nombre) {
        let aux = this.primero;
        if (this.primero === null) {
            return null; 
        }
        do {
            if (aux.nombre === nombre) {
                return aux; 
            }
            aux = aux.siguiente;
        } while (aux !== this.primero); 
        return null; 
    }
    extraer(dato) {
        if (this.primero === null) {
            return null; 
        }
    
        let extraer = this.buscar(dato);
    
        if (extraer === null) {
            return null; 
        }
        if (extraer.siguiente !== this.primero) {
            extraer.anterior.siguiente = extraer.siguiente;
            extraer.siguiente.anterior = extraer.anterior;
        } else {
            extraer.anterior.siguiente = this.primero;
            this.primero.anterior = extraer.anterior;
            if (extraer === this.primero) {
                this.primero = null; 
            } else {
                this.primero = extraer.siguiente;
            }
        }
        extraer.anterior = null;
        extraer.siguiente = null;
        return extraer;
    }
    listar(){
        if (this.primero==null)
          return "";
        else
          return this._recListar(this.primero);
    }
    _recListar(nodo){
        if (nodo.siguiente==this.primero)
          return nodo.nombre;
        else
          return nodo.nombre + ' ' + this._recListar(nodo.siguiente);
    }
    listarInverso(){
        if (this.primero==null)
          return "";
        else
          return this._recListarInverso(this.primero);
    }
    _recListarInverso(nodo){
        if (nodo.siguiente==this.primero)
          return nodo.nombre;
        else
          return this._recListarInverso(nodo.siguiente) + ' ' + nodo.nombre;
    }
    agregarInicio(nuevo){
        if (this.primero==null){
            this.primero=nuevo;
            nuevo.siguiente=nuevo;
            nuevo.anterior=nuevo;
          } else {
            let aux=this.primero
            while(aux.siguiente!=this.primero)
                aux=aux.siguiente

            this.primero.anterior=nuevo;
            nuevo.siguiente=this.primero;
            aux.siguiente=nuevo;
            nuevo.anterior=aux;
            this.primero=nuevo;
          }
    }
    creaRuta(){

    }
}
// APLICACIóN

let listaCir = new Ruta
let nuevo = new Base("base1", 40)
listaCir.agregar(nuevo)
nuevo = new Base("base2", 30)
listaCir.agregar(nuevo)
nuevo = new Base("base3", 50)
listaCir.agregar(nuevo)

nuevo=new Base("baseNuevo",35)
listaCir.agregarInicio(nuevo)

console.log(listaCir.listar())
console.log(listaCir.listarInverso())

listaCir.buscar("base3")
