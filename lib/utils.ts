import {options} from 'args-finder';
import {readFileSync, writeFileSync} from 'fs';

export const appName = 'bon-kreyol';

interface ReplacementMap {
	original: string;
	replacement: string;
}

const replacements = [
	{original: 'é', replacement: 'e'},
	{original: 'oua', replacement: 'wa'},
	{original: 'gin', replacement: 'gen'},
	{original: 'gnou', replacement: 'yon'},
	{original: 'sion', replacement: 'syon'},
	{original: 'ie', replacement: 'ye'},
]
try {
	const file = readFileSync('./.kreyolize.yml', 'utf-8');
	for (const line of file.split('\n')) {
		const info = line.split(':');
		if (info.length === 2 && !replacements.some(x => x.original === info[0].trim())) {
		  replacements.push({original: info[0].trim(), replacement: info[1].trim() || ' '});
		}
	}
} catch {
	// continue no replacement map specified.
}
for (const item of replacements) {
	const original = item.original.substr(0, 1).toUpperCase() + item.original.substr(1);
	const replacement = item.replacement.substr(0, 1).toUpperCase() + item.replacement.substr(1);
	if (!replacements.some(x => x.original === original)) {
	  replacements.push({original, replacement});
	}
}

export function sanitizeKreyol(text: string) {
    for (const match of replacements) {
        text = text.replace(new RegExp(match.original, 'g'), match.replacement);
    }
    return text;
}

export function replaceTextFromFile(filepath = '', output = '') {
    filepath = filepath || options.filepath;
    output = output || options.output;
    let text = readFileSync(filepath, 'utf8');
    text = sanitizeKreyol(text);
    writeFileSync(output, text, 'utf8');
}