var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var myMatrix = matrixArray(10,10);
function pole(){
    var x=30;
    var y=30;
    ctx.beginPath();
    ctx.strokeStyle="#00008B";
    ctx.strokeRect(30,30,300,300);
    for (let i=0;i<9;i++)
    {
        ctx.moveTo(30,y+30);
        ctx.lineTo(330,y+30);
        y=y+30;
    }
    for (let i=0;i<9;i++)
    {
        ctx.moveTo(x+30,30);
        ctx.lineTo(x+30,330);
        x=x+30;
    }
    ctx.stroke();
}
function drawSquare(x,y){
    ctx.fillStyle="#87CEEB";
    ctx.fillRect(x+1,y+1,28,28);
}
function checkright(x,y){
    if (x+1<10)
    {
    if (myMatrix[y][x+1]==0)
    myMatrix[y][x+1]=1;
    }
}
function checkleft(x,y){
    if (x-1>=0)
    {
    if (myMatrix[y][x-1]==0)
    myMatrix[y][x-1]=1;
    }
}
function checkup(x,y){
    if (y-1>=0)
    {
    if (myMatrix[y-1][x]==0)
    myMatrix[y-1][x]=1;
    }
}
function checkdown(x,y){
    if (y+1<10)
    {
    if (myMatrix[y+1][x]==0)
    myMatrix[y+1][x]=1;
    }
}
function checkleftup(x,y){
    if ((x-1>=0)&& (y-1>=0))
    {
    if (myMatrix[y-1][x-1]==0)
    myMatrix[y-1][x-1]=1;
    }
}
function checkrightup(x,y){
    if ((x+1<10)&& (y-1>=0))
    {
    if (myMatrix[y-1][x+1]==0)
    myMatrix[y-1][x+1]=1;
    }
}
function checkrightdown(x,y){
    if ((x+1<10)&& (y+1<10))
    {
    if (myMatrix[y+1][x+1]==0)
    myMatrix[y+1][x+1]=1;
    }
}
function checkleftdown(x,y){
    if ((x-1>=0)&& (y+1<10))
    {
    if (myMatrix[y+1][x-1]==0)
    myMatrix[y+1][x-1]=1;
    }
}
function check(x,y){
checkleft(x,y);
checkright(x,y);
checkup(x,y);
checkdown(x,y);
checkleftdown(x,y);
checkleftup(x,y);
checkrightdown(x,y);
checkrightup(x,y);
}
function matrixArray(rows,columns){
    var arr = new Array();
    for(var i=0; i<rows; i++){
      arr[i] = new Array();
      for(var j=0; j<columns; j++){
        arr[i][j] = 0;
      }
    }
    return arr;
  }
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function fourSquares(){
    let x=getRandomInt(10);
    let y=getRandomInt(10);
    myMatrix[y][x]=1;
    drawSquare(x*30+30,y*30+30);
    if (y-3>=0)//up direction
    {drawSquare(x*30+30,y*30);drawSquare(x*30+30,(y-1)*30);drawSquare(x*30+30,(y-2)*30);
       for (let j=y;j>y-4;j--)
       {
       myMatrix[j][x]=1;
       check(x,j);
       }
    }
    else {
         if (x-3>=0)//left direction
         {drawSquare(x*30,y*30+30);drawSquare((x-1)*30,y*30+30);drawSquare((x-2)*30,y*30+30);
            for (let j=x;j>x-4;j--)
            {
            myMatrix[y][j]=1;
            check(j,y);
            }
         }
         else   //down direction 
            {drawSquare(x*30+30,(y+3)*30);drawSquare(x*30+30,(y+4)*30);drawSquare(x*30+30,(y+2)*30);
                for (let j=y;j<y+4;j++)
                {
                myMatrix[j][x]=1;
                check(x,j);
                }
            } 
        }
}
function threeSquares(){
    let x=getRandomInt(10);
    let y=getRandomInt(10);
    if (myMatrix[y][x]==1)
    threeSquares();
    else
    { 
        if ((y-2>=0)&&(myMatrix[y-1][x]!=1)&&(myMatrix[y-2][x]!=1))//up direction
    {drawSquare(x*30+30,y*30);drawSquare(x*30+30,(y-1)*30);drawSquare(x*30+30,y*30+30);
       for (let j=y;j>y-3;j--)
       {
       myMatrix[j][x]=1;
       check(x,j);
       }
    }
    else {
         if ((x-2>=0)&&(myMatrix[y][x-1]!=1)&&(myMatrix[y][x-2]!=1))//left direction
         {drawSquare(x*30,y*30+30);drawSquare((x-1)*30,y*30+30);drawSquare(x*30+30,y*30+30);
            for (let j=x;j>x-3;j--)
            {
            myMatrix[y][j]=1;
            check(j,y);
            }
         }
         else//down direction 
            {   
                if ((y+2<10)&&(myMatrix[y+2][x]!=1)&&(myMatrix[y+1][x]!=1))
                {drawSquare(x*30+30,(y+3)*30);drawSquare(x*30+30,(y+2)*30);drawSquare(x*30+30,y*30+30);
                  for (let j=y;j<y+3;j++)
                  {
                  myMatrix[j][x]=1;
                   check(x,j);
                  }
                } 
                else//right direction
                {   
                    if ((x+2<10)&&(myMatrix[y][x+1]!=1)&&(myMatrix[y][x+2]!=1))
                    {drawSquare((x+2)*30,y*30+30);drawSquare((x+3)*30,y*30+30);drawSquare(x*30+30,y*30+30);
                      for (let j=x;j<x+3;j++)
                      {
                      myMatrix[y][j]=1;
                      check(j,y);
                      }
                    }
                    else threeSquares();
                }
            }
        }

    }
}
function doubleSquares()
{
let x=getRandomInt(10);
let y=getRandomInt(10);
if (myMatrix[y][x]==1)
doubleSquares();
else
{ 
    if ((y-1>=0)&&(myMatrix[y-1][x]!=1))//up direction
{drawSquare(x*30+30,y*30);drawSquare(x*30+30,y*30+30);
   for (let j=y;j>y-2;j--)
   {
   myMatrix[j][x]=1;
   check(x,j);
   }
}
else {
     if ((x-1>=0)&&(myMatrix[y][x-1]!=1))//left direction
     {drawSquare(x*30,y*30+30);drawSquare(x*30+30,y*30+30);
        for (let j=x;j>x-2;j--)
        {
        myMatrix[y][j]=1;
        check(j,y);
        }
     }
         else//down direction 
            {   
                if ((y+1<10)&&(myMatrix[y+1][x]!=1))
                {drawSquare(x*30+30,(y+2)*30);drawSquare(x*30+30,y*30+30);
                  for (let j=y;j<y+2;j++)
                  {
                  myMatrix[j][x]=1;
                   check(x,j);
                  }
                } 
                else//right direction
                {   
                    if ((x+1<10)&&(myMatrix[y][x+1]!=1))
                    {drawSquare((x+2)*30,y*30+30);drawSquare(x*30+30,y*30+30);
                      for (let j=x;j<x+2;j++)
                      {
                      myMatrix[y][j]=1;
                      check(j,y);
                      }
                    }
                    else doubleSquares();
                }
            }
    }

}
}
function oneSquares()
{
let x=getRandomInt(10);
let y=getRandomInt(10);
if (myMatrix[y][x]==1)
oneSquares();
else
{
    drawSquare(x*30+30,y*30+30);
    myMatrix[y][x]=1;
    check(x,y);
}
}
function main(){
pole();
fourSquares();
threeSquares();
threeSquares();
for (let k=0;k<3;k++)
doubleSquares();
for (let k=0;k<4;k++)
oneSquares();
}
main();