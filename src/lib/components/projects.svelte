<script lang="ts">
    import { Github } from 'lucide-svelte';

    let project_name:string;
    let project_description:string;
    let technologies_used:string;
    let project_link:string;
</script>

<section>
<div class="container px-5 py-24 mx-auto">
    <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font">{project_name}</span>
        </div>
        <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                {technologies_used}
            </h2>
            <p class="leading-relaxed">
                {project_description}
            </p>
            <a class=" inline-flex items-center mt-4" href="{project_link}">
                Click for github
                <Github strokeWidth={2} size={24}/>
            </a>
        </div>
    </div>
</div>
</section>


