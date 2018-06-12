import {options} from 'args-finder';
import {readFileSync, writeFileSync} from 'fs';

export const appName = 'bon-kreyol';

const replacements = [
    {original: 'é', replacement: 'e'},
    {original: 'É', replacement: 'E'},
    {original: 'oua', replacement: 'wa'},
    {original: 'Oua', replacement: 'Wa'},
    {original: 'gin', replacement: 'gen'},
    {original: 'Gin', replacement: 'Gen'},
    {original: 'gnou', replacement: 'yon'},
    {original: 'Gnou', replacement: 'Yon'},
    {original: 'sion', replacement: 'syon'},
    {original: 'Sion', replacement: 'Syon'},
    {original: 'ie', replacement: 'ye'},
    {original: 'Ye', replacement: 'Ye'},
    // {original: '', replacement: ''},
]

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