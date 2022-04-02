////// This file is for command Line output
var args = process.argv.slice(2);
const x = parseInt(args[0]);
const y = parseInt(args[1]);

// Creating a 8*8 2d array as a replica of a chess board

var arr = new Array(8);
for (let i = 0; i < 8; i++) {
    arr[i] = new Array(8);
}
for (let i = 0; i < 8; i++) {

    for (let j = 0; j < 8; j++) {
        arr[i][j] = 0;
    }

}
arr[x][y]="Source";


var path=[];
if(x-2>=0 && y+1<8){
    path.push([x-2,y+1]);
}
if(x-1>=0 && y+2<8){
    path.push([x-1,y+1]);
}
if(x+1<8 && y+2<8){
    path.push([x+1,y+2]);
}
if(x+2<8 && y+1<8){
    path.push([x+2,y+1]);
}
if(x+2<8 && y-1>=0){
    path.push([x+2,y-1]);
}
if(x+1<8 && y-2>=0){
    path.push([x+1,y-2]);
}
if(x-1>=0 && y-2>=0){
    path.push([x-1,y-2])
}
if(x-2>=0 && y-1>=0){
    path.push([x-2,y-1])
}

for(let i=0;i<path.length;i++){
console.log(path[i])
}








