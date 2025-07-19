const container = document.querySelector(".Container");
const sumary = document.querySelector(".sumary");
const detail = document.querySelector(".detail");
const totalHTML = document.querySelector("#total > span");
let total = 0;
        function showCart() {
            container.innerHTML = "";
            detail.innerHTML = "";
            if(localStorage.length == 0){
                container.innerHTML = "<h2>Your cart is empty</h2>"
            }
            Object.keys(localStorage).forEach(key => {
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
                if (gameList[key].onSale === false) { //neu game co sale
                    container.lastElementChild.querySelector(".price1").classList.add("noSale");
                }

                //>>>>>>>>>>>>>>>>>>>>>>Sumary
                detail.innerHTML += `<p>${gameList[key].Name}<span>${gameList[key].getPrice().toLocaleString("vi-VN", {style: "currency", currency: "VND"})}</span></p>`
                total += gameList[key].getPrice();
            })
            totalHTML.innerHTML = total.toLocaleString("vi-VN", {style: "currency", currency: "VND"});
        }
        function removeItem(gameid){
            localStorage.removeItem(gameid);
            showCart();
        }
        showCart();