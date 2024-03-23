<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	export let suggestions: string[] = [];
	export let userInput = '';

	let activeSuggestion = 0;
	let filteredSuggestions: string[] = [];
	let showSuggestions = false;

	const dispatch = createEventDispatcher();

	function onChange(event) {
		const input = event.target.value;
		userInput = input;
		//isWordChanged = false;
		//console.log(userInput, 'userInput');
		filteredSuggestions = suggestions.filter((suggestion) =>
			suggestion.replace(/[\u0591-\u05C7]/g, '').startsWith(input)
		);
		showSuggestions = true;
		activeSuggestion = 0;
	}

	function onClick(event) {
		userInput = event.target.innerText;
		showSuggestions = false;
		dispatch('chosenWord', {
			word: userInput
		});
	}

	function onKeyDown(event) {
		if (event.key === 'Enter') {
			userInput = filteredSuggestions[activeSuggestion];
			showSuggestions = false;
			dispatch('chosenWord', {
				word: userInput
			});
		} else if (event.key === 'ArrowUp') {
			if (activeSuggestion === 0) return;
			activeSuggestion--;
			console.log(activeSuggestion, 'activeSuggestionUP');
			container.scroll({
				top: activeSuggestion * 24,
				left: 0,
				behavior: 'smooth'
			});
		} else if (event.key === 'ArrowDown') {
			if (activeSuggestion === filteredSuggestions.length - 1) return;
			activeSuggestion++;
			console.log(activeSuggestion, 'activeSuggestionDOWN');
			container.scroll({
				top: activeSuggestion * 24,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
	let container: HTMLElement;
</script>

<div id="autocomplete" class="relative">
	<input
		type="text"
		name="wordToTranslate"
		class="border-2 border-black w-56"
		bind:value={userInput}
		on:input={onChange}
		on:keydown={onKeyDown}
		dir="rtl"
	/>
	{#if showSuggestions && userInput}
		{#if filteredSuggestions.length}
			<ul
				bind:this={container}
				class="suggestions overflow-y-auto max-h-36 bg-white w-56 absolute right-0 top-[calc(100%)]"
			>
				{#each filteredSuggestions as suggestion, index}
					<li class={activeSuggestion === index ? 'active bg-violet-700' : ''}>
						<button on:click={onClick}>{suggestion} </button>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="no-suggestions">
				<em>No suggestions, you're on your own!</em>
			</div>
		{/if}
	{/if}
</div>

<style>
	.suggestions {
		list-style-type: none;
		padding: 0;
	}
	.suggestions li {
		cursor: pointer;
	}
	.suggestion-active {
		background-color: lightgray;
	}

	input {
		border: 1px solid #999;
		padding: 0.5rem;
	}

	.suggestions li:not(:last-of-type) {
		border-bottom: 1px solid #999;
	}
</style>
