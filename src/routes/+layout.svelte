<script>
	import "../app.css"
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>
<div>
	{#if data.session}
	  <p>User is logged in</p>
	{:else}
	  <p>User is not logged in</p>
	{/if}
  </div>
<slot />