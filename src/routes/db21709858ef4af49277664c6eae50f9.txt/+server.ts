import { text } from '@sveltejs/kit';

export const GET = () => {
	return text('db21709858ef4af49277664c6eae50f9', {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
};
