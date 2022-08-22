import * as $ from 'jquery'
import Post from './Post'
import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import Logo from './assets/bird.png'
import './styles/styles.css'

const post = new Post('Webpack Post Title');

$('pre').html(post.toString())

console.log("Post to string: ", post.toString());
console.log('JSON: ', json)
// console.log('XML: ', xml)
// console.log('CSV: ', csv)