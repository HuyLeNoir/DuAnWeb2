//-------------------------------------------------Game list------------------------------------------------------------------//
const gameList = {
  //gameList kieu object
  game01: {
    Img: "./Asset/elden ring.jpg",
    Name: "Left 4 Dead 2",
    Genre: "Action Zombies Co-op FPS Multiplayer Shooter", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 200000,
    Sale: 0.5,
    onSale: true,
    yearRelease: 2009,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot mang cac string
    },
  },
  game02: {
    Img: "./Asset/elden ring.jpg",
    Name: "RimWorld",
    Genre: "Colony-Sim Base-Building Survival Strategy", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 356.0,
    Sale: 0.2,
    onSale: true,
    yearRelease: 2018,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game03: {
    Img: "./Asset/elden ring.jpg",
    Name: "Oxygen Not Included",
    Genre: "Simulation Adventure Open-World Survival", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 220000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2018,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game04: {
    Img: "./Asset/elden ring.jpg",
    Name: "ELDEN RING",
    Genre: "Souls-like Open-World Dark-Fantasy RPG", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 990000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2022,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game05: {
    Img: "./Asset/Ultrakill.jpg",
    Name: "Sekiro: Shadows Die Twice",
    Genre: "Souls-like Difficult Action Single-player Ninja", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 1290000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2019,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game06: {
    Img: "./Asset/no man sky.jpg",
    Name: "Far Cry® 4",
    Genre: "Combination Act Adventure Open World", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 495000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2014,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game07: {
    Img: "./Asset/projectzomboid.jpg",
    Name: "God of War",
    Genre: "Action Single-player Story-Rich Mythology 3D", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 1399000,
    Sale: 0.5,
    onSale: true,
    yearRelease: 2022,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot mang cac string
    },
  },
  game08: {
    Img: "./Asset/pubg.jpg",
    Name: "The Last of Us Part I",
    Genre: "Story-Rich Post-apocalyptic Zombies Shooter", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 1399000,
    Sale: 0.2,
    onSale: true,
    yearRelease: 2023,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game09: {
    Img: "./Asset/stellar blade.webp",
    Name: "DEATH STRANDING",
    Genre: "Story-Rich Open-World Walking-Simulator Sci-fi", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 690000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2022,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game10: {
    Img: "./Asset/stellaris.jpg",
    Name: "Manor Lords",
    Genre: "Strategy City-Builder Base-Building Simulation", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 499000,
    Sale: 0.35,
    onSale: true,
    yearRelease: 2024,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game11: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Factorio",
    Genre: "Automation Base-Building Resource-Management", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 450000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2020,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game12: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Broken Arrow",
    Genre: "Strategy RTS", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 585000,
    Sale: 0.1,
    onSale: true,
    yearRelease: 2025,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game13: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Dune: Awakening",
    Genre: "MMO Survival Open-World", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 790000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2025,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game14: {
    Img: "./Asset/blackmythwukong.png",
    Name: "ULTRAKILL",
    Genre: "Fast-Paced Shooter FPS Blood", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 321000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2020,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game15: {
    Img: "./Asset/blackmythwukong.png",
    Name: "DOOM: The Dark Ages",
    Genre: "Action FPS Dark-Fantasy Gore", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 1630000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2025,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game16: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Cyberpunk: 2077",
    Genre: "Action FPS Open-World RPG", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 990000,
    Sale: 0.35,
    onSale: true,
    yearRelease: 2020,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot mang cac string
    },
  },
  game17: {
    Img: "./Asset/blackmythwukong.png",
    Name: "The Witcher 3: Wild Hunt",
    Genre: "Open-World RPG", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 660000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2015,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game18: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Stellaris",
    Genre: "Strategy Sci-fi Space Grand-Strategy", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 664000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2016,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game19: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Hearts of Iron IV",
    Genre: "Strategy War Grand-Strategy", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 830000,
    Sale: 0.35,
    onSale: false,
    yearRelease: 2016,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game20: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Forza Horizon 5",
    Genre: "Open-World Racing Multiplayer", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 990000,
    Sale: 0.2,
    onSale: false,
    yearRelease: 2021,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
  game21: {
    Img: "./Asset/blackmythwukong.png",
    Name: "Red Dead Redemption 2",
    Genre: "Open-World Story-Rich Adventure", //Dung string.split de tach ra thanh cac genre rieng
    originalPrice: 1359000,
    Sale: 0.75,
    onSale: true,
    yearRelease: 2019,
    getPrice: function () {
      //Ham dung de lay gia cua 1 tua game
      if (this.onSale == true) {
        return this.originalPrice * (1 - this.Sale);
      }
      return this.originalPrice;
    },
    getGenre: function () {
      return this.Genre.split(" "); //Tra ve mot Mang cac string
    },
  },
};
