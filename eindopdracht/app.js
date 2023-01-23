class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);

        g.fillStyle = "Cyan";
        g.beginPath()
        g.rect(0, 0, 800, 400)
        g.stroke();
        g.closePath();
        g.fill();
    
        
    

        g.beginPath()
        g.stroke(); 

        g.setColor(Color.Black);
        g.fillRect(50, 50, 100, 100);
        g.fillRect(150, 50, 100, 100);
        g.fillRect(250, 50, 100, 100);


        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.fill();

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(25,35);
        g.lineTo(25,45);
        g.lineTo(35,47);
        g.lineTo(35,37);
        g.closePath();
        g.fill();




    }
}

let app = new App();
app.runApplication();