import { component$, useSignal } from "@qwik.dev/core";

export const Counter = component$(() => {
	const count = useSignal(0);

	return (
		<button type="button" onClick$={() => count.value++}>
			{count.value}
		</button>
	);
});
