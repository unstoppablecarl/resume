var fs             = require('fs');
var renderMarkdown = require('jsonresume-theme-markdown').render;
var renderHtml     = require('./theme-slick').render;

var resumeJson = require('./resume.json');

fs.writeFileSync('index.html', renderHtml(resumeJson), 'utf8');
fs.writeFileSync('resume.md', renderMarkdown(resumeJson), 'utf8');
