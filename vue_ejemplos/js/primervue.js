const app = new Vue({
	el: '#app',
	data: {
		titulo: ' Hola Mundo Pero Con Vue',
		frutas: ['Manzaa','Uva','Peras','Fresas'],
		frutas2: [
			{nombre:'Manzana',cantidad: 11},
			{nombre:'Uva',cantidad: 0},
			{nombre:'Peras',cantidad: 80},
			{nombre:'Fresas',cantidad: 110},
			{nombre:'Papaya',cantidad: 10},
		],
		nuevaFruta: ''
	},
	methods:{
		agregarFruta(){
			//console.log("Diste Click");
			if(this.nuevaFruta == ""){
				alert("Faltan Campos por validar");
				return ;
			}
			this.frutas.push(this.nuevaFruta);
			this.frutas2.push({
				nombre: this.nuevaFruta ,
				cantidad : 0
			});
			this.nuevaFruta = '';
		}
	},
	computed:{
		sumarFrutas(){
			this.total = 0 ;
			for(fruta of this.frutas2){
				this.total += fruta.cantidad;
			}
			return this.total; 
		}
	}
});