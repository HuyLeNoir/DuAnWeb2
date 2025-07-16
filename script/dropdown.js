const buttonList = document.querySelectorAll(".sort-click");
const menuList = document.querySelectorAll(".dropdown-menu");
buttonList.forEach(function(button){
    button.onclick = function(){
        const menu = button.nextElementSibling;
        const chevron = button.lastChild;
        if(menu.classList.contains("show")){ //dong menu
            chevron.style.transform="rotate(0deg)";
            menu.classList.remove("show");
        }else{ //show menu
            menuList.forEach((menu, index) => {
                menu.classList.remove("show"); //neu co 1 menu khac dang show thi reset vi tri cua menu do
                buttonList[index].lastChild.style.transform="rotate(0deg)";
            });
            chevron.style.transform="rotate(180deg)";
            menu.classList.add("show");
        }
    }
});