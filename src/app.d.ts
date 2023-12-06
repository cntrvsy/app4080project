// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

declare namespace App {
	 interface Locals {
		supabase : SupabaseClient<Database>
		getSession(): Promise<Session | null>
	 }
	  interface PageData {
		session: Session | null;
		flash?: {type: 'success' | 'error'; message: string};
	 }
	// interface Error {}
	// interface Platform {}
}
