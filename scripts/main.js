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

// working space : ---------------------------------------------------------- : \/
// on click element with id "BtnClick" changing content inside of element with id infoItems
const BtnTestClick = document.getElementById("BtnClick");
const infoItemsTxt = document.getElementById("infoItems");
// buttons map:



class BoxItemsMap {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }

    //1
    azot() {
        infoItemsTxt.innerHTML = wrapperTextStart + `Azot` + wrapperTextEnd
    }
    //2
    cPlantChemReag() {
        infoItemsTxt.innerHTML = wrapperTextStart +
            `<li class="item-info-map">
                test dva
            </li>`
            + wrapperTextEnd
    }
    //3
    PATtemp() {
        infoItemsTxt.innerHTML = wrapperTextStart + `PATtemp - вулиця Юрія Іллєнка, 27, Черкаси, Черкаська область, 18005` + wrapperTextEnd
    }
    //4
    Orizon() {
        infoItemsTxt.innerHTML = wrapperTextStart + `4` + wrapperTextEnd
    }
    //5
    CherkTara() {
        infoItemsTxt.innerHTML = wrapperTextStart + `5` + wrapperTextEnd
    }
    //6
    tobaccoFactory() {
        infoItemsTxt.innerHTML = wrapperTextStart + `6` + wrapperTextEnd
    }
    //7
    Ros() {
        infoItemsTxt.innerHTML = wrapperTextStart + `Ros` + wrapperTextEnd
    }
    //8
    PaintFactoryAvrora() {
        infoItemsTxt.innerHTML = wrapperTextStart + `Аврора - вулиця Будіндустрії, 3, Черкаси, Черкаська область, 18000` + wrapperTextEnd
    }
    //9
    busBogdan() {
        infoItemsTxt.innerHTML = wrapperTextStart + `9` + wrapperTextEnd
    }
    //10
    Vatfarm() {
        infoItemsTxt.innerHTML = wrapperTextStart + `Ватфарм - проспект Хіміків, 66, Черкаси, Черкаська область, 18000` + wrapperTextEnd
    }
    //11
    liqueurVodkaFactory() {
        infoItemsTxt.innerHTML = wrapperTextStart + `11` + wrapperTextEnd
    }


    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}
new BoxItemsMap(boxItemsMap);




BtnTestClick.onclick = function () {
    infoItemsTxt.innerHTML = wrapperTextStart + `eblan` +wrapperTextEnd

};



let wrapperTextStart = `
<b></b>
    <ul class="items-info-map" >`;

let wrapperTextEnd = `
    </ul>
<b></b>
`;
// working space : ---------------------------------------------------------- : /\

// -=-================ test. makes every item with class "span-btn" like an button, and clickable,
// on click changing content
//
// let elements = document.getElementsByClassName("span-btn");
//
// let myFunction = function() {
//     infoItems.innerHTML = `
//     <div>
//         <span class="testClass">s223</span>
//         <span>21314</span>
//         <div class="test2">ne
//             <div>
//                 test final
//             </div>
//         </div>
//     </div>
//     `
// };
//
// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener('click', myFunction, false);
// }