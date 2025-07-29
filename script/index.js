//-------------------------------------------------Global DECLARATION------------------------------------------------------------------//
const container = document.querySelector(".AG_container");
const dialog = document.getElementById("cart-Detail");
const nav = document.getElementsByTagName("nav")[0];
let navOpen = false;
let currentIndex = 0;
let maxCardShow;
let barAmount;
let total = 0;
let currentNewsAmount = 0;
const gameList = {
    //gameList kieu object
    game01: {
        Developer: "Valve",
        Publisher: "Valve",
        minimumRequirements: {
            OS: "Windows® 7 32/64-bit / Vista 32/64 / XP",
            Processor: "Pentium 4 3.0GHz",
            Memory: "2 GB RAM",
            Graphics:
                "Video card with 128 MB, Shader model 2.0. ATI X800, NVidia 6600 or better",
            DirectX: "Version 9.0c",
            Storage: "13 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 7 32/64-bit / Vista 32/64 / XP",
            Processor: "Intel Core 2 Duo 2.4GHz",
            Memory: "2 GB RAM",
            Graphics:
                "Video Card Shader model 3.0. NVidia 7600, ATI X1600 or better",
            DirectX: "Version 9.0c",
            Storage: "13 GB available space",
        },
        sideDescription:
            "Set in a zombie apocalypse, Left 4 Dead 2 (Left 4 Dead 2) is the highly anticipated sequel to Left 4 Dead, the award-winning co-op game of 2008. This first-person co-op horror shootertakes you and your teammates through the cities, graveyards and swamps of the Deep South, from Savannah to New Orleans across",
        coverImage: "../Asset/Left 4 Dead 2/cover.jpg",
        dataName: "Left 4 Dead 2",
        displayName: "Left 4 Dead 2",
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
        sideDescription:
            "A sci-fi colony sim driven by an intelligent AI storyteller. Generates stories by simulating psychology, ecology, gunplay, melee combat, climate, biomes, diplomacy, interpersonal relationships, art, medicine, trade, and more.",
        Developer: "Ludeon Studios",
        Publisher: "Ludeon Studios",
        minimumRequirements: {
            OS: "Windows 7",
            Processor: "Core 2 Duo",
            Memory: "4 GB RAM",
            DirectX: "Version 9",
            Graphics: "Intel HD Graphics 4000 or other shader model 4.0",
            Storage: "1 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10",
            Processor: "Core 2 Duo",
            Memory: "8 GB RAM",
            DirectX: "Version 9",
            Graphics: "GTX 950",
            Storage: "5 GB available space",
        },
        coverImage: "../Asset/RimWorld/cover.jpg",
        dataName: "RimWorld",
        displayName: "RimWorld",
        Genre: "Colony-Sim Base-Building Survival Strategy", //Dung string.split de tach ra thanh cac genre rieng
        originalPrice: 356000,
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
        sideDescription:
            "Oxygen Not Included is a space-colony simulation game. Deep inside an alien space rock your industrious crew will need to master science, overcome strange new lifeforms, and harness incredible space tech to survive, and possibly, thrive.",
        Developer: "Klei Entertainment",
        Publisher: "Klei Entertainment",
        minimumRequirements: {
            OS: "Windows 7 (64 bit)",
            Processor: "Dual Core 2 GHz",
            Memory: "4 GB RAM",
            Graphics: "Intel HD 4600 (AMD or NVIDIA equivalent)",
            DirectX: "Version 11",
            Storage: "2 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 (64 bit)",
            Processor: "Intel Core i3 3.0 GHz or better",
            Memory: "8 GB RAM",
            Graphics: "NVIDIA GTX 750 Ti / AMD Radeon R7 260X",
            DirectX: "Version 11",
            Storage: "2 GB available space",
        },
        coverImage: "../Asset/Oxygen Not Included/cover.jpg",
        dataName: "Oxygen Not Included",
        displayName: "Oxygen Not Included",
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
        sideDescription:
            "THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        Developer: "FromSoftware, Inc",
        Publisher: "FromSoftware, Inc., Bandai Namco Entertainment",
        minimumRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor: "Intel Core i5-8400 or AMD Ryzen 3 3300X",
            Memory: "12 GB RAM",
            Graphics: "NVIDIA GeForce GTX 1060 3 GB or AMD Radeon RX 580 4 GB",
            DirectX: "Version 12",
            Storage: "60 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10/11 (64-bit)",
            Processor: "Intel Core i7-8700K or AMD Ryzen 5 3600X",
            Memory: "16 GB RAM",
            Graphics:
                "NVIDIA GeForce GTX 1070 8 GB or AMD Radeon RX Vega 56 8 GB",
            DirectX: "Version 12",
            Storage: "60 GB available space",
        },
        coverImage: "../Asset/ELDEN RING/cover.jpg",
        dataName: "ELDEN RING",
        displayName: "ELDEN RING",
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
        sideDescription:
            "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
        Developer: "FromSoftware, Inc.",
        Publisher: "Activision",
        minimumRequirements: {
            OS: "Windows 7 / 8 / 10 (64-bit)",
            Processor: "Intel Core i3-2100 or AMD FX-6300",
            Memory: "4 GB RAM",
            Graphics: "NVIDIA GeForce GTX 760 or AMD Radeon HD 7950",
            DirectX: "Version 11",
            Storage: "25 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 7 / 8 / 10 (64-bit)",
            Processor: "Intel Core i5-2500K or AMD Ryzen 5 1400",
            Memory: "8 GB RAM",
            Graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 570",
            DirectX: "Version 11",
            Storage: "25 GB available space",
        },
        coverImage: "../Asset/Sekiro Shadows Die Twice/cover.jpg",
        dataName: "Sekiro Shadows Die Twice",
        displayName: "Sekiro: Shadows Die Twice",
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
        Developer: "Ubisoft Montreal, Red Storm, Shanghai, Toronto, Kiev",
        Publisher: "Ubisoft",
        sideDescription:
            "Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother’s dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.",
        minimumRequirements: {
            OS: "Windows 7 / 8 / 10 (64-bit)",
            Processor: "Intel Core i3-2100 or AMD FX-6300",
            Memory: "4 GB RAM",
            Graphics: "NVIDIA GeForce GTX 760 or AMD Radeon HD 7950",
            DirectX: "Version 11",
            Storage: "25 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 7 / 8 / 10 (64-bit)",
            Processor: "Intel Core i5-2500K or AMD Ryzen 5 1400",
            Memory: "8 GB RAM",
            Graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 570",
            DirectX: "Version 11",
            Storage: "25 GB available space",
        },
        coverImage: "../Asset/Far Cry 4/cover.jpg",
        dataName: "Far Cry 4",
        displayName: "Far Cry® 4",
        Genre: "Co-op Action Adventure Open World", //Dung string.split de tach ra thanh cac genre rieng
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
        Developer: "Santa Monica Studio, Jetpack Interactive",
        Publisher: "PlayStation Publishing LLC",
        sideDescription:
            "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        minimumRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor:
                "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
            Memory: "8 GB RAM",
            Graphics: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
            DirectX: "Version 11",
            Storage: "70 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor:
                "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
            Memory: "8 GB RAM",
            Graphics: "NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)",
            DirectX: "Version 11",
            Storage: "70 GB available space",
        },
        coverImage: "../Asset/God of War/cover.jpg",
        dataName: "God of War",
        displayName: "God of War",
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
        Developer: "Naughty Dog LLC, Iron Galaxy Studios",
        Publisher: "PlayStation Publishing LLC",
        sideDescription:
            "Discover the award-winning game that inspired the critically acclaimed television show. Guide Joel and Ellie through a post-apocalyptic America, and encounter unforgettable allies and enemies in The Last of Us™.",
        minimumRequirements: {
            OS: "Windows 10 (Version 1909 or Newer, 64-bit)",
            Processor: "AMD Ryzen 5 1500X or Intel Core i7-4770K",
            Memory: "16 GB RAM",
            Graphics:
                "AMD Radeon RX 470 / RX 6500 XT (4 GB) or NVIDIA GeForce GTX 970 / GTX 1050 Ti (4 GB)",
            Storage: "100 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 (Version 1909 or Newer, 64-bit)",
            Processor: "AMD Ryzen 5 3600X or Intel Core i7-8700",
            Memory: "16 GB RAM",
            Graphics:
                "AMD Radeon RX 5700 XT / RX 6600 XT (8 GB) or NVIDIA GeForce RTX 2070 SUPER / RTX 3060 (8 GB)",
            Storage: "100 GB available space",
        },
        coverImage: "../Asset/The Last of Us Part I/cover.jpg",
        dataName: "The Last of Us Part I",
        displayName: "The Last of Us™ Part I",
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
        Developer: "KOJIMA PRODUCTIONS",
        Publisher: "505 Games",
        sideDescription:
            "From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR’S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?",
        minimumRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor: "Intel Core i5-3470 or AMD Ryzen 3 1200",
            Memory: "8 GB RAM",
            Graphics: "GeForce GTX 1050 (4 GB) or AMD Radeon RX 560 (4 GB)",
            DirectX: "Version 12",
            Storage: "80 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor: "Intel Core i7-3770 or AMD Ryzen 5 1600",
            Memory: "8 GB RAM",
            Graphics: "GeForce GTX 1060 (6 GB) or AMD Radeon RX 590",
            DirectX: "Version 12",
            Storage: "80 GB available space",
        },
        coverImage: "../Asset/DEATH STRANDING/cover.jpg",
        dataName: "DEATH STRANDING",
        displayName: "DEATH STRANDING",
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
        Developer: "Slavic Magic",
        Publisher: "Hooded Horse",
        sideDescription:
            "Manor Lords is a medieval strategy game featuring in-depth city building, large-scale tactical battles, and complex economic and social simulations. Rule your lands as a medieval lord – the seasons pass, the weather changes, and cities rise and fall.",
        minimumRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor:
                "Intel Core i5-4670 (quad-core) or AMD FX-4350 (quad-core)",
            Memory: "8 GB RAM",
            Graphics:
                "NVIDIA GeForce GTX 1050 (2 GB) or AMD Radeon RX 460 (4 GB) or Intel Arc A380 (6 GB)",
            DirectX: "Version 12",
            Storage: "15 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 (64-bit)",
            Processor:
                "Intel Core i5-7600 (quad-core) or AMD Ryzen 3 2200G (quad-core)",
            Memory: "12 GB RAM",
            Graphics:
                "NVIDIA GeForce GTX 1060 (6 GB) or AMD Radeon RX 580 (8 GB) or Intel Arc A580 (8 GB)",
            DirectX: "Version 12",
            Storage: "15 GB available space",
        },
        coverImage: "../Asset/Manor Lords/cover.jpg",
        dataName: "Manor Lords",
        displayName: "Manor Lords",
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
        Developer: "Wube Software LTD.",
        Publisher: "Wube Software LTD.",
        sideDescription:
            "Factorio is a game about building and creating automated factories to produce items of increasing complexity, within an infinite 2D world. Use your imagination to design your factory, combine simple elements into ingenious structures, and finally protect it from the creatures who don't really like you.",
        minimumRequirements: {
            OS: "Windows 10 / 11",
            Processor: "Quad core 3 GHz+",
            Memory: "8 GB RAM",
            Graphics:
                "DirectX 11 capable GPU with 1 GB VRAM - GeForce GTX 750 Ti, Radeon R7 360 or Intel UHD Graphics 730",
            DirectX: "Version 11",
            Storage: "5 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 / 11",
            Processor: "Quad core 4 GHz+ (from 2020 or newer)",
            Memory: "16 GB RAM",
            Graphics:
                "DirectX 11 capable GPU with 4 GB VRAM - GeForce GTX 1050 Ti, Radeon RX 570, Intel Arc",
            DirectX: "Version 11",
            Storage: "10 GB available space",
        },
        coverImage: "../Asset/Factorio/cover.jpg",
        dataName: "Factorio",
        displayName: "Factorio",
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
        Developer: "Steel Balalaika",
        Publisher: "Slitherine Ltd.",
        sideDescription:
            "Broken Arrow is a large-scale real-time modern warfare tactics game that combines the complexity of joint-forces wargaming with action-packed real-time tactics gameplay.",
        minimumRequirements: {
            OS: "Windows 10 x64",
            Processor:
                "Intel Core i7-6700 (4×3400) / AMD Ryzen 3 2200G (4×3500)",
            Memory: "8 GB RAM",
            DirectX: "Version 11",
            Graphics: "GeForce GTX 1650 (4 GB) / Radeon RX 570 (4 GB)",
            Storage: "85 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 x64",
            Processor:
                "Intel Core i9-9900k (8×3600) / AMD Ryzen 7 5800X3D (8×3400)",
            Memory: "16 GB RAM",
            DirectX: "Version 11",
            Graphics: "GeForce RTX 3080 (10 GB) / Radeon RX 6800 XT (16 GB)",
            Storage: "85 GB available space",
        },

        coverImage: "../Asset/Broken Arrow/cover.jpg",
        dataName: "Broken Arrow",
        displayName: "Broken Arrow",
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
        Developer: "Funcom",
        Publisher: "Funcom",
        sideDescription:
            "Rise from survival to greatness and challenge the power of an Imperium in Dune: Awakening, a multiplayer survival game on a massive scale. Survive the sandworm, craft your ornithopter, build a fortress, and ascend to power on an open world Arrakis shared with hundreds of other players.",
        minimumRequirements: {
            OS: "Windows 10 64-bit (or newer)",
            Processor: "Intel Core i5-7400 / AMD Ryzen 3 1200",
            Memory: "16 GB RAM",
            DirectX: "Version 12",
            Graphics:
                "NVIDIA GeForce GTX 1060 (6 GB) / AMD Radeon 5600XT (6 GB)",
            Storage: "60 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 64-bit (or newer)",
            Processor: "Intel Core i7-10700K / AMD Ryzen 5 2600X",
            Memory: "16 GB RAM",
            DirectX: "Version 12",
            Graphics:
                "NVIDIA GeForce RTX 3070 (8 GB) / AMD Radeon 6700XT (12 GB)",
            Storage: "75 GB available space",
        },

        coverImage: "../Asset/Dune Awakening/cover.jpg",
        dataName: "Dune Awakening",
        displayName: "Dune: Awakening",
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
        Developer: 'Arsi "Hakita" Patala',
        Publisher: "New Blood Interactive",
        sideDescription:
            "ULTRAKILL is a fast-paced ultraviolent retro FPS combining the skill-based style scoring from character action games with unadulterated carnage inspired by the best shooters of the '90s. Rip apart your foes with varied destructive weapons and shower in their blood to regain your health.",
        minimumRequirements: {
            OS: "Windows 10",
            Processor: "2.4 GHz Dual Core Processor Or Higher",
            Memory: "4 GB RAM",
            DirectX: "Version 11",
            Graphics: "GeForce GTX 560 Or Equivalent",
            Storage: "3 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 11",
            Processor: "3.1 GHz Quad Core Processor Or Higher",
            Memory: "8 GB RAM",
            DirectX: "Version 12",

            Graphics: "Geforce GTX 970 Or Equivalent",
            Storage: "3 GB available space",
        },

        coverImage: "../Asset/ULTRAKILL/cover.jpg",
        dataName: "ULTRAKILL",
        displayName: "ULTRAKILL",
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
        Developer: "id Software",
        Publisher: "Bethesda Softworks",
        sideDescription:
            "DOOM: The Dark Ages is the prequel to the critically acclaimed DOOM (2016) and DOOM Eternal that tells an epic cinematic story worthy of the DOOM Slayer’s legend. Players will step into the blood-stained boots of the DOOM Slayer, in this never-before-seen dark and sinister medieval war against Hell.",
        minimumRequirements: {
            OS: "Windows 10 64-Bit / Windows 11 64-Bit",
            Processor:
                "AMD Zen 2 or Intel 10th Gen CPU @3.2Ghz, 8 cores / 16 threads (e.g. Ryzen 7 3700X or Core i7 10700K)",
            Memory: "16 GB RAM",
            DirectX: "Version 12",
            Graphics:
                "Raytracing-capable GPU, 8GB VRAM (e.g. RTX 2060 SUPER or RX 6600)",
            Storage: "100 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 64-Bit / Windows 11 64-Bit",
            Processor:
                "AMD Zen 3 or Intel 12th Gen CPU @3.2Ghz, 8 cores / 16 threads (e.g. Ryzen 7 5700X or Core i7 12700K)",
            Memory: "32 GB RAM",
            DirectX: "Version 12",
            Graphics:
                "Raytracing-capable GPU, 10GB VRAM (e.g. RTX 3080 or RX 6800)",
            Storage: "100 GB available space",
        },

        coverImage: "../Asset/DOOM The Dark Ages/cover.jpg",
        dataName: "DOOM The Dark Ages",
        displayName: "DOOM: The Dark Ages",
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
        Developer: "CD Projekt Red",
        Publisher: "CD Projekt Red",
        sideDescription:
            "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
        minimumRequirements: {
            OS: "64-bit Windows 10",
            Processor: "Core i7-6700 or Ryzen 5 1600",
            Memory: "12 GB RAM",
            DirectX: "Version 12",
            Graphics: "GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380",
            Storage: "70 GB available space",
        },
        recommendedRequirements: {
            OS: "64-bit Windows 10",
            Processor: "Core i7-12700 or Ryzen 7 7800X3D",
            Memory: "16 GB RAM",
            DirectX: "Version 12",
            Graphics: "GeForce RTX 2060 SUPER or Radeon RX 5700 XT or Arc A770",
            Storage: "70 GB available space",
        },

        coverImage: "../Asset/Cyberpunk 2077/cover.jpg",
        dataName: "Cyberpunk 2077",
        displayName: "Cyberpunk: 2077",
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
        Developer: "CD Projekt Red",
        Publisher: "CD Projekt Red",
        sideDescription:
            "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
        minimumRequirements: {
            OS: "64-bit Windows 7 / 8 / 8.1",
            Processor: "Intel Core i5-2500K / AMD A10-5800K",
            Memory: "6 GB RAM",
            DirectX: "Version 11",
            Graphics: "GeForce GTX 660 / Radeon HD 7870",
            Storage: "50 GB available space",
        },
        recommendedRequirements: {
            OS: "64-bit Windows 10 / 11",
            Processor: "Intel Core i5-7400 / Ryzen 5 1600",
            Memory: "8 GB RAM",
            DirectX: "Version 12",
            Graphics: "GeForce GTX 1070 / Radeon RX 480",
            Storage: "50 GB available space",
        },

        coverImage: "../Asset/The Witcher 3 Wild Hunt/cover.jpg",
        dataName: "The Witcher 3 Wild Hunt",
        displayName: "The Witcher 3: Wild Hunt",
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
        Developer: "Paradox Development Studio",
        Publisher: "Paradox Interactive",
        sideDescription:
            "Explore a galaxy full of wonders in this sci-fi grand strategy game from Paradox Development Studios. Interact with diverse alien races, discover strange new worlds with unexpected events and expand the reach of your empire. Each new adventure holds almost limitless possibilities.",
        minimumRequirements: {
            OS: "Windows 10 Home 64 Bit",
            Processor: "Intel i3-530 / AMD FX-6350",
            Memory: "4 GB RAM",
            DirectX: "Version 9.0c",
            Graphics:
                "GeForce GTX 460 / Radeon HD 5870 / Radeon RX Vega 11 / Intel HD Graphics 4600",
            Storage: "10 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 Home 64 Bit",
            Processor: "Intel i5-3570K / AMD Ryzen 5 2400G",
            Memory: "4 GB RAM",
            DirectX: "Version 12",
            Graphics: "GeForce GTX 560 Ti / Radeon R7 370",
            Storage: "10 GB available space",
        },

        coverImage: "../Asset/Stellaris/cover.jpg",
        dataName: "Stellaris",
        displayName: "Stellaris",
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
        Developer: "Paradox Development Studio",
        Publisher: "Paradox Interactive",
        sideDescription:
            "Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II; the most engaging conflict in world history.",
        minimumRequirements: {
            OS: "Windows 10 Home 64 Bit",
            Processor: "Intel Core i5 750 / AMD FX 4300",
            Memory: "4 GB RAM",
            DirectX: "Version 9.0c",
            Graphics:
                "GeForce GTX 470 / Radeon HD 5850 / Intel Iris Xe G7 / Radeon RX Vega 11",
            Storage: "2 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 Home 64 Bit",
            Processor: "Intel Core i5 2500K / AMD Ryzen 3 2200G",
            Memory: "6 GB RAM",
            DirectX: "Version 9.0c",
            Graphics: "GeForce GTX 570 / Radeon HD 7970 / Intel Iris Xe G7",
            Storage: "2 GB available space",
        },

        coverImage: "../Asset/Hearts of Iron IV/cover.jpg",
        dataName: "Hearts of Iron IV",
        displayName: "Hearts of Iron IV",
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
        Developer: "Playground Games",
        Publisher: "Xbox Game Studios",
        sideDescription:
            "Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars.",
        minimumRequirements: {
            OS: "Windows 10 version 18362.0 or higher",
            Processor: "Intel i5-4460 / AMD Ryzen 3 1200",
            Memory: "8 GB RAM",
            DirectX: "Version 12",
            Graphics: "GTX 970 / RX 470 / Intel Arc A380",
            Storage: "110 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 version 18362.0 or higher",
            Processor: "Intel i5-8400 / AMD Ryzen 5 1500X",
            Memory: "16 GB RAM",
            DirectX: "Version 12",
            Graphics: "GTX 1070 / RX 590 / Intel Arc A750",
            Storage: "110 GB available space",
        },

        coverImage: "../Asset/Forza Horizon 5/cover.jpg",
        dataName: "Forza Horizon 5",
        displayName: "Forza Horizon 5",
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
        Developer: "Rockstar Games",
        Publisher: "Rockstar Games",
        sideDescription:
            "Winner of over 175 Game of the Year Awards, RDR2 is the epic tale of outlaw Arthur Morgan and the Van der Linde gang across America. Includes Red Dead Online.",
        minimumRequirements: {
            OS: "Windows 10 - 64-bit",
            Processor: "Intel Core i5-2500K / AMD FX-6300",
            Memory: "8 GB RAM",
            DirectX: "Version 12",
            Graphics: "GTX 770 2GB / R9 280 3GB",
            Storage: "150 GB available space",
        },
        recommendedRequirements: {
            OS: "Windows 10 - 64-bit",
            Processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
            Memory: "12 GB RAM",
            DirectX: "Version 12",
            Graphics: "GTX 1060 6GB / RX 480 4GB",
            Storage: "150 GB available space",
        },

        coverImage: "../Asset/Red Dead Redemption 2/cover.jpg",
        dataName: "Red Dead Redemption 2",
        displayName: "Red Dead Redemption 2",
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

const newsList = {
    news1: {
        img: "Asset/News/news1.jpg",
        name: "Forza Horizon 5",
        title: "This Week’s Backstage Vote Features Extreme Speed for All Ages",
        content:
            "The Horizon Backstage goes extreme! This week’s pairs feature a scaled-up version of a famous Hot Wheels car and a retro racer looking for a new time to shine.",
    },
    news2: {
        img: "Asset/News/news2.jpg",
        name: "Team Fortress 2",
        title: "Mann vs. Machine Maps Needed!",
        content:
            "Thirteen years ago, we launched Mann vs. Machine, a chilling cautionary tale where an artificial consciousness tried to take all our jobs. You didn't know it back then, but that was actually a",
    },
    news3: {
        img: "Asset/News/news3.jpg",
        name: "Hades II",
        title: "Spread Fear in The Unseen Update",
        content:
            "Our third Major Update for Hades II is finally here, focused on expanding core combat, Guardian encounters, and character relationships, with lots of new visual flair!",
    },
    news4: {
        img: "Asset/News/news4.jpg",
        name: "Apex Legends™",
        title: "Latest Apex Legends Matchmaking Update: 2025/07/28",
        content:
            "Heads up, legends: at 11 am PT, we'll be starting a matchmaking test in Apex Legends that restricts Masters and Predators to be matched with Diamond 1 and above.",
    },
    news5: {
        img: "Asset/News/news5.jpg",
        name: "Rust",
        title: "COMMUNITY UPDATE 266",
        content:
            "Global Warfare is back! Next Home-Brew announcement, Rust art, parasites, giant recyclers, and more!",
    },
    news6: {
        img: "Asset/News/news6.jpg",
        name: "ELDEN RING NIGHTREIGN",
        title: "ELDEN RING NIGHTREIGN - A new Everdark cycle shall begin",
        content:
            "On July 31, 2025, a new Everdark cycle shall begin; the enhanced Nightlords Tricephalos, Augur, Equilibrious Beast and Fissure in the Fog will soon unleash their darkest powers upon Limveld.",
    },
    news7: {
        img: "Asset/News/news7.jpg",
        name: "Palworld",
        title: "Palworld v0.6.0: Tides of Terraria has been released!",
        content:
            "▼Terraria Collab! ・Terraria Dungeon ⤷ A unique dungeon featuring enemies from Terraria has been added! Collect materials in the dungeon to create equipment from the world of Terraria!",
    },
    news8: {
        img: "Asset/News/news8.jpg",
        name: "Umasume",
        title: "New Trainees and Support Cards!",
        content:
            "In the scout spotlight are 3-star trainees Tokai Teio and Mejiro McQueen, now sporting new racewear! SSR Support Cards featuring Kitasan Black and Satono Diamond also make their appearance as a new story event begins: Brand-New Friend! Collect event points to earn an exclusive Support Card, title, and more!",
    },
    news9: {
        img: "Asset/News/news9.jpg",
        name: "Cyberpunk: 2077",
        title: "Update 2.3 Patch Notes",
        content:
            "Experience Night City in a whole new way — this patch introduces 4 new vehicles, the AutoDrive feature, self-driving Delamain cabs and more! It also contains updates for CrystalCoat™ and Photo Mode, as well as support for AMD FSR 3.1 Frame Generation, Intel XeSS 2.0 and HDR10+ Gaming, among others.",
    },
    news10: {
        img: "Asset/News/news10.jpg",
        name: "Kingdom Come: II",
        title: "Explore Kingdom Come: Deliverance II - here's your ultimate guide!",
        content:
            "Embark on a journey through the tumultuous world of Kingdom Come: Deliverance II with our specially curated guide in collaboration with IGN.",
    },
    news11: {
        img: "Asset/News/news11.jpg",
        name: "CS2",
        title: "Season Two: Episode One",
        content:
            "It's time to start working toward your Season Three Medal. As before, the color of your medal will correspond to the highest CS Rating achieved during the season, and the bars will reflect your total wins, with one bar for every 25 (up to five bars). To be eligible for a medal, you'll need an account in good standing, 25 Premier match wins, and an active CSR at the end of the season.",
    },
    news12: {
        img: "Asset/News/news12.jpg",
        name: "Naraka: Bladepoint",
        title: "NARAKA: BLADEPOINT Update – June 18th, 2025",
        content:
            "The servers of NARAKA: BLADEPOINT will be suspended for maintenance from Jul. 8th, 2025 23:00 (UTC) to Jul. 9th, 2025 04:00 (UTC). We suggest you log out in advance and enter the game again after maintenance is complete.",
    },
    news13: {
        img: "Asset/News/news13.jpg",
        name: "Dead by Daylight",
        title: "9.1.0 | PTB Patch Notes",
        content:
            "Due to known technical issues, Michonne will not be playable in the PTB. However, her three unique Perks are available to test. Players will still be able to see her in the Lobby and in the Store, but will not be able to select her to play in a Trial. These issues will be resolved and Michonne will be fully-playable when version 9.1.0 update releases on July 29.",
    },
    news14: {
        img: "Asset/News/news14.jpg",
        name: "F1®2025",
        title: "APXGP Team Icons",
        content:
            "Experience the thrill of F1® THE MOVIE with APXGP in My Team or Driver Career mode, only when you buy or upgrade to the Iconic Edition by July 11!",
    },
    news15: {
        img: "Asset/News/news15.jpg",
        name: "HI IV",
        title: "Dev Corner | Faction Dynamics Part 2",
        content:
            "Welcome to another Developer Corner. Let’s start with a reminder, or clarification, so you have a better idea of what kind of feedback we’re looking for.",
    },
    news16: {
        img: "Asset/News/news16.jpg",
        name: "Ready or Not",
        title: "VOID Interactive Clarification on Content Changes",
        content:
            "We recently shared that Ready or Not’s PC version underwent minor content changes to support stability and align with policies enforced by global platforms and age rating bodies. These adjustments were made to ensure a smooth global launch across platforms — while fully preserving the game’s tone, themes, and intensity.",
    },
};
//-------------------------------------------------FUNCTION------------------------------------------------------------------//
function loadDropdown() {
    const buttonList = document.querySelectorAll(".sort-click");
    const menuList = document.querySelectorAll(".dropdown-menu");
    buttonList.forEach(function (button) {
        button.onclick = function () {
            const menu = button.nextElementSibling;
            const chevron = button.lastElementChild;
            if (menu.classList.contains("show")) {
                //dong menu
                chevron.style.transform = "rotate(0deg)";
                menu.classList.remove("show");
            } else {
                //show menu
                menuList.forEach((menu, index) => {
                    menu.classList.remove("show"); //neu co 1 menu khac dang show thi reset vi tri cua menu do
                    buttonList[index].lastElementChild.style.transform =
                        "rotate(0deg)";
                });
                chevron.style.transform = "rotate(180deg)";
                menu.classList.add("show");
            }
        };
    });
}
function loadNews() {
    const loadMore = document.getElementById("loadMore");
    const slides = document.querySelector(".news-container");
    let slideIndex = 0;
    const dotList = document.querySelectorAll(".dot");
    // Ham chuyen slide khi an nut dieu huong ben duoi
    function goTo(index) {
        dotList.forEach(function (d) {
            d.classList.remove("active");
        });
        dotList[index].classList.add("active");
        slides.style.transform = `translateX(-${(100 / 3) * index}%)`;
        slideIndex = index;
    }
    // them su kien onlick
    dotList.forEach(function (dot, index) {
        dot.onclick = function () {
            goTo(index);
        };
    });
    // Lam cho news tu truot sau 5s
    setInterval(function () {
        // modulo cho dotList de currentIndex quay ve 0 khi da di toi phan tu cuoi
        slideIndex = (slideIndex + 1) % dotList.length;
        goTo(slideIndex);
    }, 5000);
    function loadNigga(current, step){
        if(currentNewsAmount + step > Object.keys(newsList).length){
            step = Object.keys(newsList).length - currentNewsAmount;
            console.log(step);
        }
        const newsContainer = document.querySelector(".allNews");
        for (let i = current+1; i <= current+step; i++) {
            const news = newsList["news" + i]; //lay news hien tai
            newsContainer.innerHTML += `<div class="newsCard">
                <div class="imgFrame">
                    <img src="Asset/News/news${i}.jpg">
                </div>
                <div class="newsCardContent">
                    <div class="header">
                        <span class="topic">Event</span>
                        <span class="game-name">${news.name}</span>
                        <span class="time">3 days ago</span>
                    </div>
                    <h4>${news.title}</h4>
                    <p>${news.content}</p>
                </div>
            </div>`;
        }
        currentNewsAmount += step;
        if(currentNewsAmount >= Object.keys(newsList).length){
            loadMore.style.display = "none";
        }
        
}
    loadNigga(0, 8); //ban dau co 0 news, load 8 news
    loadMore.onclick = () => {
    loadNigga(currentNewsAmount, 4);
}
}

function next(button) {
    window.location.href = "recovery1.html";
}
function loadCart() {
    const cartContainer = document.querySelector(".Container");
    const sumary = document.querySelector(".sumary");
    const detail = document.querySelector(".detail");
    const totalHTML = document.querySelector("#total > span");
    cartContainer.innerHTML = "";
    detail.innerHTML = "";
    if (localStorage.length == 0) {
        cartContainer.innerHTML = "<h2>Your cart is empty</h2>";
    }
    Object.keys(localStorage).forEach((key) => {
        console.log(gameList[key]);
        cartContainer.innerHTML += `
                <div class="gamecard3">
                    <div class="gameImgFrame">
                        <img src="${gameList[key].coverImage}" alt="">
                    </div>
                    <div class="Game">
                        <div class="gameInfor">
                            <h1>${gameList[key].displayName}</h1>
                            <p>Plaform: <span>PC/Windows</span></p>
                        </div>
                        <div class="price-game">
                            <button onclick="removeItem('${key}')"><i class="fa-solid fa-trash"></i> <span>Remove</span></button>
                            <div class="price1">
                                <p class="sale">-${
                                    100 * gameList[key].Sale
                                }%</p>
                                <div>
                                    <p class="last-price">${gameList[
                                        key
                                    ].originalPrice.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}</p>
                                    <p class="price">${gameList[key]
                                        .getPrice()
                                        .toLocaleString("vi-VN", {
                                            style: "currency",
                                            currency: "VND",
                                        })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        if (gameList[key].onSale === false) {
            //neu game co sale
            cartContainer.lastElementChild
                .querySelector(".price1")
                .classList.add("noSale");
        }

        //>>>>>>>>>>>>>>>>>>>>>>Sumary
        detail.innerHTML += `<p>${gameList[key].displayName}<span>${gameList[
            key
        ]
            .getPrice()
            .toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
            })}</span></p>`;
        total += gameList[key].getPrice();
    });
    totalHTML.innerHTML = total.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
    });
}
function removeItem(gameid) {
    localStorage.removeItem(gameid);
    loadCart();
}

function showNav(element) {
    if (!navOpen) {
        nav.style.height = "auto";
        element.innerHTML = '<i class="fa-solid fa-x"></i>';
        navOpen = true;
    } else {
        nav.style.height = "";
        element.innerHTML = '<i class="fa-solid fa-bars"></i>';
        navOpen = false;
    }
}
function loadBars() {
    const barContainer = document.querySelector(".barContainer");
    const gameCardList = document.querySelectorAll(".GameCard");
    maxCardShow = Math.floor(
        container.clientWidth / gameCardList[0].clientWidth
    );
    barAmount = Math.ceil(gameCardList.length / maxCardShow);
    barContainer.innerHTML = "";
    for (let i = 1; i <= barAmount; i++) {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        barContainer.appendChild(bar);
    }
    barContainer.firstElementChild.classList.add("active");
}
if (window.location.href.includes("home.html")) {
    window.onresize = function () {
        loadBars();
        container.scrollLeft = 0;
        currentIndex = 0;
        checkButtStatus();
    };
}

function updateBar() {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
        bar.classList.remove("active");
    });
    bars[currentIndex].classList.add("active");
}
function nextGame(butt) {
    const gameCardList = document.querySelectorAll(".GameCard");
    if (butt.classList.contains("deActive")) {
        return;
    }
    container.scrollBy({
        left: maxCardShow * gameCardList[0].clientWidth,
        behavior: "smooth",
    });
    currentIndex++;
    updateBar();
    checkButtStatus();
}
function loadGame() {
    //-------------------------------------------------Game page------------------------------------------------------------------//
    const wrapper = document.querySelector(".wrapper");
    const gameID = document.getElementById("gameID").getAttribute("data-id"); //lay game id
    const game = gameList[gameID];
    function loadGameInformation() {
        const requirementsContainer = document.querySelector(".requirements");
        const sideInformation = document.getElementById("sideInformation");
        sideInformation.innerHTML = `<tr>
                <th>Developer:</th>
                <td id="developer"></td>
              </tr>
              <tr>
                <th>Publisher:</th>
                <td id="publisher"></td>
              </tr>
              <tr>
                <th>Genre:</th>
                <td class="genreContainer">
                </td>
              </tr>`;
        requirementsContainer.innerHTML = `
    <h2>System requirement</h2>
      <div class="requirementContainer">
        <div class="minimum">
          <h4>Minimum:</h4>
          <p>Requires a 64-bit processor and operating system</p>
          <p>
            <span class="head">OS:</span>
            <span id="minOS"></span>
          </p>
          <p>
            <span class="head">Processor:</span>
            <span id="minCPU"></span>
          </p>
          <p>
            <span class="head">Memory:</span>
            <span id="minRam"></span>
          </p>
          <p>
            <span class="head">Graphics:</span>
            <span id="minGPU"></span>
          </p>
          <p>
            <span class="head">DirectX:</span>
            <span id="minDirectX"></span>
          </p>
          <p>
            <span class="head">Storage:</span>
            <span id="minStorage"></span>
          </p>
        </div>
        <div class="recommend">
          <h4>Recommended:</h4>
          <p>Requires a 64-bit processor and operating system</p>
          <p>
            <span class="head">OS:</span>
            <span id="recommendOS"></span>
          </p>
          <p>
            <span class="head">Processor:</span>
            <span id="recommendCPU"></span>
          </p>
          <p>
            <span class="head">Memory:</span>
            <span id="recommendRam"></span>
          </p>
          <p>
            <span class="head">Graphics:</span>
            <span id="recommendGPU"></span>
          </p>
          <p>
            <span class="head">DirectX:</span>
            <span id="recommendDirectX"></span>
          </p>
          <p>
            <span class="head">Storage:</span>
            <span id="recommendStorage"></span>
          </p>
        </div></div>`;
        const name = document.getElementById("gameID");
        const buyBackground = document.querySelector(".bg-img");
        const buyName = document.getElementById("buyName");
        const publisher = document.getElementById("publisher");
        const sideDescription = document.getElementById("sideDescription");
        const image = document.getElementById("image");
        const header = document.getElementById("header");
        const developer = document.getElementById("developer");
        const genreContainer = document.querySelector(".genreContainer");
        const minOS = document.getElementById("minOS");
        const minCPU = document.getElementById("minCPU");
        const minRam = document.getElementById("minRam");
        const minGPU = document.getElementById("minGPU");
        const minDirectX = document.getElementById("minDirectX");
        const minStorage = document.getElementById("minStorage");
        const recommendOS = document.getElementById("recommendOS");
        const recommendCPU = document.getElementById("recommendCPU");
        const recommendRam = document.getElementById("recommendRam");
        const recommendGPU = document.getElementById("recommendGPU");
        const recommendDirectX = document.getElementById("recommendDirectX");
        const recommendStorage = document.getElementById("recommendStorage");
        name.innerHTML = game.displayName;
        buyName.innerHTML = "Buy " + game.displayName;
        game.getGenre().forEach((genre) => {
            genreContainer.innerHTML += `<span>${genre}</span>`;
        });
        publisher.innerHTML = game.Publisher;
        developer.innerHTML = game.Developer;
        image.src = `../Asset/${game.dataName}/gallery1.jpg`;
        buyBackground.src = `../Asset/${game.dataName}/header.jpg`;
        header.src = `../Asset/${game.dataName}/header.jpg`;
        sideDescription.innerHTML = game.sideDescription;
        minOS.innerHTML = game.minimumRequirements.OS;
        minCPU.innerHTML = game.minimumRequirements.Processor;
        minRam.innerHTML = game.minimumRequirements.Memory;
        minGPU.innerHTML = game.minimumRequirements.Graphics;
        minDirectX.innerHTML = game.minimumRequirements.DirectX;
        minStorage.innerHTML = game.minimumRequirements.Storage;

        recommendOS.innerHTML = game.recommendedRequirements.OS;
        recommendCPU.innerHTML = game.recommendedRequirements.Processor;
        recommendRam.innerHTML = game.recommendedRequirements.Memory;
        recommendGPU.innerHTML = game.recommendedRequirements.Graphics;
        recommendDirectX.innerHTML = game.recommendedRequirements.DirectX;
        recommendStorage.innerHTML = game.recommendedRequirements.Storage;
    }
    function loadPictures() {
        const pictureContainer = document.querySelector(".pictureContainer");
        for (let i = 1; i <= 7; i++) {
            pictureContainer.innerHTML += `
            <div class="picture">
              <img src="../Asset/${game.dataName}/gallery${i}.jpg" alt="${game.dataName}" />
            </div>
        `;
        }
        loadNavigation();
        loadGallery();
    }
    function loadPrice() {
        const priceContainer = document.querySelector(".priceContainer");
        if (!game.onSale) {
            //neu game khong sale thi them class noSale
            priceContainer.classList.add("noSale");
        }
        priceContainer.innerHTML = `
        <span class="saleAmount">-${game.Sale * 100}%</span>
            <div class="price">
              <p class="originalPrice">${game.originalPrice.toLocaleString(
                  "vi-VN",
                  { style: "currency", currency: "VND" }
              )}</p>
              <h3 class="gamePrice">${game.getPrice().toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
              })}</h3>
        </div>`;
    }

    dialog.onclick = (e) => {
        if (!wrapper.contains(e.target)) {
            dialog.close();
        }
    };
    loadGameInformation();
    loadPictures();
    loadPrice();
}
function showDialog(show) {
    show ? dialog.showModal() : dialog.close();
}
function loadNavigation() {
    const buttonLeft = document.getElementById("left");
    const buttonRight = document.getElementById("right");
    const container = document.getElementById("picContainer");
    let currentTranslate = 0;
    let currentIndex = 0;
    let length = container.childElementCount - 5; //5 la so luong toi da hien thi o gallery
    buttonRight.onclick = function () {
        if (currentIndex != length) {
            currentTranslate -= 25;
            currentIndex++;
            container.style.translate = `${currentTranslate}%`;
        }
    };
    buttonLeft.onclick = function () {
        if (currentIndex != 0) {
            currentTranslate += 25;
            container.style.translate = `${currentTranslate}%`;
            currentIndex--;
        }
    };
}
function loadGallery() {
    const picFrame = document.getElementById("image"); //frame
    const pictureList = document.querySelectorAll(".picture > img"); //all pic
    pictureList.forEach(function (pic) {
        pic.onclick = function () {
            picFrame.src = pic.src; //Anh duoc chon se len frame
            pictureList.forEach(function (pic) {
                pic.classList.remove("Selected");
            });
            pic.classList.add("Selected");
        };
    });
}
function addToCart() {
    if (localStorage.getItem(gameID) !== null) {
        dialog.innerHTML = `<div class="wrapper">
                    <div class="bar">
                    <i class="fa-solid fa-info"></i>
                    <i onclick="showDialog(false)" id="close" class="fa-solid fa-xmark"></i>
                    </div>
                    <h1>This item was already in your cart</h1>
                    <a href="../cart.html">View My Cart</a>
                    </div>`;
    }
    showDialog(true);
    localStorage.setItem(gameID, " ");
    console.log(localStorage);
}

function previousGame(butt) {
    const gameCardList = document.querySelectorAll(".GameCard");
    if (butt.classList.contains("deActive")) {
        return;
    }
    container.scrollBy({
        left: -maxCardShow * gameCardList[0].clientWidth,
        behavior: "smooth",
    });
    currentIndex--;
    updateBar();
    checkButtStatus();
}
function checkButtStatus() {
    //kiem tra trang thai deActive
    const previousButton = document.getElementById("Previous");
    const nextButton = document.getElementById("Next");
    if (currentIndex == 0) {
        previousButton.classList.add("deActive");
    }
    if (currentIndex > 0) {
        previousButton.classList.remove("deActive");
    }
    if (currentIndex < barAmount - 1) {
        nextButton.classList.remove("deActive");
    }
    if (currentIndex == barAmount - 1) {
        nextButton.classList.add("deActive");
    }
}
function redirect(link) {
    window.location.href = "gameHTML/" + link + ".html";
}
function loadHome() {
    Object.keys(gameList).forEach((key) => {
        const game = gameList[key];
        if (game.onSale == true) {
            container.innerHTML += `                
                <div class="GameCard" onclick="redirect('${game.dataName}')">
                    <div class="image-container">
                        <img src="${game.coverImage}" alt="gameCover">
                    </div>
                    <div class="content">
                        <h1>${game.displayName}</h1>
                        <div class="priceGroup">
                            <h6 class="saleAmount">-${game.Sale * 100}%</h6>
                            <div class="price">
                                <p>${game.originalPrice.toLocaleString(
                                    "vi-VN",
                                    { style: "currency", currency: "VND" }
                                )}</p>
                                <p class="sale">${game
                                    .getPrice()
                                    .toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}</p>
                            </div>  
                        </div>
                    </div>
                </div>`;
        }
    });
    loadBars();
}

const games = Object.values(gameList);

//Thêm gamecard
function renderGames(list) {
    container.innerHTML = "";
    list.forEach(function (game) {
        const disc = Math.round(game.Sale * 100);
        const discountPrice = game.getPrice().toLocaleString("vi-VN");
        const originalPrice = game.originalPrice.toLocaleString("vi-VN");

        const priceGroup = game.onSale ? "priceGroup" : "priceGroup noSale";

        const saleTag = `<h6 class="saleAmount">-${disc}%</h6>`;
        const priceBL = `<div class="price">
          <p>${originalPrice} ₫</p>
          <p class="sale">${discountPrice} ₫</p>
      </div>`;

        const gameHTML = `
      <div class="GameCard" onclick="redirect('${game.dataName}')">
        <div class="image-container">
          <img src="./Asset/${game.dataName}/cover.jpg" alt="${game.displayName}">
        </div>
        <div class="content">
          <h1>${game.displayName}</h1>
          <div class="${priceGroup}">
            ${saleTag}
            ${priceBL}
          </div>
        </div>
      </div>
    `;
        container.innerHTML += gameHTML;
    });
    if (list.length == 0) {
        container.innerHTML += "<h1>NO RESULT</h1>";
    }
}

// ======================== Sort =============================
function loadStore() {
    document
        .getElementById("sort-by-name")
        .addEventListener("click", function () {
            const renSort = games.slice().sort(function (a, b) {
                return a.displayName.localeCompare(b.displayName);
            });
            renderGames(renSort);
        });

    document
        .getElementById("sort-by-price")
        .addEventListener("click", function () {
            const renSort = games.slice().sort(function (a, b) {
                return a.getPrice() - b.getPrice();
            });
            renderGames(renSort);
        });

    // SortByYear
    document
        .getElementById("sort-by-release")
        .addEventListener("click", function () {
            const renSort = games.slice().sort(function (a, b) {
                return b.yearRelease - a.yearRelease;
            });
            renderGames(renSort);
        });

    document
        .querySelectorAll("#sort-by-name, #sort-by-price, #sort-by-release")
        .forEach(function (item) {
            item.addEventListener("click", function (e) {
                e.stopPropagation();
                document
                    .querySelectorAll(
                        "#sort-by-name, #sort-by-price, #sort-by-release"
                    )
                    .forEach(function (el) {
                        el.classList.remove("checked");
                    });
                this.classList.add("checked");
                document.getElementById("sortType").textContent =
                    this.textContent.trim();
            });
        });
    // =====================================================================================
    document
        .querySelectorAll(
            "#All, #Action, #RPG, #Souls-like, #Open-World, #Dark-Fantasy, #Adventure"
        )
        .forEach((item) => {
            item.addEventListener("click", function () {
                const isAll = this.id === "All";

                if (isAll) {
                    document
                        .querySelectorAll(
                            "#Action, #RPG, #Souls-like, #Open-World, #Dark-Fantasy, #Adventure"
                        )
                        .forEach((i) => {
                            i.classList.remove("checked");
                            i.querySelector("i")?.remove();
                        });
                } else {
                    const allBtn = document.getElementById("All");
                    allBtn.classList.remove("checked");
                    allBtn.querySelector("i")?.remove();
                }

                if (isAll) {
                    this.classList.add("checked");
                } else {
                    this.classList.toggle("checked");
                }

                this.querySelector("i")?.remove();
                if (this.classList.contains("checked")) {
                    const checkIcon = document.createElement("i");
                    checkIcon.className = "fa-solid fa-check";
                    this.appendChild(checkIcon);
                }

                filterGames();
            });
        });

    document.querySelectorAll("#All-cs, #Yes-cs, #No-cs").forEach((item) => {
        item.addEventListener("click", function () {
            document
                .querySelectorAll("#All-cs, #Yes-cs, #No-cs")
                .forEach((i) => {
                    i.classList.remove("checked");
                    i.querySelector("i")?.remove();
                });

            this.classList.add("checked");

            const checkIcon = document.createElement("i");
            checkIcon.className = "fa-solid fa-check";
            this.appendChild(checkIcon);

            filterGames();
        });
    });
    const searchInput = document.querySelector(".searchInput");

    searchInput.addEventListener("input", function () {
        const keyword = searchInput.value.toLowerCase();
        const filteredGames = Object.values(gameList).filter(function (game) {
            return game.displayName.toLowerCase().includes(keyword);
        });
        renderGames(filteredGames);
    });
}
function filterGames() {
    let filtered = [...games];
    const selectedGenres = Array.from(
        document.querySelectorAll(
            "#Action.checked, #RPG.checked, #Souls-like.checked, #Open-World.checked, #Dark-Fantasy.checked, #Adventure.checked"
        )
    ).map((i) => i.id);
    if (selectedGenres.length > 0) {
        filtered = filtered.filter((game) => {
            const genres = game.getGenre();
            return selectedGenres.every((g) => genres.includes(g));
        });
    }

    // onSale
    const saleType = document.querySelector(
        "#All-cs.checked, #Yes-cs.checked, #No-cs.checked"
    )?.id;
    if (saleType === "Yes-cs")
        filtered = filtered.filter((game) => game.onSale === true);
    if (saleType === "No-cs")
        filtered = filtered.filter((game) => game.onSale === false);

    renderGames(filtered);
}
// Render store.html
if (window.location.href.includes("store.html")) {
    loadStore();
    renderGames(games);
}
if (window.location.href.includes("home.html")) {
    loadHome();
}
const error = document.getElementById("error");
//========================================================Form validate===========================================//
function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email.value) == false) return false;
    return true;
}
function validatePassword(password) {
    var passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    return passRegex.test(password.value);
}

function validateName(name) {
    if (name.value.length < 4) return false;
    return true;
}

function validateDisplayName(name) {
    if (name.value.length < 4) return false;
    return true;
}

function validateDescription(desc) {
    if (desc.value.length == 0) return false;
    return true;
}

function validateRepassword(repassword) {
    const password = document.getElementById("password").value;
    if (repassword.value !== password) return false;
    return true;
}

// Kiểm tra đăng ký
function registerValidate() {
    if (validateName(document.getElementById("username")) == false) {
        error.innerText = "Tên nhập vào phải có ít nhất 4 ký tự";
        return false;
    }

    if (validateDisplayName(document.getElementById("displayname")) == false) {
        error.innerText = "Tên hiển thị phải có ít nhất 4 ký tự";
        return false;
    }

    if (validateEmail(document.getElementById("email")) == false) {
        error.innerText = "Email không hợp lệ";
        return false;
    }
    if (validatePassword(document.getElementById("password")) == false) {
        error.innerText =
            "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt";
        return false;
    }
    if (validateRepassword(document.getElementById("Repassword")) == false) {
        error.innerText = "Mật khẩu nhập lại không hợp lệ!";
        return false;
    }
    return true;
}

// Kiểm tra đăng nhập
function signInValidate() {
    if (validateName(document.getElementById("username")) == false) {
        error.innerText = "Tên nhập vào phải có ít nhất 4 ký tự";
        return false;
    }

    if (validatePassword(document.getElementById("password")) == false) {
        error.innerText =
            "Sai mật khẩu. Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt";
        return false;
    }
    return true;
}

function contactValidate() {
    if (validateName(document.getElementById("name")) == false) {
        error.innerText = "Tên phải có ít nhất 4 ký tự";
        return false;
    }
    if (validateEmail(document.getElementById("email")) == false) {
        error.innerText = "Email không hợp lệ";
        return false;
    }

    if (validateDescription(document.getElementById("description")) == false) {
        error.innerText = "Vui lòng nhập nội dung!";
        return false;
    }
    return true;
}
