const player = 'yis';
var var1 = 100;
let = var2 = 80

if (player === 'yis'){
    var var1 = 101;
    let var2 = 90;
    console.log('var1 in if ' + var1);
    console.log('var2 in if ' + var2);
}

console.log('var1 out if ' + var1);
console.log('var2 out if ' + var2);

const templ = `<div>${player}</div>`;
window.addEventListener('load', (event) => {
    document.body.innerHTML = templ;
  });
