class Vis
{
    constructor(naam, vleeseter, leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd; 
        this.leeft = true;
        this.honger = true; 
    }

}

class plant
{
    constructor(soort, eetbaar,)
    {
        this.soort = soort;
    }
}


class App
{
    runApplication()
    {
        let karper = new Vis("jantje", false, 12);
        console.log(karper)

        let snoek = new Vis("bryan", true, 5);
        console.log(snoek)

        let voorn = new Vis("jimmy  ", false, 11);
        console.log(voorn)
    }
}




let app = new App();
app.runApplication();



