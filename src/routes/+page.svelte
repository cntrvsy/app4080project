<script lang="ts">
// first page sveltekit renders ('/')

import hero_main from '$lib/assets/hero_main.svg'
import { goto } from '$app/navigation';
</script>



  <main>
	<section>
		<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
			<img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="{hero_main}">
			<div class="text-center lg:w-2/3 w-full">
				<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
					GITHUB PORTFOLIO
				</h1>
				<p class="leading-relaxed mb-8">
					Welcome to our Github Portfolio application showing our groups work.<br>
					<center>Benin Mukabanah (659821)</center> 
					<center>Kyle Sting (662366)</center>
					<center>Ken Kimiri (662541)</center>
				</p>
				<button class="btn variant-filled-primary" on:click={()=> goto('/home')}> Get Started</button>
			</div>
		</div>
	</section>	
  </main>
	