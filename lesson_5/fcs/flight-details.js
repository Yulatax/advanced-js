// Реализовать функцию flightDetails(flightName) которая принимает объект рейса и будет выводить
// в контейнер <div id=”flight-details”></div> отчет по рейсу и отображать список купленных билетов:
// номер билета, место, полное имя пассажира, прошел ли регистрацию на рейс.

/**
 * Функция отображения отчета по рейсу
 *
 *  * генерируются данные для отчета на основании функции flightReport
 *  * строится html-схема для отображения данных по рейсу
 *
 * @param {World} world
 * @param {Flight} flight объект рейса
 * @param {number} nowTime текущее время
 */

function showFlightDetails(world, flight, nowTime) {
    const currentFlight = world.flights[flight.name];

    if (!currentFlight) {
        throw new Error('Flight is not found');
    }

    const report = flightReport(world, currentFlight, nowTime);

    const container = document.createElement('div');
    container.id = 'flight-details';
    container.style.cssText = 'width: 700px; margin: auto';

    const title = document.createElement('h2');
    title.textContent = `Flight ${report.flight} report`;
    title.style.cssText = 'color: cadetblue; text-align: center';
    container.appendChild(title);

    const reportTable = createReportTable(report);
    container.appendChild(reportTable);

    const tickets = changeTicketsStructure(currentFlight.tickets);
    const ticketsTable = createTicketsTable(tickets);
    container.appendChild(ticketsTable);

    document.body.appendChild(container);
}

function changeTicketsStructure(tickets) {
    return tickets.map(ticket => {
        return {
            ticketNumber: ticket.id,
            passengerName: ticket.fullName,
            seat: ticket.seat,
            registration: ticket.registrationTime > 0
        }
    })
}

function createReportTable(reportObject) {
    const table = createTable(Object.keys(reportObject));
    const tBody = table.createTBody();
    const tbodyRow = tBody.insertRow(0);
    createTableRow(Object.values(reportObject), tbodyRow);
    return table;
}

function createTicketsTable(tickets) {
    const table = createTable(['ticket', 'passengerName', 'seat', 'registration']);
    const tBody = table.createTBody();
    tickets.forEach((ticket, ind) => {
        const tbodyRow = tBody.insertRow(ind);
        createTableRow(Object.values(ticket), tbodyRow);
    });
    return table;
}

function createTable(headerDataArr) {
    const table = document.createElement('table');
    table.style.cssText = 'border: 1px solid black; border-collapse: collapse; text-align: center; width: 100%; margin-top: 20px';
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    createTableRow(headerDataArr, headerRow);
    return table;
}

function createTableRow(dataArr, row) {
    dataArr.forEach((item, ind) => {
        const cell = row.insertCell(ind);
        cell.textContent = item;
        cell.style.cssText = 'border: 1px solid black; text-align: center; padding: 5px';
    })
}