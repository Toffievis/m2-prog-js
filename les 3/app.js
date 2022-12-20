class App
{
    runapplication()
    {
        let title = document.getElementById("newstitle");

        
        let randomGetal = Math.random();
        console.log(randomGetal)

        if (randomGetal == 0)
        {
            title.style.backgroundColor = "#FFBF00";
        }
        if (randomGetal < 0.2)
        {
            title.style.backgroundColor = "#CCCCFF";
        }
        if (randomGetal > 0.6 )
        {
            title.style.backgroundColor = "#DE3163";
        }
        if (randomGetal >= 0.2 && randomGetal <= 0.6)
        {
            title.style.backgroundColor = "#9FE2BF";
        }
    }
}

let app = new App();
app.runapplication();

