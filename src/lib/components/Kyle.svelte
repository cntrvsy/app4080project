<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
      import { Dices, ScrollText, Hourglass, Contact } from "lucide-svelte";
      
  let pfp:string = "https://avatars.githubusercontent.com/u/85725132?v=4"
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
                <!-- Name -->
                <h2 class="font-medium title-font mt-4 text-white text-lg">
                  Kyle Sting
              </h2>
                <div class="w-12 h-1 bg-current rounded mt-2 mb-4"></div>
                <!-- job title -->
                <p class="text-base text-gray-400">
                  Front End Developer
                </p>         
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">
                  Hello, my name is Kyle Sting. a Front End Developer  based in Nairobi Kenya. 
                  I mainly play Fortnite during my free time. 
                  Currently learning the Go programming language.  
              </p>
              <!-- github link -->
              <a class=" btn variant-filled-primary" href="https://github.com/kyle-304">
                  My GitHub
              </a>
            </div>
          </div>
        </div>
        
        <!-- skills, education, work experience, contact information -->
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <!-- skills -->
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Dices strokeWidth={2} size={48}/>
                </div>
                <div class="flex-grow">
                  <h2 class=" text-lg title-font font-medium mb-3">Skills</h2>
                  <p class="leading-relaxed text-base">
                    knowledge-able in using Design Tokens, and intermediate level using Adobe XD/Figma. 
                  </p>
                </div>
              </div>
            </div>
            <!-- education -->
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <ScrollText strokeWidth={2} size={48}/>
                </div>
                <div class="flex-grow">
                  <h2 class=" text-lg title-font font-medium mb-3">Education</h2>
                  <p class="leading-relaxed text-base">
                    Bachelor of Science in Applied Computer Technology, concentration Software Engineering. 
                  </p>
                </div>
              </div>
            </div>
            <!-- work experience -->
            <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Hourglass strokeWidth={2} size={48} />
                </div>
                <div class="flex-grow">
                  <h2 class=" text-lg title-font font-medium mb-3">Work Experience</h2>
                  <p class="leading-relaxed text-base">
                    Interned at a local start up named KIOSK as an Associate Developer. 
                  </p>
                </div>
              </div>
            </div>
             <!-- contact information -->
             <div class="p-4 lg:w-1/2 md:w-full">
              <div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full flex-shrink-0">
                  <Contact strokeWidth={2} size={48}/>
                </div>
                <div class="flex-grow">
                  <h2 class=" text-lg title-font font-medium mb-3">Contact</h2>
                  <p class="leading-relaxed text-base">
                    you can reach on phone (0797797014) or on email (kyle@github.com) between the hour of 8am till 5pm. 
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
  
      </div>
    </section>   