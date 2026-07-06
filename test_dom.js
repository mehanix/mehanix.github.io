import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable", url: "http://localhost/" });

setTimeout(() => {
  const track = dom.window.document.getElementById('main-carousel-track');
  console.log("Track innerHTML length:", track.innerHTML.length);
  const items = dom.window.document.querySelectorAll('.carousel-item');
  console.log("Number of carousel items:", items.length);
  if (items.length > 0) {
    console.log("First item HTML:", items[0].outerHTML);
  } else {
    console.log("No items rendered!");
  }
}, 2000);
