<script lang="ts">
    import { page } from "$app/stores"
    export let data

	let { supabase, session } = data

  </script>
  
  {#if session?.user}
  <h1>Protected page(Editing )</h1>

  <p>
    This is a protected content. You should be able to add,delete or modify a project details
    signed in.
  </p>

  {:else}
  <h1>Access Denied</h1>
  <p>
    <a href="/auth">
      You must be signed in to view this page
    </a>
  </p>
  {/if}