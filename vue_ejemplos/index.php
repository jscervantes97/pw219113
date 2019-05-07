<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Vue ejemplos</title>
</head>
<body>
	
	<div id="app">
		<h1>{{ titulo }}</h1>
		<ul>
			<li v-for="fruta of frutas">{{ fruta }}</li>
		</ul>
		<ul>
			<li v-for="fruta of frutas2">{{ fruta.nombre + " - " + fruta.cantidad }}
				<span v-if="fruta.cantidad == 0"> no hay en almacen</span>
			</li>
		</ul>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script src="js/primervue.js"></script>
</body>
</html>