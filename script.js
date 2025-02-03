const stanzas = [
    {
        text: `I am from cocoa and coffee,<br>soothing a sore throat or waking me up.<br>I am from pasta and garlic bread,<br>everyone’s favorite,<br>always exciting to smell before dinner. <br>I am from animated shows teaching me life lessons,<br>or if not that then just keeping me entertained.`,
        image: 'cocoa.jpeg',
        id: 'card0',
        number: 0
    },
    {
        text: `I’m from birdies and racquets, <br>
“Nice serve!”s and “Great Shot!”s,<br>
whether genuine or not.<br>
I’m from controllers and keyboards,<br>
stories, sprites, and scores.<br>
Games that made me cry, laugh, or yell,<br>
ones that brought me both friends and rivals.
`,
        image: 'badminton.jpeg',
        id: 'card1',
        number: 1
    },
    {
        text: `I’m from B flats and F sharps,<br>
from fingering charts teaching me where to start.<br>
From reeds breaking and keys sticking,<br>
from crescendos to diminuendos.<br>
From classical and jazz,<br>
to even pop and musicals,<br>
dictating styles I’d never heard of.
`,
        image: 'music.jpeg',
        id: 'card2',
        number: 2
    },
    {
        text: `Finally, as you have seen,<br>
I’m from programming all sorts of things.<br>
From html to java,<br>
css to python.
`,
        image: 'programming.jpeg',
        id: 'card3',
        number: 3
    }
]

function generatecards() {
    const cardsContainer = document.getElementById('cards')
    let i = 0
    stanzas.forEach(stanza => {
        const card = document.createElement('div')
        card.classList.add('col-6', 'mb-1', 'text-center')
        card.setAttribute("id", `card-container${i}`)

        card.innerHTML = `
        <div class="card h-100 mt-1 pb-0" id="${stanza.id}" onmouseover="flipCard(${i})">
            <div class="text-center p-1">
                <img src="${stanza.image}" class="w-100 rounded mb-0" style="height: 300px">
            </div>
        </div>`

        cardsContainer.appendChild(card)
        i++
    });
}

window.onload = function () {
    generatecards();
};


function flipCard(cardNumber) {
    document.getElementById(`card-container${cardNumber}`).classList.add('flip-card')
    document.getElementById(`card-container${cardNumber}`).classList.remove('unflip-card')
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseover", "")
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseleave", `unflipCard(${cardNumber})`)
    const stanza = stanzas[cardNumber]
    setTimeout(() => {
        document.getElementById(`card${cardNumber}`).innerHTML = `
            <div class="card-body">
                <p class="mb-0">${stanza.text}</p>
            </div>`
    }, 1000);
}

function unflipCard(cardNumber) {
    document.getElementById(`card-container${cardNumber}`).classList.remove('flip-card')
    document.getElementById(`card-container${cardNumber}`).classList.add('unflip-card')
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseleave", "")
    document.getElementById(`card${cardNumber}`).setAttribute("onmouseover", `flipCard(${cardNumber})`)
    const stanza = stanzas[cardNumber]
    setTimeout(() => {
        document.getElementById(`card${cardNumber}`).innerHTML = `
        <div class="text-center p-1">
            <img src="${stanza.image}" class="w-100 rounded mb-0" style="height: 300px">
        </div>`
    }, 1000);
}