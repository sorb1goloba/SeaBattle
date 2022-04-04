var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var myMatrix = matrixArray(10,10);

//действие
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

//действие
function drawSquare(x,y){
    ctx.fillStyle="#87CEEB";
    ctx.fillRect(x+1,y+1,28,28);
}
//действие
function checker(x,y,t,k){
    if (k==1){
        for (let j=x;j>x+t;j--)
            {
                myMatrix[y][j]=1;
                check(j,y);
            }
    }
    if (k==2){
        for (let j=y;j<y+t;j++)
        {
            myMatrix[j][x]=1;
            check(x,j);
        }   
    }
    if(k==3){
        for (let j=x;j<x+t;j++)
            {
                myMatrix[y][j]=1;
                check(j,y);
            }
    }
    if(k==4){
        for (let j=y;j>y+t;j--)
            {
                myMatrix[j][x]=1;
                check(x,j);
            }
    } 
}

//действие
function checkright(x,y){
    if (x+1<10){
        if (myMatrix[y][x+1]==0)
            myMatrix[y][x+1]=1;
    }
}

//действие
function checkleft(x,y){
    if (x-1>=0){
        if (myMatrix[y][x-1]==0)
            myMatrix[y][x-1]=1;
    }
}

//действие
function checkup(x,y){
    if (y-1>=0){
        if (myMatrix[y-1][x]==0)
            myMatrix[y-1][x]=1;
    }
}

//действие
function checkdown(x,y){
    if (y+1<10){
        if (myMatrix[y+1][x]==0)
            myMatrix[y+1][x]=1;
    }
}

//действие
function checkleftup(x,y){
    if ((x-1>=0)&& (y-1>=0)){
        if (myMatrix[y-1][x-1]==0)
            myMatrix[y-1][x-1]=1;
    }
}

//действие
function checkrightup(x,y){
    if ((x+1<10)&& (y-1>=0)){
        if (myMatrix[y-1][x+1]==0)
            myMatrix[y-1][x+1]=1;
    }
}

//действие
function checkrightdown(x,y){
    if ((x+1<10)&& (y+1<10)){
        if (myMatrix[y+1][x+1]==0)
            myMatrix[y+1][x+1]=1;
    }
}

//действие
function checkleftdown(x,y){
    if ((x-1>=0)&& (y+1<10)){
        if (myMatrix[y+1][x-1]==0)
            myMatrix[y+1][x-1]=1;
    }
}

//действие
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

//действие
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

//действие
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//действие
function fourSquares(){
    let x=getRandomInt(10);
    let y=getRandomInt(10);
    myMatrix[y][x]=1;
    drawSquare(x*30+30,y*30+30);
    if (y-3>=0)//up direction
    {
        drawSquare(x*30+30,y*30);
        drawSquare(x*30+30,(y-1)*30);
        drawSquare(x*30+30,(y-2)*30);
        checker(x,y,-4,4);
    }
    else {
        if (x-3>=0)//left direction
        {
            drawSquare(x*30,y*30+30);
            drawSquare((x-1)*30,y*30+30);
            drawSquare((x-2)*30,y*30+30);
            checker(x,y,-4,1);
        }
        else   //down direction 
        {
            drawSquare(x*30+30,(y+3)*30);
            drawSquare(x*30+30,(y+4)*30);
            drawSquare(x*30+30,(y+2)*30);
            checker(x,y,4,2);
        } 
    }
}

//действие
function threeSquares(){
    let x=getRandomInt(10);
    let y=getRandomInt(10);
    if (myMatrix[y][x]==1)
        threeSquares();
    else
    {
    if ((y-2>=0)&&(myMatrix[y-1][x]!=1)&&(myMatrix[y-2][x]!=1))//up direction
    {
        drawSquare(x*30+30,y*30);
        drawSquare(x*30+30,(y-1)*30);
        drawSquare(x*30+30,y*30+30);
        checker(x,y,-3,4);
    }
    else{
    if ((x-2>=0)&&(myMatrix[y][x-1]!=1)&&(myMatrix[y][x-2]!=1))//left direction
        {
            drawSquare(x*30,y*30+30);
            drawSquare((x-1)*30,y*30+30);
            drawSquare(x*30+30,y*30+30);
            checker(x,y,-3,1);
        }
        else//down direction 
        {   
        if ((y+2<10)&&(myMatrix[y+2][x]!=1)&&(myMatrix[y+1][x]!=1))
            {
                drawSquare(x*30+30,(y+3)*30);
                drawSquare(x*30+30,(y+2)*30);
                drawSquare(x*30+30,y*30+30);
                checker(x,y,3,2);
            } 
            else//right direction
                {   
                if ((x+2<10)&&(myMatrix[y][x+1]!=1)&&(myMatrix[y][x+2]!=1))
                    {
                        drawSquare((x+2)*30,y*30+30);
                        drawSquare((x+3)*30,y*30+30);
                        drawSquare(x*30+30,y*30+30);
                        checker(x,y,3,3);
                    }
                    else threeSquares();
                }
        }
        }
    }
}

//действие
function doubleSquares()
{
    let x=getRandomInt(10);
    let y=getRandomInt(10);
    if (myMatrix[y][x]==1)
        doubleSquares();
    else
    { 
        if ((y-1>=0)&&(myMatrix[y-1][x]!=1))//up direction
        {
            drawSquare(x*30+30,y*30);
            drawSquare(x*30+30,y*30+30);
            checker(x,y,-2,4);
        }
        else {
        if ((x-1>=0)&&(myMatrix[y][x-1]!=1))//left direction
            {
                drawSquare(x*30,y*30+30);
                drawSquare(x*30+30,y*30+30);
                checker(x,y,-2,1);
            }
            else//down direction 
            {   
                if ((y+1<10)&&(myMatrix[y+1][x]!=1))
                    {
                        drawSquare(x*30+30,(y+2)*30);
                        drawSquare(x*30+30,y*30+30);
                        checker(x,y,2,2);
                    } 
                    else//right direction
                    {   
                    if ((x+1<10)&&(myMatrix[y][x+1]!=1))
                        {
                            drawSquare((x+2)*30,y*30+30);
                            drawSquare(x*30+30,y*30+30);
                            checker(x,y,2,3);
                        }
                        else doubleSquares();
                    }
            }
        }

    }
}

//действие
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

//действие
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