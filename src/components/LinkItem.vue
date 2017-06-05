<template>
	<div class="link-item">
		<a href="" v-for="item in items">
			{{item.name}} |
		</a>  
	</div>
</template>

<script>
	export default {
		name: 'link-item',
		props: ['items']

	}

// export default {
//   name: 'hello',
//   data () {
//     return {
//       msg: 'Welcome to Your Vue.js App'
//     }
//   }
// }
</script>
</script>