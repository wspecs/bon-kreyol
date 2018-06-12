"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var args_finder_1 = require("args-finder");
var fs_1 = require("fs");
exports.appName = 'bon-kreyol';
var replacements = [
    { original: 'é', replacement: 'e' },
    { original: 'É', replacement: 'E' },
    { original: 'oua', replacement: 'wa' },
    { original: 'Oua', replacement: 'Wa' },
    { original: 'gin', replacement: 'gen' },
    { original: 'Gin', replacement: 'Gen' },
    { original: 'gnou', replacement: 'yon' },
    { original: 'Gnou', replacement: 'Yon' },
    { original: 'sion', replacement: 'syon' },
    { original: 'Sion', replacement: 'Syon' },
    { original: 'ie', replacement: 'ye' },
    { original: 'Ye', replacement: 'Ye' },
];
function sanitizeKreyol(text) {
    for (var _i = 0, replacements_1 = replacements; _i < replacements_1.length; _i++) {
        var match = replacements_1[_i];
        text = text.replace(new RegExp(match.original, 'g'), match.replacement);
    }
    return text;
}
exports.sanitizeKreyol = sanitizeKreyol;
function replaceTextFromFile(filepath, output) {
    if (filepath === void 0) { filepath = ''; }
    if (output === void 0) { output = ''; }
    filepath = filepath || args_finder_1.options.filepath;
    output = output || args_finder_1.options.output;
    var text = fs_1.readFileSync(filepath, 'utf8');
    text = sanitizeKreyol(text);
    fs_1.writeFileSync(output, text, 'utf8');
}
exports.replaceTextFromFile = replaceTextFromFile;
