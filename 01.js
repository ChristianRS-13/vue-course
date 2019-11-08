const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 10},
            {nombre: 'Manzana', cantidad: 8},
            {nombre: 'Platano', cantidad: 1},
            {nombre: 'Uvas', cantidad: 0}
        ],
        nuevaFruta: ''
    },
    methods: {
      agregarFruta (){
        this.frutas.push({
            nombre: this.nuevaFruta, cantidad: 0
        });

        this.nuevaFruta=''
      },
      otroMetodo (){

      }  
    }, 
})