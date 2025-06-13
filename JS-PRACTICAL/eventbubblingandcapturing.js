// Event bubbling (default behavior)
document.querySelector('.three').addEventListener('click', () => {
    console.log('Outer div clicked (bubbling)');
}, true);

document.querySelector('.two').addEventListener('click', () => {
    console.log('Middle div clicked (bubbling)');
}, true);

document.querySelector('.one').addEventListener('click', () => {
    console.log('Inner div clicked (bubbling)');
}, true);

document.querySelector('#button').addEventListener('click', () => {
    console.log('Button clicked');
}, true);

// Event capturing
// document.querySelector('.outer').addEventListener('click', () => {
//     console.log('Outer div clicked (capturing)');
// }, true);

// document.querySelector('.middle').addEventListener('click', () => {
//     console.log('Middle div clicked (capturing)');
// }, true);

// document.querySelector('.inner').addEventListener('click', () => {
//     console.log('Inner div clicked (capturing)');
// }, true);

// document.querySelector('#button').addEventListener('click', () => {
//     console.log('Button clicked (capturing)');
// }, true);