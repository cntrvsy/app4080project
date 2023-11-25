<script lang="ts">
//@ts-nocheck
import { goto } from '$app/navigation';
import { page } from '$app/stores';

import SuperForm from '$lib/components/Form.svelte';
import TextField from '$lib/components/TextField.svelte';
  
  //export let data: SuperValidated<SignInSchema>;
  export let our_action ='';
  export let data;
  export let our_formValidate;
  export let supabase;
  export let componentState;
  

  function toggleSignInState() {
    componentState = 'SignIn';
  }

  

  const handleSignIn = async () => {
  await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
}
      

    </script>
    
    <div>
        <!-- <button on:click={handleSignOut} class="variant-outline-primary">Sign Out</button> -->
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

          <!-- text portion -->
          <div class="lg:w-3/5 md:w-1/2 md:pr-16 ms:pr-0 lg:pr-0">
            <h2 class=" italic text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
              <span class="gradient-heading">
                Welcome back to the Design Tokens Revolution!
              </span>
            </h2>
            <p class="leading-relaxed mt-4 font-medium text-center lg:text-left lg:mt-0 lg:pr-0 lg:ml-4">
              Your journey with us was just the beginning. To continue enjoying the boundless benefits of our design token platform, we invite you to sign in once again.
            </p>
            <br>
            <button class="btn variant-ghost-secondary" on:click={toggleSignInState}> don't have an account? </button>
          </div>
          
          <!-- line portion -->
            <span class="divider-vertical h-40 hidden lg:block"></span>

          <!-- sign in portion -->
          <div class="side-line py-4">
            <div class="block card card-hover p-4">

              <!-- form -->
              <!-- <form method="POST" action={our_action}>
                <label class="label">
                  <span>Email</span>
                  <input class="input" type="text" placeholder="example@example.com" />


                  <span class="text-xs text-error-500">Email</span>

                </label>
                <label class="label">
                  <span>Password</span>
                  <input class="input" type="text" placeholder />
                </label>
                <div class= "flex items-center justify-center py-4">
                  <button class="btn variant-filled-primary px-8">Sign In</button>
                </div>
              </form> -->


              <!-- new form system  -->
              <SuperForm
                action = {our_action}
                data= {data?.our_formValidate}
                invalidateAll={false}
                let:form let:message
              >

                {#if message}
                  <div class= status
                    class:error={message.status >= 400}
                    class:success={!message.status || message.status < 300}
                  > 
                    {message.text}
                  </div>
                {/if}
                  <!-- for email -->
                  <TextField type="text" {form} field="email" label="E-Mail"></TextField>
                  <!-- for password -->
                  <TextField type="password" {form} field="password" label="Password"></TextField>

                  <div class= "flex items-center justify-center py-4">
                    <button type="submit" class="btn variant-filled-primary px-8">Sign In</button>
                  </div>

              </SuperForm>
            </div>
          </div>
        </div>
    </div>
   