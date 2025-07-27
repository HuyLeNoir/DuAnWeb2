function redirect(link){
    window.location.href = "gameHTML/" + link + ".html";
}
function showHome(){
    const container = document.querySelector(".AG_container");
        Object.keys(gameList).forEach(key => {
            const game = gameList[key];
            if (true) {
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
                                <p>${game.originalPrice.toLocaleString("vi-VN", {style: "currency", currency: "VND"})}</p>
                                <p class="sale">${game.getPrice().toLocaleString("vi-VN", {style: "currency", currency: "VND"})}</p>
                            </div>  
                        </div>
                    </div>
                </div>`;
            }
    })
}
showHome();