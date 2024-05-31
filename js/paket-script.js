let paketList= [
    {
        text: '– PRO –',
        price: 20000,
        description:'УМК по робототетхнике  и программированию',
    },
    {
        text: '– ROBO –',
        price: 15000,
        description:'УМК по робототетхнике ',
    },
    {
        text: '– PROG –',
        price: 10000,
        description:'УМК по программированию',
    }
]
let makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};
let createCard = function (paket) {
    let listItem = makeElement('li', 'paket-items');
    let title = makeElement('h3', 'paket-name', paket.text);
    listItem.appendChild(title);
    let price = makeElement('p', 'price', paket.price + ' ₽');
    listItem.appendChild(price);
    let descriptionPacet = makeElement('p', 'paket-description', paket.description);
    listItem.appendChild(descriptionPacet);
    let buttonPaket = makeElement('button', 'paket-button', 'Оставить заявку');
    listItem.appendChild(buttonPaket);
    return listItem;
};
let paketList2 = document.querySelector('.paket-list');
for (let i = 0; i < paketList.length; i++) {
    let cardItem = createCard(paketList[i]);
    paketList2.appendChild(cardItem);
}
