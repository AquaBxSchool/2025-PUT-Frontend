<script lang="ts">
	import { Input } from "./components/ui/input";
	import { Button } from "./components/ui/button";
	import { enhance } from "$app/forms";
	import { formEnhanceFunction } from "./form";
</script>

<form
	class="flex gap-4"
	method="post"
	action="?/addTodo"
	use:enhance={formEnhanceFunction}
>
	<Input name="text" required></Input>
	<Button type="submit">Submit</Button>
</form>
