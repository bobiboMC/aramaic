<script lang="ts">
	import Header from '../components/Header.svelte';
	import dictionary from '$lib/dictionary.json';
	import AutoCompleteInput from '../components/AutoCompleteInput.svelte';

	let suggestedDictionary = dictionary['words'].map((word) => word.aramaic);
	let wordTranslation = '';
	let wordToTranslate = '';
	// Define a function that stores the event
	let storedEvent: CustomEvent;
	const storeEvent = (event: CustomEvent) => {
		storedEvent = event;
	};
	// Define the findTranslation function
	const findTranslation = () => {
		console.log(storedEvent, 'storedEvent');
		if (storedEvent) {
			const chosenWord = storedEvent.detail.word;
			dictionary['words'].find((word) => {
				if (chosenWord === word.aramaic) {
					wordTranslation = '- ' + word.hebrew;
					wordToTranslate = chosenWord;
					return true;
				}
				return false;
			});
		}
	};
	//let isWordChanged: boolean = false;

	/*const findTranslation=(event)=> {
		dictionary['words'].find((word) => {
			if (event.detail.word === word.aramaic) {
				wordTranslation = word.hebrew;
				wordToTranslate = event.detail.word;
				return true;
			}
			return false;
		});
	}*/
	/*function findTranslation(event) {
		dictionary['words'].find((word) => {
			if (event.detail.word === word.aramaic) {
				wordTranslation = word.hebrew;
				wordToTranslate = event.detail.word;
				return true;
			}
			return false;
		});
	}*/
</script>

<div>
	<Header title={'מילון ארמי זוהר - עברי'} />
	<div class="space-y-4">
		<div class="mt-4 space-y-4">
			<AutoCompleteInput
				suggestions={suggestedDictionary}
				userInput={wordToTranslate}
				on:chosenWord={storeEvent}
			/>
			<button
				on:click={findTranslation}
				class="border-2 border-black p-2 rounded hover:bg-cyan-600"
				type="submit">תרגם</button
			>
		</div>
		<div>
			{wordToTranslate}
			{wordTranslation}
		</div>
	</div>
</div>
