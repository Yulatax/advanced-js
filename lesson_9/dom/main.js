'use strict';

const parent = document.querySelector('.container');
const el = new Div();
el.target = parent;
el.template = `<div>Title: {{output}},<br> Date: {{today}}</div>`;
el.variables = {
    output: 'Some text',
    today: function () {
        return new Date().toDateString();
    }
};
el.styles = {
    width: '600px',
    border: '1px solid blue',
    color: 'green',
    padding: '10px'
};
console.log(el);
el.render();
el.styles = {
    color: "purple"
};
el.onClick = () => {
    console.log('test')
};
el.template = `<div>Abra cadabra</div>`;
console.log(el);
// el.unrender();


// const input = new Input();
// input.target = parent;
// input.template = `<input type="text" class="name-input" placeholder="Name" width="250px">`;
// input.styles = {
//     color: 'green',
//     padding: '10px'
// };
// input.render();
// input.styles = {
//   color: 'orange'
// };
// input.onFocus = () => {
//     console.log('focus');
// };

