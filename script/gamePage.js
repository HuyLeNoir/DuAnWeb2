//-------------------------------------------------Game page------------------------------------------------------------------//
const dialog = document.getElementsByTagName("dialog")[0];
const gameID = document.getElementById("gameID").getAttribute("data-id"); //lay game id
const game = gameList[gameID];
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
loadGameInformation();
loadPictures();
loadPrice();
