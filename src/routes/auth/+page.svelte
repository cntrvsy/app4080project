<script lang="ts">
// @ts-nocheck
import { goto } from '$app/navigation';

import SuperForm from '$lib/components/Form.svelte';
import TextField from '$lib/components/TextField.svelte';
import { fly,fade } from 'svelte/transition';
import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';

const toastStore = getToastStore();

export const showToast = (message:string) => {
    const t:ToastSettings = {
        message: message,
    }
    toastStore.trigger(t)
}

  export let data

  let { supabase } = data
  $: ({ supabase } = data)


  let email
  let password

  // simple implementations for debugging
  
  // const handleSignUp = async () => {
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   })
  // }

  // const handleSignIn = async () => {
  //   await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   })
  // }

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut()
  // }

 
  let componentState = 'SignIn';
  // tiny state machine
  const componentStates = {
    SignUp: 'SignUp',
    SignIn: 'SignIn',
  }
  // handles the switching between the two forms 
  function toggleSign_State(state:string) {
    componentState = state;
    console.log("changed to")
    console.log(componentState)
  }

  function loadIn_page(){
    setTimeout(
      showToast("Welcome"),
      goto("/editor")
    ,3000)
  }
  function createAccount(){
    setTimeout(
      showToast("Check Your Email For Confirmation then Log in")
      ,3000)
  }

  </script>
  
  <!-- <form on:submit="{handleSignUp}">
    <input name="email" bind:value="{email}" />
    <input type="password" name="password" bind:value="{password}" />
    <button>Sign up</button>
  </form> -->
  
  <!-- <button on:click="{handleSignIn}" >Sign in</button>
  <button on:click="{handleSignOut}">Sign out</button>
  <br>  -->
  <!-- <button class="btn variant-filled-secondary" on:click={toggleSign_State('SignIn')}>toggle</button> -->
  <div class="mx-auto max-w-screen-2xl">
    <div class="flex item-center justify-center h-screen p-10">

      <!-- Grid for smooth transition -->
      <div class="transition-container z-20">
        {#if componentState === componentStates.SignIn}
        <div 
          in:fly={{ x: 250, duration: 700, delay:500 }} 
          out:fade={{x: -250, duration:400}}>

            <!-- Sign In: super form -->
            <section>
              <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

                <!-- CTA portion -->
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <h1 class="title-font text-5xl italic gradient-heading">Welcome back to the Ultimate Portfolio!!</h1>
                  <p class="leading-relaxed text-lg mt-4">Your journey with us was just the beginning. To continue enjoying the boundless benefits of our platform, we invite you to sign in once again.</p>
                  <br/>

                  <!-- toggle to Sign Up -->
                  <button class="btn variant-ghost-secondary" on:click={() => toggleSign_State("SignUp")}> don't have an account? </button>
                </div>
                  <div class="side-line lg:w-2/6 md:w-1/2 0 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
                    <!-- super form Sign In -->
                    <div class=" card card-hover p-4 ">
                      <SuperForm
                        action = "?/signIn"
                        data= {data?.signIn_Val}
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
                          <TextField type="text" {form} field="email" label="E-Mail" custom_placeholder="name@text.com"></TextField>
                          <!-- for password -->
                          <TextField type="password" {form} field="password" label="Password"></TextField>
        
                          <div class= "flex items-center justify-center py-4">
                            <button type="submit" class="btn variant-filled-primary px-8" on:submit={()=> goto("/editor")}>Sign In</button>
                          </div>
                      </SuperForm>
                      <a href="/auth/reset" class="text-xs mt-3">Click here if you forgot your password</a>
                    </div>
                  </div>
              </div>
            </section>
          </div>
        {:else}
          <div 
            in:fly={{ x: 250, duration:700, delay:500 }}
            out:fade={{x:-250, duration:400}}>
            <!-- Sign UP: super form -->
            <section>
              <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

                <!-- CTA portion -->
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                  <h1 class="title-font text-5xl italic gradient-heading">Welcome to the Ultimate GITHUB Portfolio!!</h1>
                  <p class="leading-relaxed text-lg mt-4">Please establish an account with us in order to take advantage of our platform's features. The journey you took with us was only the start. </p>
                  <br/>

                  <!-- toggle to Sign in -->
                  <button class="btn variant-ghost-secondary" on:click={() => toggleSign_State("SignIn")}>Already have an account? </button>
                </div>
                  <div class="side-line lg:w-2/6 md:w-1/2 0 flex flex-col md:ml-auto w-full mt-10 md:mt-0 ">
                    <!-- super form Sign Up -->
                    <div class=" card card-hover p-4 ">
                      <SuperForm
                        action = "?/signUp"
                        data= {data?.signUp_Val}
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
                          <TextField type="text" {form} field="email" label="E-Mail" custom_placeholder="name@text.com"></TextField>
                          <!-- for password -->
                          <TextField type="password" {form} field="password" label="Password"></TextField>
        
                          <div class= "flex items-center justify-center py-4">
                            <button type="submit" class="btn variant-filled-primary px-8" on:click={()=>createAccount()}>Sign Up</button>
                          </div>
                      </SuperForm>
                      <a href="/auth/reset" class="text-xs mt-3">Click here if you forgot your password</a>
                    </div>
                  </div>
              </div>
            </section>
          </div>
        {/if}
      </div> 
    </div>


  </div>
  


  <style>
    .transition-container {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }

    .transition-container > * {
      grid-row: 1;
      grid-column: 1;
    }
  </style>

