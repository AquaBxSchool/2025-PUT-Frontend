<script lang="ts">
	import { Trash } from "@lucide/svelte";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import { enhance } from "$app/forms";
	import { formEnhanceFunction } from "./form";

	let { todos } = $props();
</script>

<div class="flex flex-col gap-2">
	{#each todos as t}
		<div class="flex items-center justify-between border-b-1 pb-2">
			<form
				class="flex items-center space-x-2"
				use:enhance={formEnhanceFunction}
				action="?/updateTodo"
				method="POST"
			>
				<input type="hidden" name="_id" value={t._id} />

				<Checkbox
					id={"check-" + t._id}
					checked={t.done}
					type="submit"
					name="done"
				/>
				<label
					for={"check-" + t._id}
					class="select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{t.text}
				</label>
			</form>
			<form
				use:enhance={formEnhanceFunction}
				action="?/deleteTodo"
				method="POST"
			>
				<input type="hidden" name="_id" value={t._id} />

				<button
					type="submit"
					class="border-1 rounded-xl hover:bg-red-400 hover:text-white transition-colors duration-100 p-2 cursor-pointer"
				>
					<Trash class="w-4 h-4 " />
				</button>
			</form>
		</div>
	{/each}
</div>
