<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { EventHandler } from 'svelte/elements';

	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ notes, supabase, user } = data);

	let handleSubmit: EventHandler<SubmitEvent, HTMLFormElement>;
	$: handleSubmit = async (evt) => {
		evt.preventDefault();
		if (!evt.target) return;

		const form = evt.target as HTMLFormElement;

		const note = (new FormData(form).get('note') ?? '') as string;
		if (!note) return;

		const { error } = await supabase.from('notes').insert({ note });
		if (error) console.error(error);

		invalidate('supabase:db:notes');
		form.reset();
	};
</script>
<body class="bg-white">
	<div class="border max-h-screen w-screen md:max-w-[1000px] mx-auto">
		<div class="content sm:flex">

			<div class="flex flex-row w-full h-[200px] p-4 sm:flex-col sm:w-1/2">
				<div class="relative w-full bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300">
				  <div class="absolute inset-0 flex items-center justify-center text-9xl font-bold text-gray-300 opacity-0 hover:opacity-100 transition duration-300">
					1
				  </div>
				  <div class="flex flex-row h-full">
					<div class="w-[25%] flex flex-col justify-between p-2 border-r border-gray-300">
						<div>
						  <h2 class="text-md font-bold text-center">Portofolio</h2>
						</div>
						<div>
						  <h3 class="text-md font-semibold text-center">Total:</h3>
						  <p class="text-lg font-bold text-center">123</p>
						</div>
					  </div>
					<div class="w-[75%] p-2">
					  <img src="/images/logo.png" alt="suki" class="object-cover max-h-full max-w-full mx-auto ">
					</div>
				  </div>
				</div>
			  </div>
			  
			  <div class="flex flex-row w-full h-[200px] p-4 sm:flex-col sm:w-1/2">
				<div class="relative w-full bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 transition duration-300">
				  <div class="absolute inset-0 flex items-center justify-center text-9xl font-bold text-gray-300 opacity-0 hover:opacity-100 transition duration-300">
					1
				  </div>
				  <div class="flex flex-row h-full">
					<div class="w-1/3 flex flex-col justify-between p-2 border-r border-gray-300">
						<div>
						  <h2 class="text-xl font-bold text-center">Portofolio</h2>
						</div>
						<div>
						  <h3 class="text-lg font-semibold text-center">Total:</h3>
						  <p class="text-2xl font-bold text-center">123</p>
						</div>
					  </div>
					<div class="w-2/3 p-2">
					  <img src="/images/logo.png" alt="suki" class="object-cover max-h-full max-w-full mx-auto ">
					</div>
				  </div>
				</div>
			  </div>
		</div>

	</div>

</body>
<h1>Private page for user: {user?.email}</h1>
<h2>Notes</h2>
<ul>
	{#each notes as note}
		<li>{note.note}</li>
	{/each}
</ul>
<form on:submit={handleSubmit}>
	<label>
		Add a note
		<input name="note" type="text" />
	</label>
</form>