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
  
  function isHTMLBalanced(html) {
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

  const html8 = "<html><head><title>Prueba</title></head></html>";
console.log(isHTMLBalanced(html8)); // true

const html7 = "<html><head><title>Prueba</title></head><body><p>Esto es una prueba</body></html>";
console.log(isHTMLBalanced(html7)); // false

const html6 = "<html><head><title>Prueba</title></head><body><p>Esto es una prueba</p></body>";
console.log(isHTMLBalanced(html6)); // false

const html5 = "<html><head><a><title>Prueba</title></head></a><body><p>Esto es una prueba</p></body>";
console.log(isHTMLBalanced(html5)); // true

const html4 = "<html><head><a><title>Prueba</title></head></a><body><p>Esto es una prueba</p></body>";
console.log(isHTMLBalanced(html4)); // false

//El tipo de complejidad (On)