const app = new Vue({

    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas:[],
        nuevaTarea: '',
    },
    methods:{
        agregarTarea: function(){
            // console.log('Diste click ', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas);
            this.nuevaTarea='';
        },
        editarTarea: function(index){
            // console.log("Editar: ", index);
            this.tareas[index].estado=true;
        }
    }
});
