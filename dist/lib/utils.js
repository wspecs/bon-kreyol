"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var args_finder_1 = require("args-finder");
var fs_1 = require("fs");
exports.appName = 'bon-kreyol';
var replacements = [
    { original: 'é', replacement: 'e' },
    { original: 'oua', replacement: 'wa' },
    { original: 'gin', replacement: 'gen' },
    { original: 'gnou', replacement: 'yon' },
    { original: 'sion', replacement: 'syon' },
    { original: 'ie', replacement: 'ye' },
];
try {
    var file = fs_1.readFileSync('./.kreyolize.yml', 'utf-8');
    var _loop_1 = function (line) {
        var info = line.split(':');
        if (info.length === 2 && !replacements.some(function (x) { return x.original === info[0].trim(); })) {
            replacements.push({ original: info[0].trim(), replacement: info[1].trim() || ' ' });
        }
    };
    for (var _i = 0, _a = file.split('\n'); _i < _a.length; _i++) {
        var line = _a[_i];
        _loop_1(line);
    }
}
catch (_b) {
    // continue no replacement map specified.
}
var _loop_2 = function (item) {
    var original = item.original.substr(0, 1).toUpperCase() + item.original.substr(1);
    var replacement = item.replacement.substr(0, 1).toUpperCase() + item.replacement.substr(1);
    if (!replacements.some(function (x) { return x.original === original; })) {
        replacements.push({ original: original, replacement: replacement });
    }
};
for (var _c = 0, replacements_1 = replacements; _c < replacements_1.length; _c++) {
    var item = replacements_1[_c];
    _loop_2(item);
}
function sanitizeKreyol(text) {
    for (var _i = 0, replacements_2 = replacements; _i < replacements_2.length; _i++) {
        var match = replacements_2[_i];
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
