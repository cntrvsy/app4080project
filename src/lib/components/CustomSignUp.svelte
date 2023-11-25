<script>
//@ts-nocheck
export let supabase;

const handleSignUp = async () => {
      await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      })
    }
    export let componentState;
      function toggleSignUpState() {
        componentState = 'SignUp';
      }

</script>

<div>
    <!-- <button on:click={handleSignOut} class="variant-outline-primary">Sign Out</button> -->
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">

      <!-- text portion -->
      <div class="lg:w-3/5 md:w-1/2 md:pr-16 ms:pr-0 lg:pr-0">
        <h2 class=" italic text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
          <span class="gradient-heading">
            Unlock the Power of Design Tokens with Ease!
          </span>
        </h2>
        <p class="leading-relaxed mt-4 text-center lg:text-left lg:mt-0 lg:pr-0 lg:ml-4">
          Your journey with us was just the beginning. To continue enjoying the boundless benefits of our design token platform, we invite you to sign in once again.
        </p>
        <br>
        <button class="btn variant-ghost-secondary" on:click={toggleSignUpState}> Already have an account? </button>
      </div>
      
      <!-- line portion -->
        <span class="divider-vertical h-40 hidden lg:block"></span>

      <!-- sign in portion -->
      <div class="side-line py-4">
        <div class="block card card-hover p-4">

          <!-- form -->
          <form action="POST">
            <label class="label">
              <span>Email</span>
              <input class="input" type="text" placeholder="example@example.com" />

              <!-- error for email -->
              <span class="text-xs text-error-500">Email</span>

            </label>
            <label class="label">
              <span>Password</span>
              <input class="input" type="text" placeholder />
            </label>
            <div class= "flex items-center justify-center py-4">
              <button class="btn variant-filled-primary px-8">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>
