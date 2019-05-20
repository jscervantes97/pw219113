const app = new Vue({
	el: '#app',
	data: {
		saludo : 'Hola Vue'
	},
	beforeCreate(){
		console.log("antes de crear el objeto Vue");
	},
	created(){
		console.log("El Objeto Vue Fue Creado");
	},
	beforeMount(){
		console.log('El DOM no se ah cargado');
	},
	mounted(){
		console.log("la pagina DOM ah sido cargada");
	},
	beforeUpdate(){
		console.log("Antes de actualizar cualquier elemento de la pagina");
	},
	updated(){
		console.log("La pagina ah sido actualizada");
	},
	beforeDestroy(){
		console.log('Antes de destruir el objeto');
	},
	destroyed(){
		console.log('El objeto Vue ha sido destruido');
	},
	methods:{
		destruir(){
			this.$destroy();
		}
	}
})