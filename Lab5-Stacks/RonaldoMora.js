
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function isHTMLBalanced(html) { //complejidad O(n)
    const stack = new Stack();
  
    // Recorre cada carácter de la cadena HTML
    for (let i = 0; i < html.length; i++) {
      const char = html[i];
  
      // Si el carácter es una etiqueta de apertura, agrégala a la pila
      if (char === "<" && html[i + 1] !== "/") 
      {
        const endIndex = html.indexOf(">", i);
        const tag = html.substring(i, endIndex + 1);
        stack.push(tag);
        i = endIndex;
      }
      else if (char === "<" && html[i + 1] === "/") 
      {
        const endIndex = html.indexOf(">", i);
        const tag = html.substring(i, endIndex + 1);
  
        // Verifica si la etiqueta de cierre coincide con la etiqueta de apertura superior de la pila
        if (stack.isEmpty()) {
          return false;
        }
  
        const topTag = stack.pop();
        const topTagName = topTag.substring(1, topTag.length - 1);
        const tagToCheck = tag.substring(2, tag.length - 1);
        if (topTagName !== tagToCheck) {
          return false;
        }
  
        i = endIndex;
      }
      
    }
  
    // Verifica si todas las etiquetas se cerraron correctamente
    return stack.isEmpty();
  }

  const html1 = "<html><head><title>Prueba</title></head></html>";
  console.log(isHTMLBalanced(html1)); // true
  
  const html2 = "<html><head><title>Prueba</title></head><body><p>Esto es una prueba</body></html>";
  console.log(isHTMLBalanced(html2)); // false
  
  const html3 = "<html><head><title>Prueba</title></head><body><p>Esto es una prueba</p></body>";
  console.log(isHTMLBalanced(html3)); // false

console.log("/////////////////////////////////////////////////////////");


  const html4 = "<html><head><title>Test</title></head><body><h1>Hello world</h1></body></html>";
  console.log(isHTMLBalanced(html4)); //true
  
  const html5 = "<html><head><title>Test</title></head><body><h1>Hello world<h1></body></html>";
  console.log(isHTMLBalanced(html5)); //false

  const html6 = "<div><h1>Título</h1><p>Parrafo generico</p></div>";
console.log(isHTMLBalanced(html6)); // true

const html7 = "<div><h1>Título</h1><p>Parrafo generico<p><div>";
console.log(isHTMLBalanced(html7)); // false

const html8 = "<ul><li>Elemento 1</li><li>Elemento 2</li></ul>";
console.log(isHTMLBalanced(html8)); // true

const html9 = "<ul><li>Elemento 1</li><li>Elemento 2</li><ul>";
console.log(isHTMLBalanced(html9)); // false





  // Haslo tu mismo!,
  // investiga sobre otras etiquetas HTML y (abajo) has la prueba con 3 más, haz ambos casos 
  // 1. Etiquetas estén bien cerradas.
  // 2. Etiquetas mal cerradas.
  // 3. Escribe la complejidad del algoritmo isHTMLBalanced para el peor de los casos. 

//complejidad O(n)