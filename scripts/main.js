const infoItemsVariable = document.getElementById("infoItems").children.length;

function hideItems(elClass) {
    for (let i = 0; i <infoItemsVariable; i++) {
        document.getElementsByTagName("ul")[0].className = "items-info-map visibilityHidden";
    } // if needs to set classes for every element: instead of [0] must be [i].
    elClass.className = "items-info-map visibilityVisible"
}

function showItems(elClass) {
    for (let i = 0; i <infoItemsVariable; i++) {
        document.getElementsByTagName("ul")[0].className = "items-info-map visibilityVisible";
    }
    elClass.className = "items-info-map visibilityHidden"
}

// on click element with id "BtnClick" changing content inside of element with id infoItems
BtnClick.onclick = function () {
    infoItems.innerHTML = `
    <div>
        <span class="testClass">s223</span>
        <span>21314</span>
        <div class="test2">ne
            <div>
                test final
            </div>
        </div>
    </div>
    `
}