var draw = SVG().addTo('#map').size(300, 300)//??
                    //x1,y1,x2,y2

let y = 20;
let space = 5

class Grid_Map{
    function draw_grid(){
        for(i = 1; i < 10; i++){
            var row_line = draw.line(0, y*i, 100, y*i).stroke({ width: 2 }).attr({ stroke: 'gray' })
        }
    }
}

draw_grid();

window.onresize = function(){
    console.log("clientHeight= "+document.body.clientHeight);
    console.log("clientWidth= "+document.body.clientWidth);
    draw.size(document.body.clientWidth,document.body.clientHeight);
    row_line.plot(0,y,document.body.clientWidth,y);
}