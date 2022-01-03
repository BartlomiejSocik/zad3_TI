class Jednostki{
    constructor(ID,Nazwa,Dane,Opis,JPGv1,JPGv2,JPGv3,Wlasciciel,Czy_morski){
        this.Id = ID; 
        this.Nazwa = Nazwa; 
        this.Dane = Dane;
        this.Opis = Opis;
        this.JPGv1 = JPGv1;
        this.JPGv2 = JPGv2; 
        this.JPGv3 = JPGv3; 
        this.Wlasciciel = Wlasciciel; 
        this.Czy_morski = Czy_morski;  
    }
}

module.exports = Jednostki;
