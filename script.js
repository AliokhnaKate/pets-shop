const items = [{
        title: "Игрушка мячик",
        description: "Ваш питомец будет счастлив!",
        tags: ["cat", "dog"],
        price: 500,
        img: "./img/1.jpeg",
    },
    {
        title: "Игрушка лабиринт",
        description: "Поможет в развитии интеллекта!",
        tags: ["cat", "dog"],
        price: 900,
        img: "./img/2.jpeg",
    },
    {
        title: "Игрушка для котят",
        description: "Отвлечет вашего питомца!",
        tags: ["cat"],
        price: 300,
        img: "./img/3.jpeg",
    },
    {
        title: "Миска «Котик»",
        description: "Подойдет и для собак!",
        tags: ["cat", "dog"],
        price: 660,
        img: "./img/4.jpeg",
    },
    {
        title: "Лоток розовый",
        description: "Теперь вы можете забыть о проблемах с туалетом",
        tags: ["cat"],
        price: 400,
        img: "./img/5.jpeg",
    },
    {
        title: "Сухой корм для кошек",
        description: "Специальная формула для милых усатиков!",
        tags: ["cat"],
        price: 200,
        img: "./img/6.jpeg",
    },
    {
        title: "Сухой корм для собак",
        description: "Содержит полный комплекс витаминов",
        tags: ["dog"],
        price: 300,
        img: "./img/7.jpeg",
    },
    {
        title: "Игрушка для собак",
        description: "Теперь вы можете не переживать за личные вещи",
        tags: ["dog"],
        price: 500,
        img: "./img/8.jpeg",
    },
    {
        title: "Лежанка",
        description: "Идеальное место для отдыха!",
        tags: ["cat", "dog"],
        price: 1500,
        img: "./img/9.jpeg",
    },
    {
        title: "Поилка для собак",
        description: "Возьмите с собой в путешествие",
        tags: ["dog"],
        price: 800,
        img: "./img/10.jpeg",
    },
    {
        title: "Переноска",
        description: "Путешествуйте с комфортом!",
        tags: ["cat", "dog"],
        price: 3500,
        img: "./img/11.jpeg",
    },
    {
        title: "Поводок для собак",
        description: "Для чудесных прогулок вместе",
        tags: ["dog"],
        price: 800,
        img: "./img/12.jpeg",
    },
];

const itemTemplate = document.querySelector('#item-template');
const shopItems = document.querySelector('#shop-items')
const container = document.querySelector('.container')
const image = document.querySelector('img')
const tags = document.querySelector('.tags')

function makeTemplate(itemTemp) {
    const shop = itemTemplate.content.cloneNode(true);

    shop.querySelector('h1').textContent = itemTemp.title;
    shop.querySelector('p').textContent = itemTemp.description;

    //вынесли за пределы forEach переменную tagsHolder,чтобы каждый раз его не искать для каждого элемента,  1 раз нашли, и с помощью forEach вставили туда 2 элемента
    const tagsHolder = shop.querySelector('.tags');
    itemTemp.tags.forEach(function(tag) {

        const tagContainer = document.createElement('span');
        tagContainer.classList.add('tag');
        tagContainer.textContent = tag;
        tagsHolder.append(tagContainer);
    })
    shop.querySelector('.price').textContent = itemTemp.price + 'Р';
    shop.querySelector('img').src = itemTemp.img;

    return shop;
}

//2.пишем ф-ю
function render(array) {
    //3.тело ф-и
    //4.для массива нужен перебор элементов, для объекта - перебор ключ+значение
    array.forEach(function(item) {
        const template = makeTemplate(item);
        shopItems.append(template);
    })
}
render(items); //1.вызов ф-и

//массив - items, обращение к массиву item.title
//обьект - title и тд

//## Продвинутый уровень

const searchButton = document.querySelector('#search-btn')
const searchInput = document.querySelector('#search-input')
const nothingFound = document.querySelector('#nothing-found')

searchButton.addEventListener('click', function() {
    const searchText = searchInput.value;
    const searchTitle = document.createElement('div');
    searchTitle.textContent = searchText;
    const newSearchText = searchText.trim().toLowerCase();

    const filteredItems = items.filter((elem) => elem.title.toLowerCase().includes(newSearchText));

    //shopItems.prepend(filtereredItems) так не получится вставить элемент, тк он является массивом, нужно через функцию. Для массива нужен перебор элементов forEach, для объекта - перебор ключ+значение
    function filter(value) {
        if (value == 0) {
            shopItems.innerHTML = '';
            nothingFound.textContent = 'Ничего не найдено'
        } else {
            shopItems.innerHTML = '';
            render(value);
        }
    }
    filter(filteredItems)
})