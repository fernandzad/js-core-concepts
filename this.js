/**
 * Diferentes tipos de BINDING:
 * Lexical Binding (Arrow Functions)
 * New Binding (Invocacion de Objetos)
 * Explicit Binding (Invocacion Indirecta)
 * Implicit Binding (Invocacion de Metodo)
 * Default Binding (Invocacion Directa)
 */

// THIS
const harry = {
    nombre: 'Harry',
    saludar: function() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

harry.saludar(); // saludo

// 'Hola me llamo undefined' porque forma parte de otro contexto, de la variable 'saludar'
// despues de asignarse al objeto saludar
const saludar = harry.saludar;
saludar(); // undefined porque cambiamos el entorno lexico


/**
 * 1.----------DEFAULT BINDING----------
 * Binding por defecto: window, global o undefined en 'strict mode'
 */
function quienSoy() {
    console.log(`Hola, yo soy: `, this);
}
quienSoy(); // window, global o undeefined si 'strict mode' activo
// Hola, yo soy: Window
// Window porque es el objeto global (Navegador)
// Global (Node)
// undefined (modo estricto)


/**
 * 2.----------IMPLICIT BINDING----------
 * El binding al primer objeto a la izquierda que invoca el metodo
 */
const adrian = {
    nombre: 'Adrian',
    saludar: function() {
        console.log(`Hola me llamo ${this.nombre}`);
    },
    hermano: {
        nombre: 'Diego',
        saludar: function() {
            console.log(`Yo, el hermano, me llamo ${this.nombre}`);
        }
    }
}
adrian.saludar(); // saludo del objeto adrian
adrian.hermano.saludar(); // saludo del objeto hermano


/**
 * 3.----------EXPLICIT BINDING----------
 * Haciendo uso de call, apply o bind le decimos al metodo sobre que
 * context y objeto queremos que se ejecute
 */
const diego = {
    nombre: 'Diego',
    saludar: function (role) {
        console.log(`Hola me llamo ${this.nombre} y soy un ${role}`);
    }
}
const alma = {
    nombre: 'Alma'
}
// Call y Apply nos permiten llamar a una funcion permitiendo cambiar el contexto 'this' en la llamada
// Call y Apply llaman a la funcion en el momento que las declaramos
diego.saludar.call(alma, 'mama'); // call: this se convierte en alma
diego.saludar.apply(diego, ['hijo']); // apply: es basicamente lo mismo pero recibe los parametros como un array
// call y apply LLAMAN A LA FUNCION en el momento en el que se declaran

// Bind nos permite establecer el contexto 'this' 
// sin tener que llamar la funcion inmediatamente
const obj = {
    useSaludar: function(callback) {
        callback();
    }
}
obj.useSaludar(diego.saludar); // el valor se vuelve undefined porque se pierde el implicit binding
obj.useSaludar(diego.saludar.bind(diego, 'argumento1')); // Lo bindeamos y listo!


/**
 * ----------LEXICAL BINDING----------
 * Las arrow functions toman el contexto u objeto en el momento que fueron definidas,
 */
const daniel = {
    nombre: 'Daniel',
    twitter: '@dan_iel',
    saludar: function () {
        console.log(`Hola me llamo ${this.nombre}`);

        function sayTwitter() {
            console.log(`Mi twitter es ${this.twitter}`); //enlazamiento por defecto
        }
        sayTwitter(); //' Mi twitter es undefined'

        const sayTwitter2 = () => console.log(`Mi twitter es ${this.twitter}`); // enlazamiento lexico
        sayTwitter2();
    }
}
daniel.saludar();