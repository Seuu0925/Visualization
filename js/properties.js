var title = 'SurVis Viewer';
var dataDir = 'data/';
var jsDir = 'js/';
var stylesDir = 'styles/';
var tagCloudOptions = [
  { field: 'keywords', title: 'Keywords', minTagFrequency: 1 },
  { field: 'author', title: 'Authors', minTagFrequency: 1 },
  { field: 'series', title: 'Series', minTagFrequency: 1 }
];
var editable = true;
var paper = null;
var extraPages = { 'about': 'about.html' };
var customStyle = '';
var citations = null;
var bibtexFile = '../literature.bib';