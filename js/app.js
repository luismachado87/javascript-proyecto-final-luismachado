
//const parrafo = document.querySelector("p");
//constconst boton = document.querySelector("button");

//constlet contador = 0;

//constboton.addEventListener("click", () => {
//const    console.log("click");
//const    contador++;
//const    parrafo.textContent = contador; 
//const});

//condiones para prestamo

//let prestamo;

//if (edad>=21){
//    prestamo = 'proceda';
//}   else {
//    prestamo = 'no proceda';
//}



// operador ternario

//condicion para acceder a prestamo ? expre si es true : expre si es false
let edad = 25;

let prestamo = edad >= 21 ? 'proceda' : 'no proceda';



//

let antiguedad = 5;

let solicitud = antiguedad >= 5 ? 'proceda' : 'no proceda';



//tipos de prestamos


(async () => {

    const { value: personal } = await Swal.fire({
      title: 'El motivo de tu prestamo',
      input: 'select',
      inputOptions: {
        'motivo': {
          arreglos: 'arreglos en la casa',
          viajes: 'vacaciones',
          deudas: 'pago de deudas',
          auto: 'cambiar el auto'
        },
      },
      inputPlaceholder: 'Selecciona un motivo',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve()
          } else {
            resolve('You need to select a motive :)')
          }
        })
      }
    })
    
    if (personal) {
      Swal.fire(`You selected: ${personal}`)
    }
    
    })()