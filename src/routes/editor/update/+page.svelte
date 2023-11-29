<script lang="ts">
    //@ts-nocheck
	import crud_absent  from '$lib/assets/crud_absent.svg';
    import upd from '$lib/assets/upd.svg';
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

    let db_projects = [];
    
    export let data;
    let { supabase } = data
    
    let user_id = data.session?.user.id;
    let id;
    let name:string;
    let description:string;
    let technology:string;
    let link:string;

    console.log(user_id);

    const updateProject = async() => {
        console.log(id,"updated project id")
       try {
        await supabase
        .from('projectsGithub')
        .update({
          name: name,
          description: description,
          technologies: technology,
          link: link
        })
        .eq('id', id)
        .select();

        showToast("Project Updated.")
       } catch (error) {
        console.log(error)
        showToast("Something went wrong.")
       }
    }


    onMount(async () => {
        try {
            // gets all the projects tied to the session.user id
        let db = await supabase.from('projectsGithub').select('*').eq('user_id', user_id)
        
        // removes the indexes from data
        db_projects = db.data;

        console.log("db_projects")    
        console.log(db_projects)
    
       } catch (error) {
        console.log(error)
       
       }
    })

    // sets the currently selected id to selected project
    function setId(given_id:number){
        id = given_id;
        showToast("Project Selected.");
        console.log(id, "selected project")
    }
    
    </script>
    
    {#if data.session}
    <section>
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="{upd}">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Hey, {data.session.user.email}</h1>
            <p class="leading-relaxed mb-8">
                Update a project from your portfolio here, select the project.
            </p>
            <div class="flex justify-center">
                <!-- update section -->
                <div class="card p-4 w-full text-token space-y-4">
                    <form on:submit={()=>updateProject()}>
                        <label class="label">
                            <span>Project Name</span>
                            <input name="name" bind:value="{name}" class="input pl-4"/>
                        </label>
                        <label class="label">
                            <span>Project Description</span>
                            <!-- <input name="description" bind:value="{description}" class="input pl-4"/> -->
                            <textarea name="description" bind:value="{description}" rows="3" class="textarea pl-4"/>
                        </label>
                        <label class="label">
                            <span>Project Technologies</span>
                            <input name="technology" bind:value="{technology}" class={"input pl-4"}/>
                        </label>
                        <label class="label py-2">
                            <span>Project Link</span>
                            <input name="link" bind:value="{link}" class="input pl-4"/>
                        </label>
                        <button type="submit" class="btn variant-filled-primary">Update</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
    </section>
     <!-- project selector -->
     <section>
        <div class="container px-5 py-8 mx-auto">
            <div class="flex justify-center">
                <!-- <button class="btn variant-filled-secondary" on:click={()=>retrieveProjects()}>get projects</button> -->
            </div>
            <!-- projects -->
            {#if db_projects.length > 0}
            {#each db_projects as {id, ...item}}
            <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font">{item.name}</span>
                </div>
                <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium title-font mb-2">
                        {item.technologies}
                    </h2>
                    <p class="leading-relaxed">
                        {item.description} 
                        <br>
                    </p>
                    <br>
                    <a href="{item.link}" class="btn variant-filled-primary"> github link</a>
                    <button on:click={() => setId(id)} class="btn variant-filled-primary" >Select</button>
                </div>
            </div>
            {/each}
            {:else}
            <p>Nothing here yet.</p>
            {/if}
        </div>
     </section>
    
    {:else}
    <section>
        <div class="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
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
    