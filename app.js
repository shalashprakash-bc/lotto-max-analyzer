const API_URL =
'https://YOUR-WORKER.workers.dev';

async function loadData(){

    const res = await fetch(API_URL);

    const data = await res.json();

    displayHot4(data.hot4);
    displayHot10(data.hot10);
    displayCold10(data.cold10);
    displayTickets(data);
}

function displayHot4(numbers){

    const div =
        document.getElementById('hot4');

    div.innerHTML = '';

    numbers.forEach(item=>{

        const ball =
            document.createElement('div');

        ball.className='ball';

        ball.textContent=item.number;

        div.appendChild(ball);
    });
}

function displayHot10(numbers){

    document.getElementById('hot10').innerHTML =
        numbers.map(n =>
            `${n.number} (${n.count})`
        ).join('<br>');
}

function displayCold10(numbers){

    document.getElementById('cold10').innerHTML =
        numbers.map(n =>
            `${n.number} (${n.count})`
        ).join('<br>');
}

function displayTickets(data){

    const container =
        document.getElementById('tickets');

    container.innerHTML='';

    data.tickets.forEach((ticket,index)=>{

        const div =
            document.createElement('div');

        div.className='ticket';

        div.innerHTML=
            `<strong>#${index+1}</strong><br>
            ${ticket.join(' - ')}`;

        container.appendChild(div);
    });
}

function saveLuckyNumbers(){

    localStorage.setItem(
        'luckyNumbers',
        document.getElementById('luckyNumbers').value
    );

    alert('Saved!');
}

if('serviceWorker' in navigator){
    navigator.serviceWorker.register(
        '/service-worker.js'
    );
}

loadData();
