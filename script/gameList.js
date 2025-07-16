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
        "Genre": "Colony-Sim Base-Building Survival Strategy", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 445000,
        "Sale": 0.2,
        "onSale": true,
        "yearRelease": 2018,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game03": {
        "Name": "Oxygen Not Included",
        "Genre": "Colony-Sim Base-Building Survival", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 220000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2018,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game04": {
        "Name": "ELDEN RING",
        "Genre": "Souls-like Open-World Dark-Fantasy RPG", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 990000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2022,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game05": {
        "Name": "Sekiro: Shadows Die Twice",
        "Genre": "Souls-like Difficult Action Singleplayer Ninja", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 1290000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2019,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game06": {
        "Name": "Black Myth: Wukong",
        "Genre": "Mythology Action RPG Action Souls-like 3D", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 1299000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2024,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game07": {
        "Name": "God of War",
        "Genre": "Action Singleplayer Story-Rich Mythology 3D", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 1159000,
        "Sale": 0.5,
        "onSale": true,
        "yearRelease": 2022,
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
    "game08": {
        "Name": "The Last of Us Part I",
        "Genre": "Story-Rich Post-apocalyptic Zombies Shooter", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 1399000,
        "Sale": 0.2,
        "onSale": true,
        "yearRelease": 2023,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game09": {
        "Name": "DEATH STRANDING",
        "Genre": "Story-Rich Open-World Walking-Simulator Sci-fi", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 690000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2022,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game10": {
        "Name": "Manor Lords",
        "Genre": "Strategy City-Builder Base-Building Simulation", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 499000,
        "Sale": 0.35,
        "onSale": true,
        "yearRelease": 2024,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game11": {
        "Name": "Factorio",
        "Genre": "Automation Base-Building Resource-Management", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 450000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2020,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game12": {
        "Name": "Broken Arrow",
        "Genre": "Strategy RTS", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 199000,
        "Sale": 0.1,
        "onSale": true,
        "yearRelease": 2025,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game13": {
        "Name": "Dune: Awaking",
        "Genre": "MMO Survival Open-World", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 790000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2025,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game14": {
        "Name": "ULTRAKILL",
        "Genre": "Fast-Paced Shooter FPS Blood", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 321000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2020,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game15": {
        "Name": "DOOM: The Dark Ages",
        "Genre": "Action FPS Dark-Fantasy Gore", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 1630000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2025,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game16": {
        "Name": "Cyberpunk: 2077",
        "Genre": "Action FPS Open-World RPG", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 990000,
        "Sale": 0.35,
        "onSale": true,
        "yearRelease": 2020,
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
    "game17": {
        "Name": "The Witcher 3: Wild Hunt",
        "Genre": "Open-World RPG", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 660000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2015,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game18": {
        "Name": "Stellaris",
        "Genre": "Strategy Sci-fi Space Grand-Strategy", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 664000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2016,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game19": {
        "Name": "Hearts of Iron IV",
        "Genre": "Strategy War Grand-Strategy", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 830000,
        "Sale": 0.35,
        "onSale": false,
        "yearRelease": 2016,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    },
    "game20": {
        "Name": "Forza Horizon 5",
        "Genre": "Open-World Racing Multiplayer", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 990000,
        "Sale": 0.2,
        "onSale": false,
        "yearRelease": 2021,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
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
        "Genre": "Open-World Story-Rich Adventure", //Dung string.split de tach ra thanh cac genre rieng
        "originalPrice": 1359000,
        "Sale": 0.75,
        "onSale": true,
        "yearRelease": 2019,
        getPrice: function(){ //Ham dung de lay gia cua 1 tua game
            if(this.onSale == true){
                return this.originalPrice * (1-this.Sale);
            }
            return this.originalPrice;
        },
        getGenre: function(){
            return this.Genre.split(" "); //Tra ve mot Mang cac string
        }
    }
}