// nav
{
  const nav = document.getElementsByTagName("nav")[0];
  let navOpen = false;
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
}

const gameList = {
  //gameList kieu object
  game01: {
    Img: "./Asset/left4dead2/cover.jpg",
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
    Img: "./Asset/rimworld/cover.jpg",
    Name: "RimWorld",
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
    Img: "./Asset/oxygennotincluded/cover.jpg",
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
    Img: "./Asset/eldenring/cover.jpg",
    Name: "ELDEN RING",
    Genre: "Souls-like Open-World Dark-Fantasy RPG Action Adventure", //Dung string.split de tach ra thanh cac genre rieng
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
    Img: "./Asset/sekiroshadowndietwice/cover.jpg",
    Name: "Sekiro: Shadows Die Twice",
    Genre: "Souls-like Difficult Action Single-player Ninja Open-World", //Dung string.split de tach ra thanh cac genre rieng
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
    Img: "./Asset/farcry4/cover.jpg",
    Name: "Far Cry® 4",
    Genre: "Combination Action Adventure Open-World", //Dung string.split de tach ra thanh cac genre rieng
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
    Img: "./Asset/godofwar/cover.jpg",
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
    Img: "./Asset/thelastofuspart1/cover.jpg",
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
    Img: "./Asset/deathstranding/cover.jpg",
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
    Img: "./Asset/manorlords/cover.jpg",
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
    Img: "./Asset/factorio/cover.jpg",
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
    Img: "./Asset/brokenarrow/cover.jpg",
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
    Img: "./Asset/duneawakening/cover.jpg",
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
    Img: "./Asset/ultrakill/cover.jpg",
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
    Img: "./Asset/doom/cover.jpg",
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
    Img: "./Asset/cyberpunk2077/cover.jpg",
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
    Img: "./Asset/thewitcher3/cover.jpg",
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
    Img: "./Asset/stellaris/cover.jpg",
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
    Img: "./Asset/heartsofiron/cover.jpg",
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
    Img: "./Asset/forzahorizon/cover.jpg",
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
    Img: "./Asset/reddeadredemption/cover.jpg",
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

// Chuyển sang mảng
const games = Object.values(gameList);

//Thêm gamecard
function renderGames(list) {
  const container = document.querySelector(".AG_container");
  container.innerHTML = "";

  list.forEach(function (game) {
    const disc = Math.round(game.Sale * 100);
    const discountPrice = game.getPrice().toLocaleString();
    const originalPrice = game.originalPrice.toLocaleString();

    const priceGroup = game.onSale ? "priceGroup" : "priceGroup noSale";

    const saleTag = `<h6 class="saleAmount">-${disc}%</h6>`;
    const priceBL = `<div class="price">
          <p>${discountPrice}₫</p>
          <p class="sale">${originalPrice}₫</p>
      </div>`;

    const gameHTML = `
      <div class="GameCard">
        <div class="image-container">
          <img src="${game.Img}" alt="${game.Name}">
        </div>
        <div class="content">
          <h1>${game.Name}</h1>
          <div class="${priceGroup}">
            ${saleTag}
            ${priceBL}
          </div>
        </div>
      </div>
    `;

    container.innerHTML += gameHTML;
  });
}

// ======================== Sort =============================

document.getElementById("sort-by-name").addEventListener("click", function () {
  const renSort = games.slice().sort(function (a, b) {
    return a.Name.localeCompare(b.Name);
  });
  renderGames(renSort);
});

document.getElementById("sort-by-price").addEventListener("click", function () {
  const renSort = games.slice().sort(function (a, b) {
    return a.getPrice() - b.getPrice();
  });
  renderGames(renSort);
});

// SortByYear
document.getElementById("sort-by-release").addEventListener("click", function () {
  const renSort = games.slice().sort(function (a, b) {
    return b.yearRelease - a.yearRelease;
  });
  renderGames(renSort);
});

document.querySelectorAll("#sort-by-name, #sort-by-price, #sort-by-release").forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    document.querySelectorAll("#sort-by-name, #sort-by-price, #sort-by-release").forEach(function (el) {
      el.classList.remove("checked");
    });
    this.classList.add("checked");
    document.getElementById("sortType").textContent = this.textContent.trim();
    this.closest(".dropdown-menu").classList.remove("show");
  });
});
// =====================================================================================
document.querySelectorAll("#All, #Action, #RPG, #Souls-like, #Open-World, #Dark-Fantasy, #Adventure").forEach((item) => {
  item.addEventListener("click", function () {
    const isAll = this.id === "All";

    if (isAll) {
      document.querySelectorAll("#Action, #RPG, #Souls-like, #Open-World, #Dark-Fantasy, #Adventure").forEach((i) => {
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
    document.querySelectorAll("#All-cs, #Yes-cs, #No-cs").forEach((i) => {
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

function filterGames() {
  let filtered = [...games];
  const selectedGenres = Array.from(document.querySelectorAll("#Action.checked, #RPG.checked, #Souls-like.checked, #Open-World.checked, #Dark-Fantasy.checked, #Adventure.checked")).map((i) => i.id);
  if (selectedGenres.length > 0) {
    filtered = filtered.filter((game) => {
      const genres = game.getGenre();
      return selectedGenres.every((g) => genres.includes(g));
    });
  }

  // onSale
  const saleType = document.querySelector("#All-cs.checked, #Yes-cs.checked, #No-cs.checked")?.id;
  if (saleType === "Yes-cs") filtered = filtered.filter((game) => game.onSale === true);
  if (saleType === "No-cs") filtered = filtered.filter((game) => game.onSale === false);

  renderGames(filtered);
}

// searchByName
const searchInput = document.querySelector(".searchInput");

searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase();
  const filteredGames = Object.values(gameList).filter(function (game) {
    return game.Name.toLowerCase().includes(keyword);
  });

  renderGames(filteredGames);
});

// Render store.html
if (window.location.href.includes("store.html")) {
  renderGames(games);
}
// ========================= Validate =============================
function validateEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailRegex.test(email.value) == false) return false;
  return true;
}
function validatePassword(password) {
  var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
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

function validateRepassword(repassword) {
  const password = document.getElementById("password").value;
  if (repassword.value !== password) return false;
  return true;
}

// Kiểm tra đăng ký
function registerValidate() {
  if (validateName(document.getElementById("username")) == false) {
    alert("Tên nhập vào phải có ít nhất 4 ký tự");
    return false;
  }

  if (validateDisplayName(document.getElementById("displayname")) == false) {
    alert("Tên hiển thị phải có ít nhất 4 ký tự");
    return false;
  }

  if (validateEmail(document.getElementById("email")) == false) {
    alert("Email không hợp lệ");
    return false;
  }
  if (validatePassword(document.getElementById("password")) == false) {
    alert("Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt");
    return false;
  }
  if (validateRepassword(document.getElementById("Repassword")) == false) {
    alert("Mật khẩu nhập lại không khớp!");
    return false;
  }
  return true;
}

// Kiểm tra đăng nhập
function signInValidate() {
  if (validateName(document.getElementById("username")) == false) {
    alert("Tên nhập vào phải có ít nhất 4 ký tự");
    return false;
  }

  if (validatePassword(document.getElementById("password")) == false) {
    alert("Sai mật khẩu. Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt");
    return false;
  }
  return true;
}

const l = document.querySelectorAll(".sort-click");
const menuList = document.querySelectorAll(".dropdown-menu");

l.forEach(function (button, index) {
  const chevron = button.querySelector("i");

  button.onclick = function () {
    const menu = button.nextElementSibling;

    if (menu.classList.contains("show")) {
      chevron.style.transform = "rotate(0deg)";
      menu.classList.remove("show");
    } else {
      menuList.forEach((m, i) => {
        m.classList.remove("show");
        const otherChevron = l[i].querySelector("i");
        otherChevron.style.transform = "rotate(0deg)";
      });
      chevron.style.transform = "rotate(180deg)";
      menu.classList.add("show");
    }
  };
});

function selectDropdown(dropdownSelector, displayId) {
  const items = document.querySelectorAll(`${dropdownSelector} li`);
  const display = document.getElementById(displayId);

  items.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation();

      items.forEach((i) => {
        i.classList.remove("checked");
        i.querySelector("i")?.remove();
      });

      this.classList.add("checked");
      const checkIcon = document.createElement("i");
      checkIcon.className = "fa-solid fa-check";
      this.appendChild(checkIcon);

      if (display) {
        display.textContent = this.textContent.trim();
      }
    });
  });
}

//-------------------------------------------------News------------------------------------------------------------------//
{
  const slides = document.querySelector(".news-container");
  let currentIndex = 0;
  const dotList = document.querySelectorAll(".dot");
  // Ham chuyen slide khi an nut dieu huong ben duoi
  function goTo(index) {
    dotList.forEach(function (d) {
      d.classList.remove("active");
    });
    dotList[index].classList.add("active");
    slides.style.transform = `translateX(-${(100 / 3) * index}%)`;
    currentIndex = index;
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
    currentIndex = (currentIndex + 1) % dotList.length;
    goTo(currentIndex);
  }, 5000);
}

//-------------------------------------------------Popup/Modal------------------------------------------------------------------//
{
  const dialog = document.getElementById("cart-Detail");
  const wrapper = document.querySelector(".wrapper");
  function showDialog(show) {
    show ? dialog.showModal() : dialog.close();
  }
  dialog.onclick = (e) => {
    if (!wrapper.contains(e.target)) {
      dialog.close();
    }
  };
}

//------------------------------------------------------UNSED
function togglePassword(eye) {
  const passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    passwordInput.type = "password";
    eye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
}

function redirect(link) {
  window.location.href = "gameHTML/" + link + ".html";
}

//-------------------------------------------------Game page------------------------------------------------------------------//
{
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

  const picFrame = document.getElementById("image");
  const pictureList = document.querySelectorAll(".picture > img");
  pictureList.forEach(function (pic) {
    pic.onclick = function () {
      picFrame.src = pic.src;
      pictureList.forEach(function (pic) {
        pic.style.border = "";
      });
      pic.style.border = "3px solid white";
    };
  });
}

//-------------------------------------------------Dropdown------------------------------------------------------------------//
{
  const l = document.querySelectorAll(".sort-click");
  const menuList = document.querySelectorAll(".dropdown-menu");
  l.forEach(function (button) {
    button.onclick = function () {
      const menu = button.nextElementSibling;
      const chevron = button.lastChild;
      if (menu.classList.contains("show")) {
        //dong menu
        chevron.style.transform = "rotate(0deg)";
        menu.classList.remove("show");
      } else {
        //show menu
        menuList.forEach((menu, index) => {
          menu.classList.remove("show"); //neu co 1 menu khac dang show thi reset vi tri cua menu do
          l[index].lastChild.style.transform = "rotate(0deg)";
        });
        chevron.style.transform = "rotate(180deg)";
        menu.classList.add("show");
      }
    };
  });
}

{
  const container = document.querySelector(".AG_container");
  const gameCardList = document.querySelectorAll(".GameCard");
  const barContainer = document.querySelector(".barContainer");
  let maxCardShow = Math.floor(container.clientWidth / gameCardList[0].clientWidth);
  let barAmount = Math.ceil(gameCardList.length / maxCardShow);
  let currentIndex = 0;
  for (let i = 1; i <= barAmount; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    barContainer.appendChild(bar);
  }
  barContainer.firstElementChild.classList.add("active");
  //preload bars
  window.onresize = function () {
    maxCardShow = Math.floor(container.clientWidth / gameCardList[0].clientWidth);
    barAmount = Math.ceil(gameCardList.length / maxCardShow);
    barContainer.innerHTML = "";
    for (let i = 1; i <= barAmount; i++) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      barContainer.appendChild(bar);
    }
    barContainer.firstElementChild.classList.add("active");
    container.scrollLeft = 0;
    currentIndex = 0;
    checkButtStatus();
  };

  function updateBar() {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => {
      bar.classList.remove("active");
    });
    bars[currentIndex].classList.add("active");
  }
  function nextGame(butt) {
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
  function previousGame(butt) {
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
}

// =========================================== Add cart ========================================================
{
  const dialog = document.getElementsByTagName("dialog")[0];
  function addToCart(gameid) {
    if (localStorage.getItem(gameid) !== null) {
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
    localStorage.setItem(gameid, " ");
    console.log(localStorage);
  }
}

const container = document.querySelector(".Container");
const sumary = document.querySelector(".sumary");
const detail = document.querySelector(".detail");
const totalHTML = document.querySelector("#total > span");
let total = 0;
function showCart() {
  container.innerHTML = "";
  detail.innerHTML = "";
  if (localStorage.length == 0) {
    container.innerHTML = "<h2>Your cart is empty</h2>";
  }
  Object.keys(localStorage).forEach((key) => {
    console.log(gameList[key]);
    container.innerHTML += `
                <div class="gamecard3">
                    <div class="gameImgFrame">
                        <img src="${gameList[key].coverImage}" alt="">
                    </div>
                    <div class="Game">
                        <div class="gameInfor">
                            <h1>${gameList[key].Name}</h1>
                            <p>Plaform: <span>PC/Windows</span></p>
                        </div>
                        <div class="price-game">
                            <button onclick="removeItem('${key}')"><i class="fa-solid fa-trash"></i> <span>Remove</span></button>
                            <div class="price1">
                                <p class="sale">-${100 * gameList[key].Sale}%</p>
                                <div>
                                    <p class="last-price">${gameList[key].originalPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                                    <p class="price">${gameList[key].getPrice().toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    if (gameList[key].onSale === false) {
      //neu game co sale
      container.lastElementChild.querySelector(".price1").classList.add("noSale");
    }

    //>>>>>>>>>>>>>>>>>>>>>>Sumary
    detail.innerHTML += `<p>${gameList[key].Name}<span>${gameList[key].getPrice().toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span></p>`;
    total += gameList[key].getPrice();
  });
  totalHTML.innerHTML = total.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}
function removeItem(gameid) {
  localStorage.removeItem(gameid);
  showCart();
}
showCart();
