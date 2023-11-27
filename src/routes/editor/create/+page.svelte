<script lang="ts">
	import crud_absent  from '$lib/assets/crud_absent.svg';
    import insert from '$lib/assets/insert.svg';
    // we are able to access session and supabase from data
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
    
    const toastStore = getToastStore();
    
    export const showToast = (message:string) => {
        const t:ToastSettings = {
            message: message,
        }
        toastStore.trigger(t)
    }
    
    export let data;
    let { supabase } = data
    
    let user_id = data.session?.user.id;
    let name:string;
    let description:string;
    let technology:string;
    let link:string;
    
    const insertProject = async() => {
       try {
        await supabase.from('projectsGithub').insert([
            {user_id: user_id,
            name:name,
            description:description,
            technologies:technology,
            link:link
            }
        ])
        showToast("Project added to user.");
       } catch (error) {
        console.log(error)
        showToast("Something went wrong.")
       }
    }
    console.log(data.session?.user)
    
    
    
    </script>
    
    {#if data.session}
    <section>
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="{insert}">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Hey, {data.session.user.email}</h1>
            <p class="leading-relaxed mb-8">
                Add a project to your portfolio here.
            </p>
            <div class="flex justify-center">
                <div class="card p-4 w-full text-token space-y-4">
                    <form on:submit={()=>insertProject()}>
                        <label class="label">
                            <span>Project Name</span>
                            <input name="name" bind:value="{name}" class={"input"}/>
                        </label>
                        <label class="label">
                            <span>Project Description</span>
                            <input name="description" bind:value="{description}" class={"input"}/>
                        </label>
                        <label class="label">
                            <span>Project Technologies</span>
                            <input name="technology" bind:value="{technology}" class={"input"}/>
                        </label>
                        <label class="label py-2">
                            <span>Project Link</span>
                            <input name="link" bind:value="{link}" class={"input"}/>
                        </label>
                        <button type="submit" class="btn variant-filled-primary">Create</button>
                    </form>
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
             Whoops !
            </h1>
            <p class="mb-8 leading-relaxed">
              Something Wrong must have happened.</p>
          </div>
        </div>
      </section>
    {/if}
    