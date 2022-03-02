

let map_width = 500, map_height = 500;
let map_line_view = document.createElementNS('http://www.w3.org/2000/svg','svg');
map_line_view.setAttribute("width",map_width);
map_line_view.setAttribute("height",map_height);


let x1 = 0; x2 = map_width;
let y = 100
let line_row = document.createElementNS('http://www.w3.org/2000/svg','line'); 
line_row.setAttribute("x1",0);
line_row.setAttribute("x2",map_width);
line_row.setAttribute("y1",y);
line_row.setAttribute("y2",y);
line_row.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2"); 

map_line_view.appendChild(line_row);
// x1="0" y1="0" x2="200" y2="200"
// let text = document.createTextNode("Haha");
// element.appendChild(text);
let map = document.getElementById("map");
map.appendChild(map_line_view);