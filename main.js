const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const random = document.querySelector('.random');
const clear = document.querySelector('.clear');

green.addEventListener('click', () => {

    document.body.style.backgroundColor = '#00800065';
})

red.addEventListener('click', () => {

    document.body.style.backgroundColor = '#ff000050';
})

blue.addEventListener('click', () => {

    document.body.style.backgroundColor = '#0000ff67';
})
clear.addEventListener('click', () => {

    document.body.style.backgroundColor = '#fff';
})

random.addEventListener('click', () => {
  
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
});



