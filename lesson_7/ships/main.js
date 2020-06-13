'use strict';

const ship1 = new Ship('Ship1');
console.log(`Speed: ${ship1.getSpeed()}`);
console.log(`Distance: ${ship1.distance}`);
ship1.increaseSpeed();
ship1.stop();
console.log(`Speed: ${ship1.getSpeed()}`);
ship1.dropAnchor();
ship1.riseAnchor();
ship1.increaseSpeed(50);
ship1.decreaseSpeed();
let coords = new Position(6, 8);
ship1.moveTo(coords);
console.log(ship1.position);
console.log(`Distance: ${ship1.distance}`);
ship1.move('n');
console.log(ship1.position);
console.log(`Distance: ${ship1.distance}`);
ship1.decreaseSpeed();
console.log(ship1.getSpeed());
const dock = new Dock(new Position(12, 1));
dock.moor(ship1);
console.log(dock.ships);
console.log(ship1.position);
console.log(`Distance: ${ship1.distance}`);
console.log(`Speed: ${ship1.getSpeed()}`);
const ship2 = new Ship('Ship2');
ship2.increaseSpeed(40);
dock.moor(ship2);
console.log(dock.ships);
console.log(ship2.position);
console.log(`Distance: ${ship2.distance}`);
dock.unmoor(ship1);
console.log(dock.ships);
console.log(ship1.isAnchorDroped());




