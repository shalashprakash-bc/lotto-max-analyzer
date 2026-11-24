function saveLuckyNumbers() {

    const nums =
        document.getElementById(
            "luckyNumbers"
        ).value;

    localStorage.setItem(
        "luckyNumbers",
        nums
    );

    alert("Lucky numbers saved!");
}

function loadData() {

    document.getElementById("hot4").innerHTML = `
        <div class="ball">8</div>
        <div class="ball">20</div>
        <div class="ball">33</div>
        <div class="ball">47</div>
    `;

    document.getElementById("hot10").innerHTML =
        "8, 20, 33, 47, 11, 24, 28, 31, 42, 44";

    document.getElementById("cold10").innerHTML =
        "2, 5, 12, 15, 17, 19, 26, 35, 39, 50";

    document.getElementById("tickets").innerHTML = `
        <div class="ticket">
            8 - 20 - 33 - 47 - 11 - 28 - 42
        </div>

        <div class="ticket">
            8 - 20 - 33 - 47 - 4 - 18 - 51
        </div>

        <div class="ticket">
            8 - 20 - 33 - 47 - 9 - 22 - 44
        </div>
    `;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(
        '/lotto-max-analyzer/service-worker.js'
    );
}

loadData();
