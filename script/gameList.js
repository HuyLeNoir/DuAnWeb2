const gameList = { //gameList kieu object 
    "game01": {
        "Name": "Left 4 Dead 2",
        "Genre": "Action Zombies Co-op FPS Multiplayer Shooter", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 200000,
        "Sale": 0.5,
        "onSale": true,
        "yearRelease": 2009,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot mang cac string
        }
    },
    "game02": {
        "Name": "RimWorld",
        "Genre": "Colony-Sim Base-Building Survival Strategy",   
        "originalPrice": 445000,
        "Sale": 0.2,
        "onSale": true,
        "yearRelease": 2018,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game03": {
        "Name": "Oxygen Not Included",
        "Genre": "Colony-Sim Base-Building Survival",   
        "originalPrice": 220000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2018,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game04": {
        "Name": "ELDEN RING",
        "Genre": "Souls-like Open-World Dark-Fantasy RPG",   
        "originalPrice": 990000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2022,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game05": {
        "Name": "Sekiro: Shadows Die Twice",
        "Genre": "Souls-like Difficult Action Singleplayer Ninja",   
        "originalPrice": 1290000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2019,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game06": {
        "Name": "Black Myth: Wukong",
        "Genre": "Mythology Action RPG Action Souls-like 3D",   
        "originalPrice": 1299000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2024,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game07": {
        "Name": "God of War",
        "Genre": "Action Singleplayer Story-Rich Mythology 3D",   
        "originalPrice": 1159000,
        "Sale": 0.5,
        "onSale": true,
        "yearRelease": 2022,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game08": {
        "Name": "The Last of Us Part I",
        "Genre": "Story-Rich Post-apocalyptic Zombies Shooter",   
        "originalPrice": 1399000,
        "Sale": 0.2,
        "onSale": true,
        "yearRelease": 2023,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game09": {
        "Name": "DEATH STRANDING",
        "Genre": "Story-Rich Open-World Walking-Simulator Sci-fi",   
        "originalPrice": 690000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2022,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game10": {
        "Name": "Manor Lords",
        "Genre": "Strategy City-Builder Base-Building Simulation",   
        "originalPrice": 499000,
        "Sale": 0.35,
        "onSale": true,
        "yearRelease": 2024,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game11": {
        "Name": "Factorio",
        "Genre": "Automation Base-Building Resource-Management",   
        "originalPrice": 450000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2020,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game12": {
        "Name": "Broken Arrow",
        "Genre": "Strategy RTS",   
        "originalPrice": 199000,
        "Sale": 0.1,
        "onSale": true,
        "yearRelease": 2025,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game13": {
        "Name": "Dune: Awaking",
        "Genre": "MMO Survival Open-World",   
        "originalPrice": 790000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2025,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game14": {
        "Name": "ULTRAKILL",
        "Genre": "Fast-Paced Shooter FPS Blood",   
        "originalPrice": 321000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2020,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game15": {
        "Name": "DOOM: The Dark Ages",
        "Genre": "Action FPS Dark-Fantasy Gore",   
        "originalPrice": 1630000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2025,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game16": {
        "Name": "Cyberpunk: 2077",
        "Genre": "Action FPS Open-World RPG",   
        "originalPrice": 990000,
        "Sale": 0.35,
        "onSale": true,
        "yearRelease": 2020,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game17": {
        "Name": "The Witcher 3: Wild Hunt",
        "Genre": "Open-World RPG",   
        "originalPrice": 660000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2015,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game18": {
        "Name": "Stellaris",
        "Genre": "Strategy Sci-fi Space Grand-Strategy",   
        "originalPrice": 664000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2016,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game19": {
        "Name": "Hearts of Iron IV",
        "Genre": "Strategy War Grand-Strategy",   
        "originalPrice": 830000,
        "Sale": 0.35,
        "onSale": false,
        "yearRelease": 2016,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    },
    "game20": {
        "Name": "Forza Horizon 5",
        "Genre": "Open-World Racing Multiplayer",   
        "originalPrice": 990000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2021,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game21": {
        "Name": "Red Dead Redemption 2",
        "Genre": "Open-World Story-Rich Adventure",   
        "originalPrice": 1359000,
        "Sale": 0.75,
        "onSale": true,
        "yearRelease": 2019,
        getPrice: function(){ // 
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); // 
        }
    }
}