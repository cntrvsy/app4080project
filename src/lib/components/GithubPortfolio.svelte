<script lang="ts">
    // handling the rendering of each github portfolio
    import { Mail, PieChart } from "lucide-svelte"

    export let name: string

    export let totalContributions: string = "0"
    export let totalCommitContributions: string = "0"
    export let totalIssueContributions: string = "0"
    export let totalPullRequestContributions: string = "0"
    export let totalPullRequestReviewContributions: string = "0"
    export let totalRepositoryContributions: string = "0"
    export let RepositoryName:string;
    export let commitMessage:string;

    </script>
    


<section>
        <div class="container px-5 py-8 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-base tracking-widest font-medium title-font mb-1">
                GITHUB SUMMARY
            </h2>
            <h1 class="sm:text-5xl text-4xl font-medium title-font">
                {name}
            </h1>
          </div>
          <!-- stats section -->
          <div class="flex flex-wrap -m-4">
            <!-- tag one -->
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-80 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <PieChart strokeWidth={2} size={24}/>
                  </div>
                  <h2 class="text-lg title-font font-medium">
                    Total Contributions (This Year)
                </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-center text-8xl"> {totalContributions} </p>
                </div>
              </div>
            </div>
            <!-- tag two -->
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-80 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <PieChart strokeWidth={2} size={24}/>
                    </div>
                    <h2 class="text-lg title-font font-medium">
                      Total Commit Contributions
                  </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-center text-8xl">{totalCommitContributions}</p>
                  </div>
                </div>
            </div>
            <!-- tag three -->
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-80 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <PieChart strokeWidth={2} size={24}/>
                    </div>
                    <h2 class="text-lg title-font font-medium">
                      Total Issue Contributions
                  </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-center text-8xl"> {totalIssueContributions} </p>
                  </div>
                </div>
            </div>
            <!-- tag four -->
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-80 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <PieChart strokeWidth={2} size={24}/>
                    </div>
                    <h2 class="text-lg title-font font-medium">
                      Total Pull Request Contributions
                  </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-center text-8xl"> {totalPullRequestContributions} </p>
                  </div>
                </div>
            </div>
            <!-- tag five -->
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-80 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <PieChart strokeWidth={2} size={24}/>
                    </div>
                    <h2 class="text-lg title-font font-medium">
                      Total Pull Request Review Contributions
                  </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-center text-8xl"> {totalPullRequestReviewContributions} </p>
                  </div>
                </div>
            </div>
            <!-- tag six -->
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-80 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <PieChart strokeWidth={2} size={24}/>
                    </div>
                    <h2 class="text-lg title-font font-medium">
                      Repository Contributions
                  </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-center text-8xl"> {totalRepositoryContributions} </p>
                  </div>
                </div>
            </div>
          </div>
          <!-- live github update -->
          <div class="container px-5 py-2 mx-auto">
            <hr class="!border-t-2 !border-double">
            <div class="grid place-items-center py-4">
              <!-- update -->
          <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex border-2 rounded-lg border-gray-400 p-8 sm:flex-row flex-col">
              <div class="flex-grow">
                <h2 class=" text-lg title-font font-medium mb-3">Latest github update: {RepositoryName}</h2>
                <p class="leading-relaxed text-base">
                  {commitMessage}. 
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
</section>
