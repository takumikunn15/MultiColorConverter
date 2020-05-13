function rgb2hsv(r, g, b) {
  let v = Math.max(r, g, b),
    n = v - Math.min(r, g, b);
  let h = n && ((v == r) ? (g - b) / n : ((v == g) ? 2 + (b - r) / n : 4 + (r - g) / n));
  return [60 * (h < 0 ? h + 6 : h), v && n / v, v];
}

function rgb2Hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// console.log(`rgb: (0.5,0.2,0.3) --> hsv: (${rgb2hsv(0.5,0.2,0.3)})`)


// ---------------
// UX
// ---------------

rgb = [0, 0, 0];
hs = [0, 0, 0];

let $ = x => document.querySelector(x);
let c = (x, s) => $(x).style.backgroundColor = s;

let hsv2rgb = (h, s, v, f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)) => [f(5), f(3), f(1)];

function changeRGB(i, e) {
  rgb[i] = e.target.value / 255;
  hs = rgb2hsv(...rgb);
  refresh();
}

function changeHS(i, e) {
  hs[i] = e.target.value / (i ? 255 : 1);
  rgb = hsv2rgb(...hs);
  refresh();
}

function refresh() {
  rr = rgb.map(x => x * 255 | 0).join(',')
  tthex = rgb.map(x => x * 255 | 0)
  ttthex = rgb2Hex(tthex[0],tthex[1],tthex[2])
  thex = `HEX: ${ttthex}`
  tr = `RGB: ${rr}`
  th = `HSV: ${hs.map((x,i)=>i? (x*100).toFixed(2)+'%':x|0).join(',')}`
  $('.box').style.backgroundColor = `rgb(${rr})`;
  $('.infoHEX').innerHTML = `${thex}`;
  $('.infoRGB').innerHTML = `${tr}`;
  $('.infoHS').innerHTML = `${th}`;

  $('#r').value = rgb[0] * 255;
  $('#g').value = rgb[1] * 255;
  $('#b').value = rgb[2] * 255;

  $('#h').value = hs[0];
  $('#s').value = hs[1] * 255;
  $('#v').value = hs[2] * 255;
}

refresh();
