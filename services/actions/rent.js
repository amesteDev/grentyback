

class RentServ {

    async RequestRent() {
        //må registrera som ett rent-schema för aktuell maskin, vilket innebär att jag behöver skicka med vilken maskin det gäller?
        //kan göra det i body såklart.
        //det som behövs är då maskinens ägare, vilken maskin och vem som ska hyra den, vilket/vilka datum. sen hämtas priset från maskinen.
    }

    async AcceptRent(){
    
    }

    async DeclineRent(){

    }

    async CompleteRent() {

    }

}

module.exports = RentServ;