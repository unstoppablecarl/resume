var fs = require('fs');
var {render} = require('jsonresume-theme-markdown');

var resumeObject = require('./resume.json');

fs.writeFileSync('resume.md', render(resumeObject), 'utf8');
