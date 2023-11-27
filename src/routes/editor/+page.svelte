<script lang="ts">
	import { goto } from "$app/navigation";

  // images
  import crud_absent from "$lib/assets/crud_absent.svg"
  import crud_present from "$lib/assets/crud_present.svg"

    export let data

	let { supabase, session } = data

  </script>
  
  {#if session?.user}
  <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img class="object-cover object-center rounded" alt="hero" src="{crud_present}">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
         Welcome to the Editor !
        </h1>
        <p class="mb-8 leading-relaxed">
        Hey you, over here you can perform CRUD operations on your own Project Portfolios.  
        </p>
        <div class="flex justify-center">
          <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-4">
            <button class="btn variant-filled-secondary py-2 px-2" on:click={()=>goto('editor/create')}>Create</button>
            <button class="btn variant-filled-secondary py-2 px-2" on:click={()=>goto('editor/update')}>Update</button>
            <button class="btn variant-filled-secondary py-2 px-2" on:click={()=>goto('editor/delete')}>Delete</button>
          </div>
          
        </div>
      </div>
    </div>
  </section>

  {:else}
  <section>
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
        <img class="object-cover object-center rounded" alt="hero" src="{crud_absent}">
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
         Whoops ! You need to Sign In
        </h1>
        <p class="mb-8 leading-relaxed">
          Something Wrong must have happened, please click the button below to go to the authentication page.</p>
        <div class="flex justify-center">
          <button class="btn variant-outline-secondary" on:click={()=>goto('/auth')}>Sign In</button>
          
        </div>
      </div>
    </div>
  </section>
  {/if}