export const debounce = <T extends unknown[]>(func: (...args: T) => unknown, delay: number) => {
	let inDebounce: ReturnType<typeof setTimeout> | undefined;

	return function (...args: T) {
		clearTimeout(inDebounce);
		inDebounce = setTimeout(() => func(...args), delay);
	};
};
