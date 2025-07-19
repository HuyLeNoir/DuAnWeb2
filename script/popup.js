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
