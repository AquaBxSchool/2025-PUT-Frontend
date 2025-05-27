<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index";
	import * as Card from "$lib/components/ui/card/index";
	import Checkboxes from "$lib/Checkboxes.svelte";
	import FormAdd from "$lib/FormAdd.svelte";
	import { onMount } from "svelte";

	let { data } = $props();
	let todos = $derived(data.todos);

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="grid place-items-center w-dvw h-dvh">
		<div class="flex gap-4 flex-col">
			<Tabs.Root value="todo" class="w-[400px]">
				<Tabs.List>
					<Tabs.Trigger value="todo">Todo</Tabs.Trigger>
					<Tabs.Trigger value="done">Done</Tabs.Trigger>
					<Tabs.Trigger value="all">All</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value="todo">
					<Card.Root class="h-96 overflow-y-auto">
						<Card.Header>
							<Card.Title>Todo</Card.Title>
						</Card.Header>
						<Card.Content class="space-y-2">
							<Checkboxes todos={todos.filter((t) => !t.done)}
							></Checkboxes>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
				<Tabs.Content value="done">
					<Card.Root class="h-96 overflow-y-auto">
						<Card.Header>
							<Card.Title>Done</Card.Title>
						</Card.Header>
						<Card.Content class="space-y-2">
							<Checkboxes todos={todos.filter((t) => t.done)}
							></Checkboxes>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
				<Tabs.Content value="all">
					<Card.Root class="h-96 overflow-y-auto">
						<Card.Header>
							<Card.Title>All</Card.Title>
						</Card.Header>
						<Card.Content class="space-y-2">
							<Checkboxes {todos}></Checkboxes>
						</Card.Content>
					</Card.Root>
				</Tabs.Content>
			</Tabs.Root>
			<FormAdd></FormAdd>
		</div>
	</div>
{/if}
