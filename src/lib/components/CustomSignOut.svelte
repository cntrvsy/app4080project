<script>
//@ts-nocheck
import { goto } from '$app/navigation';

  export let supabase;

  async function handleSignOut() {
    try {
        await supabase.auth.signOut();
        goto('.', {replaceState:true, noscroll: true});

    } catch(error) {
        console.error("Error during signing out home page", error.message)
    }
  }
</script>

<button on:click={handleSignOut} class="variant-outline-primary">Sign Out</button>