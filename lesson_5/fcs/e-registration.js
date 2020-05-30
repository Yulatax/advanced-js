'use strict';

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * в информации о рейсе указано время начала
 *  * и конца электронной регистрации
 *
 * @param {World} world
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns {World} если успешно или ошибка
 */
function eRegistration(world, ticket, fullName, nowTime) {
    const ticketParts = ticket.split('-');

    if (ticketParts.length !== 2) {
        throw new Error('Incorrect ticket number format.');
    }

    const ticketFlightName = ticketParts[0];
    const flight = world.flights[ticketFlightName];

    if (!flight) {
        throw new Error('Flight is not found');
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

    const newTicket = {...currentTicket, ...{registrationTime: nowTime}};

    const tickets = [
        ...flight.tickets.filter(item => item !== currentTicket),
        ...[newTicket]
    ];

    const newFlight = {
        ...flight,
        tickets,
    };

    const flights = {
        ...world.flights,
        [flight.name]: newFlight,
    };

    const newWorld = {
        ...world,
        flights,
    };

    return {
        world: newWorld
    };
}
