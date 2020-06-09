'use strict';

const result = addFlight(
    bigWorld,
    {
        name: 'Airbus 747',
        seats: 36,
        businessSeats: 4,
    },
    makeTime(16, 0),
    'BH118',
);

bigWorld = result.world;

console.log(bigWorld);

let res = buyTicket(bigWorld, 'BH118', makeTime(5, 10), 'Petrov I. I.');

bigWorld = res.world;
console.log(bigWorld);

let res2 = buyTicket(bigWorld, 'BH118', makeTime(5, 10), 'Ivanov I. I.');

bigWorld = res2.world;

let reg1 = eRegistration(bigWorld, res.ticket.id, 'Petrov I. I.', makeTime(14, 18));

bigWorld = reg1.world;

let res3 = buyTicket(bigWorld, 'BH118', makeTime(8, 20), 'Katz V');

bigWorld = res3.world;

let reg2 = eRegistration(bigWorld, res3.ticket.id, 'Katz V', makeTime(14, 30));

bigWorld = reg2.world;
console.log(bigWorld);

// showFlightDetails(bigWorld, bigWorld.flights['BH118'], makeTime(15, 0));
// console.log(bigWorld);