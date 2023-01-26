class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        this.backgroundColor(g);
        this.drawPath1(g,"grey", 300, 1000);
        this.drawPath2(g,"grey", 300, 500);
        this.drawPath3(g,"grey", 1220, 1000);

        this.drawHouse(g, "#eeaa88", 220, 500);
        this.drawHouse(g, "#eeaa88", 220, 550);
        this.drawHouse(g, "#eeaa88", 220, 600);
        this.drawHouse(g, "#eeaa88", 220, 650);
        this.drawHouse(g, "#eeaa88", 220, 700);
        this.drawHouse(g, "#eeaa88", 220, 750);
        this.drawHouse(g, "#eeaa88", 220, 800);
        this.drawHouse(g, "#eeaa88", 220, 850);
        this.drawHouse(g, "#eeaa88", 220, 900);


        
        this.drawHouse(g, "#eeaa88", 350, 400);
        this.drawHouse(g, "#eeaa88", 450, 400);
        this.drawHouse(g, "#eeaa88", 550, 400);
        this.drawHouse(g, "#eeaa88", 650, 400);
        this.drawHouse(g, "#eeaa88", 750, 400);
        this.drawHouse(g, "#eeaa88", 850, 400);
        this.drawHouse(g, "#eeaa88", 950, 400);
        this.drawHouse(g, "#eeaa88", 1050, 400);
        this.drawHouse(g, "#eeaa88", 1150, 400);
        this.drawHouse(g, "#eeaa88", 1250, 400);
        

        this.drawSnowman(g, "white", 550, 805);
        this.drawSnowman(g, "white", 750, 805);
        this.drawSnowman(g, "white", 900, 805);
        this.drawSnowman(g, "white", 1100, 805);



      
        this.drawTreeLog(g, "brown", 100,305)
        this.drawTreeLeaves(g, "green", 150, 275)
        this.drawTreeLeaves(g,"#a3c585", 100, 300)  
        this.drawTreeLog(g, "brown", 900,305)
        this.drawTreeLeaves(g, "green", 950, 275)
        this.drawTreeLeaves(g,"#a3c585", 900, 300)
        this.drawTreeLog(g, "brown", 300,255)
        this.drawTreeLeaves(g, "green", 350, 225)
        this.drawTreeLeaves(g,"#a3c585", 300, 235)
        this.drawTreeLog(g, "brown", 620,255)
        this.drawTreeLeaves(g, "green", 650, 225)
        this.drawTreeLeaves(g,"#a3c585", 600, 235)
        this.drawTreeLog(g, "brown", 1220,255)
        this.drawTreeLeaves(g, "green", 1250, 225)
        this.drawTreeLeaves(g,"#a3c585", 1200, 235)
        this.drawTreeLog(g, "brown", 1100,305)
        this.drawTreeLog(g, "brown", 100,1195)
        this.drawTreeLeaves(g, "green", 150, 1175)
        this.drawTreeLeaves(g,"#a3c585", 100, 1175) 
        this.drawTreeLog(g, "brown", 300,1195)
        this.drawTreeLeaves(g, "green", 350, 1175)
        this.drawTreeLeaves(g,"#a3c585", 300, 1175)
        this.drawTreeLog(g, "brown", 600,1195)
        this.drawTreeLeaves(g, "green", 650, 1175)
        this.drawTreeLeaves(g,"#a3c585", 600, 1175)
        this.drawTreeLog(g, "brown", 900,1195)
        this.drawTreeLeaves(g, "green", 920, 1175)
        this.drawTreeLeaves(g,"#a3c585", 930, 1175)
        this.drawTreeLog(g, "brown", 1290,1195)
        this.drawTreeLeaves(g, "green", 1320, 1175)
        this.drawTreeLeaves(g,"#a3c585", 1290, 1175)
        
    
    
       
    }

    backgroundColor(g)
    {
        g.fillStyle = "#00FF00";
        g.beginPath();
        g.moveTo(0,0);
        g.lineTo(1500, 0);
        g.lineTo(1500, 1500);
        g.lineTo(0, 1500);
        g.closePath();
        g.fill();
        g.stroke();
    }

    drawTreeLeaves(g, color, x, y, r,)
    {
        g.fillStyle = color;
        var r = 60
        g.beginPath();
        g.moveTo(x, y);
        g.arc(x, y, r, 0, 2 * Math.PI, false);
        g.closePath();
        g.stroke();
        g.fill();
    }   

    drawTreeLog(g, color, x, y, r)
    {
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x+50, y+0);
        g.lineTo(x+50, y+100);
        g.lineTo(x, y+100);
        g.stroke();
        g.closePath()
        g.fill();
    }
    


   
    

    drawSnowman(g, color, x, y, r)
    {
        var r = 40
        g.fillStyle = color;

        g.beginPath();
        g.moveTo(x, y);
        g.arc(x, y-100, r, 2 * Math.PI, false);
        g.closePath();
        g.stroke();
        g.fill(); 
        
        var r = 45
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y);
        g.arc(x, y-50, r, 2 * Math.PI, false);
        g.closePath();
        g.stroke();
        g.fill();


        var r = 50
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y);
        g.arc(x, y, r, 2 * Math.PI, false);
        g.closePath();
        g.stroke();
        g.fill();   

    
           
  
        
    }


    drawHouse(g, color, x,y,)
    {
        g.fillStyle = color;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x+40, y+40)
        g.lineTo(x+40, y+100)
        g.lineTo(x-40, y+100)
        g.lineTo(x-40, y+40)
        g.closePath();
        g.stroke();
        g.fill();   

    }

    drawPath1(g, color, x,y)
    {
        g.fillStyle = color;
        g.beginPath();
        g.lineTo(x+1000, y+20);
        g.lineTo(x+1000, y+100);
        g.lineTo(x+0, y+100);
        g.lineTo(x+0,y+20 );
        g.closePath();
        g.fill();
        
        g.beginPath();
        g.fillStyle = color;
        g.lineTo(x+80, y+20);
        g.lineTo(x+80, y+-400);
        g.lineTo(x+0, y+-400);
        g.lineTo(x+0,y+20);
        g.closePath();
        g.fill();

    }
    drawPath2(g, color, x,y)
    {
        g.fillStyle = color;
        g.beginPath();
        g.lineTo(x+1000, y+20);
        g.lineTo(x+1000, y+100);
        g.lineTo(x+0, y+100);
        g.lineTo(x+0,y+20 );
        g.closePath();
        g.fill();
    }
    drawPath3(g, color, x,y)
    {g.beginPath();
        g.fillStyle = color;
        g.lineTo(x+80, y+20);
        g.lineTo(x+80, y+-400);
        g.lineTo(x+0, y+-400);
        g.lineTo(x+0,y+20);
        g.closePath();
        g.fill();
    }

    
        
}
let app = new App();
app.runApplication();