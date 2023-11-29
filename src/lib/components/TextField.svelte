<script> 
//svelte super forms implementation for modular text field component

//@ts-nocheck
    import { formFieldProxy } from 'sveltekit-superforms/client';
    
    let _class = ""
 
    export {_class as class}
    export let label = undefined
    export let custom_placeholder = ""
    export let field
    export let form

    const { value, errors, constraints } = formFieldProxy(form, field);
</script>

{#if label !== undefined}
    <label class="label text-lg" for={field}>{label}</label>
{/if}
<div class="control space-y-4">
    <input 
    class={"input pl-4"+ _class} 
        name={field} 
        aria-invalid={$errors ? 'true' : undefined}  
        placeholder={custom_placeholder}
        bind:value={$value}  
        {...$constraints}  
        {...$$restProps}
    />    
</div>
{#if $errors}
    <p class="text-sm text-error-500">{$errors}</p>
{/if}
<br>

<style>
    /* input {
        background-color: #e7e7e7;
    } */

    /* input:not(:placeholder-shown):invalid {
        box-shadow: inset 0px 0px 3px 1px #f00;
    } */
</style>

