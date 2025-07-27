//-------------------------------------------------Game list------------------------------------------------------------------//
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
