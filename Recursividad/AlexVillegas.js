class Nodo {
    constructor(dato) {
      this.dato = dato;
      this.izquierdo = null;
      this.derecho = null;
    }
  }
  
  class ArbolBinario {
    constructor() {
      this.raiz = null;
    }
  
    // Algoritmo Pre-Orden
    preOrden(nodo) {
      if (nodo !== null) {
        console.log(nodo.dato);
        this.preOrden(nodo.izquierdo);
        this.preOrden(nodo.derecho);
      }
    }
  
    // Algoritmo In-Orden
    inOrden(nodo) {
      if (nodo !== null) {
        this.inOrden(nodo.izquierdo);
        console.log(nodo.dato);
        this.inOrden(nodo.derecho);
      }
    }
  
    // Algoritmo Post-Orden
    postOrden(nodo) {
      if (nodo !== null) {
        this.postOrden(nodo.izquierdo);
        this.postOrden(nodo.derecho);
        console.log(nodo.dato);
      }
    }
  }
  
  // Ejemplo de uso
  const arbol = new ArbolBinario();
  arbol.raiz = new Nodo(1);
  arbol.raiz.izquierdo = new Nodo(2);
  arbol.raiz.derecho = new Nodo(3);
  arbol.raiz.izquierdo.izquierdo = new Nodo(4);
  arbol.raiz.izquierdo.derecho = new Nodo(5);
  
  console.log("Pre-Orden:");
  arbol.preOrden(arbol.raiz);
  
//   console.log("In-Orden:");
//   arbol.inOrden(arbol.raiz);
  
//   console.log("Post-Orden:");
//   arbol.postOrden(arbol.raiz);