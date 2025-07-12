import { component$ } from "@qwik.dev/core";
import { Counter } from "~/components/counter";

export default component$(() => {
	return (
		<>
			<h1>Welcome to Qwik Start</h1>

			<Counter />
		</>
	);
});
