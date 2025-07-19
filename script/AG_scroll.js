{
    const container = document.querySelector(".AG_container");
    const gameCardList = document.querySelectorAll(".GameCard");
    const barContainer = document.querySelector(".barContainer");
    let maxCardShow = Math.floor(
        container.clientWidth / gameCardList[0].clientWidth
    );
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
