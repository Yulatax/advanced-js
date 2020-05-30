'use strict';

/**
 * Функция генерации отчета по рейсу
 *
 * Отчет строится на основании данных, содержащихся в параметре flight
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {World} world
 * @param {Flight} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(world, flight, nowTime) {
    const currentFlight = world.flights[flight.name];

    if (!currentFlight) {
        throw new Error('Flight is not found');
    }

    const registrationLive = (nowTime >= currentFlight.registrationStarts && nowTime <= currentFlight.registartionEnds);
    const complete = nowTime > currentFlight.registartionEnds;

    const reservedSeats = currentFlight.tickets.reduce((total, ticket) => {
        if (ticket.seat > 0 && ticket.seat !== null){
            total++;
        }
        return total;
    }, 0);

    const registeredSeats = currentFlight.tickets.reduce((total, ticket) => {
        if (ticket.registrationTime) {
            total++;
        }
        return total;
    }, 0);

    return {
        flight: currentFlight.name,
        registration: registrationLive,
        complete,
        countOfSeats: currentFlight.seats,
        reservedSeats,
        registeredSeats
    };
}