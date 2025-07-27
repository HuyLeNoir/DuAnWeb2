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