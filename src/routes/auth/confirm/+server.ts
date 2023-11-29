//@ts-nocheck

import { redirect } from '@sveltejs/kit';
import { userStore } from '$lib/stores/userStore.js';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const token_hash = url.searchParams.get('token_hash') as string;
	const type = url.searchParams.get('type') as string;
	const next = url.searchParams.get('next') ?? '/';

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ token_hash, type });
    if (!error) {
      userStore.set({SiteURL:'http://localhost:3000/', TokenHash: token_hash})
      throw redirect(303, `/${next.slice(1)}`);
    }
  }

  // return the user to an error page with some instructions
  throw redirect(303, '/auth/auth-code-error');
};