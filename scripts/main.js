// hiding sidebar with info
const infoItemsVariable = document.getElementById("infoItems").children.length;

function hideItems(elClass) {
    for (let i = 0; i <infoItemsVariable; i++) {
        document.getElementsByTagName("div")[3].className = "visibilityHidden hideSidebar";
        document.getElementsByTagName("div")[1].className = "map fullSizeMap"; //styles map when hidden
    }
    elClass.className = "items-info-map visibilityVisible"
}

function showItems(elClass) {
    for (let i = 0; i <infoItemsVariable; i++) {
        document.getElementsByTagName("div")[3].className = "info-map visibilityVisible";
        document.getElementsByTagName("div")[1].className = "map"; // styles for map when visible
    }
    elClass.className = "items-info-map visibilityHidden"
}

// map working space : ---------------------------------------------------------- : \/
// on click element with id "...Btn" changing content inside of element with id infoItems
const infoItemsTxt = document.getElementById("infoItems");

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
</li>
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=62467" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=62467" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems() // if an element was hidden when we call it, it will become visible
    }
    //2
    silkFactory() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map textCenter">
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
</li>
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=62467" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=62467" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems()
    }
    //3
    tec() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map textCenter">Черкаська ТЕЦ (Хімволокно) - проспект Хіміків, 76, Черкаси, Черкаська область, 18000</li>
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
</li>
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=51736" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=51736" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems()
    }
    //4
    instrumentFactory() {
        infoItemsTxt.innerHTML =  wrapperTextStart +
`<li class="item-info-map textCenter">
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
</li>
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=50565" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=50565" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems()
    }
    //5
    softTorg() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map textCenter">
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
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=46903" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=46903" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems()
    }
    //6
    PaintFactoryAvrora() {
        infoItemsTxt.innerHTML = wrapperTextStart +
`<li class="item-info-map textCenter">
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
</li>
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=51736" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=51736" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems()
    }
    //7
    VoloshkovePole() {
        infoItemsTxt.innerHTML = wrapperTextStart +
            `<li class="item-info-map textCenter">
    Волошкове Поле - вулиця Героїв Сталінграду, 18, Черкаси, Черкаська область, 18000
</li>
<li class="item-info-map">
    Орендовані основні засоби вартістю 5018 тис.грн (транспортні засоби) використовуються в господарській 
    діяльності. Виробничі потужності використовуються повністю. Діяльність підприємства 
    <i class="colorRed">не шкодить навколишньому середовищу</i>, 
    екологія не порушується. Капітального будівництва основних засобів не передбачається.
</li>
<li class="item-info-map">
    На діяльність товариства суттєво впливає економічний та фінансовий стан вітчизняного виробника та споживача, 
    оскільки обсяг реалізації підприємства, як постачальника залежить від попиту споживача та його 
    платоспроможності. Крім того на ринку збуту з кожним роком зростає конкуренція. Фінансові показники 
    господарства в великій мірі залежать від обсягу виробництва та реалізаційних цін на вироблену продукцію. 
    Суттєвий вплив на діяльність товариства має недосконала законодавча база, податкова політика держави.
</li>
<li class="graphics">
    <p>Інформація з найближчого датчика забрудненості повітря:</p>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=2&amp;var-node=46741" frameborder="0"></iframe>
    <iframe src="https://maps.sensor.community/grafana/d-solo/000000004/single-sensor-view?orgId=1&amp;panelId=1&amp;var-node=46741" frameborder="0"></iframe>
    <p>"Точні значення" та "Середні значення"</p>
</li>`
            + wrapperTextEnd;
        showItems()
    }


    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}
new BoxItemsMap(boxItemsMap);


let wrapperTextStart = `
<b></b>
    <ul class="items-info-map" >`;

let wrapperTextEnd = `
    </ul>
<b></b>
`;
// working space : ---------------------------------------------------------- : /\
