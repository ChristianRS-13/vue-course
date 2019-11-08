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
        nuevaFruta: '',
        total: 0
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
    computed: {
      sumarFrutas(){
        this.total=0;
        for(fruta of this.frutas){
          this.total = this.total + fruta.cantidad;
        }
        return this.total;
      }

    }
})