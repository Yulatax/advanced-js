function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(10, 0),
        registartionEnds: makeTime(15, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null,
            }
        ],
    }
};

/**
 * Добавление рейса
 * 
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 * 
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 * 
 * Гарантирует что найдет свободное место нужного типа или вернет null
 * 
 * @param {Flight} flight 
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
        case 0: // standart
            const availableSeats = [];

            for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    availableSeats.push(i);

            if (availableSeats.length === 0)
                return null;

            const index = Math.floor(Math.random() * availableSeats.length);
            return availableSeats[index];
        case 1: // business
            for (let i = 1; i <= flight.businessSeats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    seatsOfType++;

            if (seatsOfType === 0)
                return null;

            do {
                seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                exists = flight.tickets.find(item => item.seat === seat);
            } while (exists);

            return seat;
        default:
            throw new Error(`Unknown type`)
    }
}

/**
 * Покупка билета на самолет
 * 
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 * 
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight)
        throw new Error('Flight not found');

    if (flight.tickets.length >= flight.seats)
        throw new Error('No seats available');

    if (buyTime > flight.registartionEnds)
        throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat)
        throw new Error(`No seats of type ${type} available. You can choose another type`);

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        returnTime: null,
        type,
        seat,
    }

    flight.tickets.push(ticket);

    // return Object.assign({}, ticket);
    return {
        ...ticket,
        welcome: 'Nice to choose us',
    };
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
console.log(a);


function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 *
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
    try {
        var flight = findFlightByTicketNumber(ticket);
    } catch (e) {
        console.log(e.message);
        return false;
    }

    if (nowTime < flight.registrationStarts || nowTime > flight.registartionEnds) {
        throw new Error('Registration is not available');
    }

    const currentTicket = flight.tickets.find(item => item.id === ticket);

    if (!currentTicket) {
        throw new Error('Ticket is not found');
    }

    if (currentTicket.registrationTime) {
        throw new Error('Passenger is already registered');
    }

    if (currentTicket.fullName !== fullName) {
        throw new Error('Passenger is not found');
    }

    currentTicket.registrationTime = nowTime;
    return true;
}

eRegistration(a.id, a.fullName, makeTime(13, 26));

/**
 * Функция возврата билета
 *
 *  * проверка рейса
 *  * проверка билета
 *  * вернуть билет можно если до рейса не менее 3 часов
 *  * вернуть билет можно если не бизнес класс
 *
 * @param {string} ticket номер билета
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли отменить билет
 */
function revertTicket(ticket, nowTime) {

    try {
        var flight = findFlightByTicketNumber(ticket);
    } catch (e) {
        console.log(e.message);
        return false;
    }

    const regEndTime = new Date(flight.registartionEnds);
    const returnEndTime = regEndTime.setHours(regEndTime.getHours() - 2);
    // console.log(returnEndTime);

    if (nowTime > returnEndTime) {
        throw new Error('Return time is over');
    }

    const currentTicket = flight.tickets.find(item => item.id === ticket);

    if (!currentTicket) {
        throw new Error('Ticket is not found');
    }

    currentTicket.returnTime = nowTime;
    return true;
}


/**
 * Функция поиска рейса по номеру билета
 *
 *  * проверка формата билета
 *  * проверка рейса
 *
 * @param {string} ticketNumber номер авиабилета
 * @returns {Flight} рейс
 */
function findFlightByTicketNumber(ticketNumber) {
    const ticketParts = ticketNumber.split('-');

    if (ticketParts.length !== 2) {
        throw new Error('Incorrect ticket number format.');
    }

    const ticketFlightName = ticketParts[0];
    const flight = flights[ticketFlightName];

    if (!flight) {
        throw new Error('Flight is not found');
    }

    return flight;
}


/**
 * Функция генерации отчета по рейсу
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flight, nowTime) {
    const currentFlight = flights[flight];

    if (!currentFlight) {
        throw new Error('Flight is not found');
    }

    const registrationLive = (nowTime >= currentFlight.registrationStarts && nowTime <= currentFlight.registartionEnds);
    const complete = nowTime > currentFlight.registartionEnds;

    // общее количество купленных мест
    const countOfReservations = currentFlight.tickets.reduce((total, ticket) => {
        if (ticket.seat > 0 && ticket.seat !== null){
            total++;
        }
        return total;
    }, 0);

    // количество пассажиров, прошедших регистрацию перед вылетом
    const registeredSeats = currentFlight.tickets.reduce((total, ticket) => {
        if (ticket.registrationTime) {
            total++;
        }
        return total;
    }, 0);

    // количество возвратов
    const countOfReverts = currentFlight.tickets.reduce((total, ticket) => {
        if (ticket.returnTime) {
            total++;
        }
        return total;
    }, 0);

    //количество зарезервированных мест
    const reservedSeats = countOfReservations - countOfReverts;

    // процент возвратов
    const percentOfReverts = `${(countOfReverts/reservedSeats)*100}%`;

    return {
        flight: currentFlight.name,
        registration: registrationLive,
        complete,
        countOfSeats: currentFlight.seats,
        countOfReservations,
        registeredSeats,
        countOfReverts,
        reservedSeats,
        percentOfReverts
    };
}