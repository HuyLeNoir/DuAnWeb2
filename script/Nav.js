{
    const nav = document.getElementsByTagName("nav")[0];
    let navOpen = false;
    function showNav(element){
        if(!navOpen){
                    nav.style.height = "auto";
                    element.innerHTML = '<i class="fa-solid fa-x"></i>';
                    navOpen = true;
        }else{
            nav.style.height = "";
            element.innerHTML = '<i class="fa-solid fa-bars"></i>'
            navOpen = false;
        }
    }
}
