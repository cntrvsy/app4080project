import { SignInSchema, SignUpSchema } from '$lib/schemas.js';
import { redirect } from '@sveltejs/kit'
import { fail, error } from '@sveltejs/kit';
import { AuthApiError } from '@supabase/supabase-js';
import { superValidate, message } from 'sveltekit-superforms/server';

export const load = async ({ url, locals: { getSession} }: {url:any; locals:any}) => {
  const session = await getSession()
  

  // if the user is already logged in return them to the home page page
  if (session) {
    throw redirect(303, '/home')
  }

  return { url: url.origin }
}

export const actions = {
  signIn: async ({ request, url, locals: { supabase} }) => {
    const signIn_Form = await superValidate(request, SignInSchema);

    console.log('Sign In', signIn_Form);
    // error checking for the form itself
    if(!signIn_Form.valid) {

      return fail(400, {message:'Invalid Form Submission',errors: signIn_Form.errors,signIn_Form});

    } else {
        const { email, password } = signIn_Form.data;

        // sending it to supabase
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        console.log("supabase run")

        if(error){
          //if supabase returns error
          if (error instanceof AuthApiError && error.status === 400) {
            return message(signIn_Form,{text: 'Invalid Credentials, Try again.', status: 401});

          }
          return fail(500, { message: 'Server error. Try again later.'})
        }

        // Successful sign-In, update the store and dispatch custom event.
        throw redirect(303, '/editor')
      //return message(signIn_Form, {text: 'benin posted, refresh the page'});
    }
  },
  signUp: async ({ request, url, locals: { supabase} }) => {
    const signUp_Form = await superValidate(request, SignUpSchema);

    console.log('Sign Up', signUp_Form);
    // error checking for the form itself
    if(!signUp_Form.valid) {

      return fail(400, {message:'Invalid Form Submission',errors: signUp_Form.errors,signUp_Form});

    } else {
        const { email, password } = signUp_Form.data;

        // sending it to supabase
        const { error } = await supabase.auth.signUp({
          email,
          password
        })
        console.log("supabase run")

        if(error){
          //if supabase returns error
          if (error instanceof AuthApiError && error.status === 400) {
            return message(signUp_Form,{text: 'Something went wrong, try again', status: 401});

          }
          return fail(500, { message: 'Server error. Try again later.'})
        }

        // Successful sign-In, update the store and dispatch custom event.
      return message(signUp_Form,{text: 'Check your Email for Confirmation.'});
    }
  }
}
