export interface Heroe {
    // id es opcional por que habra nuevos id y esos no estan en la bace de datos
    id?:               string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    //este es opcional por que sera donde subiremos la nuevas imagenes por que al momento de estar haicndo uno nuev o no tenemos la img
    alt_img?:          string; //aqui se almasenara el pad url https://asdglkajsgdkdgsa.com/img.png

}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
