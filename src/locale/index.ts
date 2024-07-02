import es from './es.json' assert { type: 'json' };
export default function t(englishWords: string) {
	switch (navigator.language.slice(0, 2)) {
		case 'es':
			return es[englishWords as keyof typeof es];
			break;
		default:
			return englishWords;
	}
}
