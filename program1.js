const EventEmitter = require('events');
const a= new EventEmitter();
a.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
a.emit('greet', 'Qamruzzama');
a.on('exit', (name) => {
    console.log(`Thank you for visiting!${name}`);
});
a.emit('exit', 'Qamruzzama');



class Button extends EventEmitter {
    click() {
        console.log('Button clicked!');
        this.emit('click');
    }
}

const button = new Button();
button.on('click', () => {
    console.log('Button was clicked!');
});
button.click();