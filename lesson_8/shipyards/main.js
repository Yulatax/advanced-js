const motorShip1 = new MotorShip('MotorShip1', 'MS01', 'grey', 40, 'steel');
console.log(motorShip1);
console.log(motorShip1.isAnchorDroped());
motorShip1.increaseSpeed(40);
console.log(motorShip1.getSpeed());
console.log(motorShip1.material);
motorShip1.moveTo(new Position(14, 5));
console.log(motorShip1.distance);

let sailingShip1 = new SailingShip('SailingShip1', 'SS01',  'white', 4, 20);
console.log(sailingShip1);
console.log(sailingShip1.model);
sailingShip1.increaseSpeed(20);
sailingShip1.moveTo(new Position(7, 4));
sailingShip1.stop();
console.log(sailingShip1.getSpeed());
console.log(sailingShip1.distance);

const motorShipyard = new MotorShipyard('MotorShipyard');
motorShipyard.repaintShip(motorShip1, 'blue');
console.log(motorShip1.color);

const motorShip2 = motorShipyard.buildMotorShip('MotorShip2', 'MS02', 'green', 35, 'steel');
console.log(motorShip2);
motorShip2.damaged = true;
motorShipyard.repairMotorShip(motorShip2);
console.log(motorShip2.damaged);
// motorShipyard.repairMotorShip(sailingShip1);

const sailingShipyard = new SailingShipyard('SailingShipyard');
// sailingShipyard.repairSailingShip(motorShip2);
sailingShip1 = sailingShipyard.changeSailingShip(sailingShip1);
console.log(sailingShip1);

// function Foo(name) {
//     this.name = name;
// }
//
// Foo.prototype.myName = function() {
//     return this.name;
// };
//
// function Bar(name,label) {
//     Foo.call( this, name );
//     this.label = label;
// }
//
// Bar.prototype = Object.create( Foo.prototype );
// Bar.prototype.myLabel = function() {
//     return this.label;
// };
//
// var a = new Bar( "a", "obj a" );
// console.log(a);