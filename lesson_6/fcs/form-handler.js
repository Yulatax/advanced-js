let ticketForm = document.querySelector('#ticketForm');

if (ticketForm) {
    ticketForm.addEventListener('submit', ticketFormHandler);
    let controls = ticketForm.querySelectorAll('.form-control');
    Array.from(controls).forEach(elem => elem.addEventListener('focus', hideMessage));
}

function ticketFormHandler(event) {
    event.preventDefault();
    let form = event.currentTarget;
    let [name, flight, type, hour, min] = [
        form.elements.fname.value,
        form.elements.flight.value,
        +form.elements.fclass.value,
        +form.elements.hours.value,
        +form.elements.minutes.value
    ];
    let res;
    try {
        res = buyTicket(bigWorld, flight, makeTime(hour, min), name, type);
    } catch (err) {
        displayMessage(err.message, 'error');
        return;
    }
    bigWorld = res.world;
    console.log(bigWorld);
    form.reset();
    displayMessage(`Reservation successful, your seat number: ${res.ticket.seat}`, 'success')
}

function displayMessage(message, type) {
    let elem = document.querySelector('.message');
    elem.textContent = message;
    elem.style.display = 'block';
    switch (type) {
        case 'error': elem.style.color = 'red'; return;
        case 'success': elem.style.color = 'green'; return;
    }
}

function hideMessage() {
    let elem = document.querySelector('.message');
    elem.style.display = 'none';
}
