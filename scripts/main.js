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
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map textCenter">
    ПАТ "Азот" - Першотравнева, 72, Черкаси, Черкаська область, 18000
</li>
<li class="item-info-map">
    Викиди за останній рік становили <i class="colorRed">4,0 тис.</i> тон забруднюючих речовин. 
    <br> В 2018 році: <i class="colorRed">3,4 тис.</i> т, що на <i class="colorRed">0,4 тис.</i> т відповідно 
    більше, ніж в 2017 році.
    Збільшення викидів в атмосферу збільшується з кожним роком, і з цим потрібно щось робити. 
    Викиди ПАТ "Азот" разом з "Миронівською птахофабрикою" становили 53% від викидів стаціонарних джерел області.
</li>
<li class="item-info-map">
    Черкаське відкрите акціонерне товариство "Азот" - одне з найбільших  підприємств в Україні з виробництва 
    мінеральних добрив, іонообмінних смол, капролактаму та іншої хімічної продукції. Його будівництво 
    розпочалось у 1962 році, а 14 березня 1965 року колективом видано перший аміак.
</li>`
            + wrapperTextEnd
    }
    //2
    silkFactory() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map">
    ПРАТ "Черкаський Шовковий Комбінат" - вулиця В'ячеслава Чорновола, 170, Черкаси, Черкаська область, 18000
</li>
<li class="item-info-map">
    Основні забруднюючі речовини, які утворюються на Черкаському Шовковий комбінаті, це -
    миючі засоби (<i class="colorRed">50-120 мг/л</i>), завислі речовини (<i class="colorRed">250-400 мг/л</i>), 
    барвники; БСК досягає <i class="colorRed">300-350 мг/л</i>. Сильно забруднені стічних вод цехів 
    первинної обробки шерсті: завислі речовини (<i class="colorRed">20-40 г/л</i>), тваринний жир 
    (<i class="colorRed">8-12 г/л</i>);
    БСК20 <i class="colorRed">16-20 г/л</i>. 
    <br> Виходячи з вищевказаного актуальним питанням залишається контроль 
    за якістю стічних вод фарбувальних виробництв та розробка нових систем очищення.
    <br> Основним негативним впливом на водний фонд ПрАТ «ЧШК» завдає через скидання неочищених стоків 
    у поверхневі водні об'єкти.
</li>
<li class="item-info-map">
    Будівництво комбінату почалося в січні 1965 року. 8 грудня 1967 року було введено в експлуатацію ткацьке 
    виробництва і комбінат випустив перші метри шовкової тканини, з яких і почалася подальша робота комбінату.
</li>`
            + wrapperTextEnd
    }
    //3
    tec() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map">Черкаська ТЕЦ (Хімволокно) - проспект Хіміків, 76, Черкаси, Черкаська область, 18000</li>
<li class="item-info-map">
    Востаннє ТЕЦ надала інформацію про викиди в 2020 році, та тоді валовий викид склав <i class="colorRed">16000,1</i> т.
    <br> В 2017 році: 
    <i class="colorRed">16177,320</i> т. 
    <br> В 2016 році було <i class="colorRed">18246,632</i> т викидів. Відбулось зменшення шкідливого впливу 
    (на 2069.312 т) за рахунок використання кам'яного вугілля із вмістом сірки менше 1%.
</li>
<li class="item-info-map">
    9 січня 1956 року ЦК КПРС та Рада Міністрів СРСР прийняла рішення про будівництво в м. Черкаси заводу 
    хімічного волокна, нині – ПРАТ “Черкаське Хімволокно”. Черкаська ТЕЦ розташована поруч з хімічним 
    підприємством “Хімволокно” та була збудована у 1958 – 1961 роках  для забезпечення потреб цього заводу 
    у теплі та енергії.
    Черкаська ТЕЦ постачає гарячу воду та опалює близько 3 млн квадратних метрів житлової площі у 800 будинках 
    жителів м. Черкаси
</li>`
            + wrapperTextEnd
    }
    //4
    instrumentFactory() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map">
    ПАТ "Приладобудівний завод" - переулок. Чкалова, 15, Черкаси, Черкаська область, 18000
</li>
<li class="item-info-map">
    Викиди забруднюють ґрунт. Вміст цинку перевищував ГДК у <i class="colorRed">53%</i> проб. Максимальний 
    вміст цинку був у пробі, відібраній у районі заводу, і склав <i class="colorRed">2,8</i> ГДК. 
    <br> Важкі метали мають здатність накопичуватися в живих організмах, включатися в метаболічний цикл, 
    утворювати високотоксичні металоорганічні з'єднання, змінювати форми знаходження , не піддаючись 
    біологічному розкладанню. Викликають у людини серйозні фізіологічні порушення, токсикоз, алергію, 
    онкологічні захворювання, негативно впливають на генетичну спадковість. Саме тому цей тип викидів є небезпечним 
    не тільки для майбутніх поколінь, яким доведеться жити на землі, а й для людей які живуть зараз.
</li>
<li class="item-info-map">
    Завод пропонує такі послуги: •Виробництво електродвигунів, генераторів і трансформаторів. •Виробництво 
    електричних побутових приладів. •Механічне оброблення металевих виробів. •Виробництво інструментів. 
    •Виробництво обладнання зв’язку. •Електромонтажні роботи. •Обслуговування систем безпеки.
</li>`
            + wrapperTextEnd
    }
    //5
    softTorg() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map">
    ТОВ "СОФТ ТОРГ" - провулок Богдана Хмельницького, 2А, Водяники, Черкаська область, 20232
</li>
<li class="item-info-map">
    Вид економічної діяльності: сільське господарство (відноситься до групи "Сільське господарство, мисливство або 
    лісове господарство"). В 2019 році це підприємство та інші підприємства Черкаської області які відносяться до 
    цієї ж групи виробили понад <i class="colorRed">11 тис.</i> т відходів, які здебільш всього забруднювали ґрунт.
    В 2017 році викиди склали <i class="colorRed">12 тис.</i> т.
    (ТОВ АПК «Маїс», ТОВ «Золотоніські сади», ТОВ «Голден», ТОВ  Жашківський  кінний завод». ТОВ «Софт Торг», ТОВ ім.  Шевченка, ТОВ ВКВ «Октан», 
    ПОСП «Уманський тепличний комбінат» та інші.
</li>
<!--<li class="item-info-map">-->
<!--    -->
<!--</li>-->`
            + wrapperTextEnd
    }
    //6
    PaintFactoryAvrora() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map">
    Аврора - вулиця Будіндустрії, 3, Черкаси, Черкаська область, 18000
</li>
<li class="item-info-map">
    Викиди забрудннюють ґрунти. <br> Найбільш забруднені ґрунти свинцем (<i class="colorRed">64%</i> проб з перевищенням ГДК). 
    Максимальна концентрація досягла 6,6 ГДК.
    По кадмію та міді відсоток проб з перевищенням ГДК склав <i class="colorRed">11%</i> та <i class="colorRed">4%</i>. 
    Середній вміст нікелю та марганцю нижче рівня ГДК.
</li>
<li class="item-info-map">
    На сьогодні завод здійснює випуск продукції за 4 напрямками:

фарби для дорожньої розмітки ТМ «TRAFFIC»
матеріали промислового значення ТМ «Аврора»
напівфабрикатні лаки ТМ «Аврора»
декоративні лакофарбові матеріал ТМ «МІКС color» (до 20 віддітнків)
</li>`
            + wrapperTextEnd
    }


    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}
new BoxItemsMap(boxItemsMap);




// BtnTestClick.onclick = function () {
//     infoItemsTxt.innerHTML = wrapperTextStart + `eblan` +wrapperTextEnd
//
// };



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