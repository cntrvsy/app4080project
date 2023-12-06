<script lang="ts">
    //@ts-nocheck
    import { getToastStore } from '@skeletonlabs/skeleton';
    //import { redirect } from '@sveltejs/kit';
    
    const toastStore = getToastStore();

    import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte'
    import { superForm } from 'sveltekit-superforms/client'

    //export let direction:string;

    export let data
    export let dataType
    export let invalidateAll //set to false to keep form data using multiple forms on a page.

    export const _form = superForm(data, {
        dataType: dataType,
        invalidateAll: invalidateAll,
        
        onError({ result }) {
            $message = {
                text: result?.error?.message,
                status: 500
            }
            const t: ToastSettings = {
                    message: 'Something went wrong'
                };
                toastStore.trigger(t)

        },
        onUpdated({ form }) {
            if (form.valid) {
                // Successful post! Do some more client-side stuff.
                const t: ToastSettings = {
                    message: 'Communicating with Server...'
                };
                toastStore.trigger(t)
                
                // redirect to what was given.
                
            }
        }
    })

    const {form, message, tainted, delayed, errors, allErrors, enhance } = _form
</script>

<form method="POST" use:enhance {...$$restProps}>
    <slot 
        form = {_form}
        message = {$message}
        errors = {$errors}
        allErrors = {$allErrors}
        delayed = {$delayed}
    ></slot>
</form>

<!-- uncomment for local development use only. -->
<!-- <SuperDebug data={$form}></SuperDebug> -->