<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
	
let pfp:string = "https://avatars.githubusercontent.com/u/85725132?u=3684d798309c29d4f339936ce3f547cf5db94125&v=4"
</script>


<section class="text-gray-400 bg-gray-800 rounded-lg">
    <div class="container px-5 py-8 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <Avatar src={pfp}
                width="w-16"
                 rounded="rounded-3xl" />
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-white text-lg">
                Kyle Sting
            </h2>
              <div class="w-12 h-1 bg-current rounded mt-2 mb-4"></div>
              <p class="text-base text-gray-400">
                Software Engineer
              </p>         
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p class="leading-relaxed text-lg mb-4">
                Hello, my name is kyle sting.  asoftware engineer based in Nairobi Kenya. my hobbies are swiming and dancing. my lanugage of choice is C++ and Rust.
                Currently use React Native.    
            </p>
            <a class=" btn variant-filled-primary" href="https://github.com/kyle-304">
                My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>   