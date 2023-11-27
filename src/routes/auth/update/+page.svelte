<script lang="ts">
	import { goto } from '$app/navigation';

    // we are able to access session and supabase from data
    import { getToastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    
    const toastStore = getToastStore();
    
    export const showToast = (message:string) => {
        const t:ToastSettings = {
            message: message,
        }
        toastStore.trigger(t)
    }
    
    export let data;
    let { supabase } = data
    
    let email:string;
    let password:string;
    const customMessage:string = "Password was updated" 
    
    const handleUpdateUser = async() => {
       try {
        await supabase.auth.updateUser({
            email:email,
            password:password
        })        
        showToast(customMessage);

       } catch (error) {
        console.log(error)
        showToast("Something went wrong")
       }
        
       
    }
    
    
    </script>
    
    <section>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-2 md:w-2/5">
                Enter your Email here:
            </h2>
            <div class="md:w-3/5 md:pl-6">
                <form on:submit="{handleUpdateUser}">
                    <input name="email" bind:value="{email}" class={"input pl-2 box-content h-8 w-80"}/>
                    <input type="password" name="password" bind:value="{password}" />
                    <button type="submit" class="btn variant-filled-primary" on:click={()=> goto('/home')}>Update</button>
                </form>
            </div>
        </div> 
    </section>