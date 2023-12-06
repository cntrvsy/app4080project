<script lang="ts">
	import crud_absent  from '$lib/assets/crud_absent.svg';
    import insert from '$lib/assets/insert.svg';
    // we are able to access session and supabase from data
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
	import { string } from 'zod';
    
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
    let full_name:string;
    let job_title:string;
    let brief_introduction:string;
    let github_link:string;
    let skills: string;
    let education: string;
    let work_experience: string;
    let phone_number: string;
    let email: string;
    let github_username;
    let repository;
    
    const createPortfolio = async() => {
       try {
        await supabase.from('projectsGithub').insert([
            {user_id: user_id,
            
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
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="{insert}">
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">Hey, {data.session.user.email}</h1>
            <p class="leading-relaxed mb-8">
                Tell us about yourself and well create that portfolio for you!.
            </p>
            <div class="flex justify-center">
                <div class="card p-4 w-full text-token space-y-4">
                    
                </div>
            </div>
          </div>
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
    