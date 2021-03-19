let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);


let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Portfólio');

console.log(menuServices);

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);

//_______________________________________________________________________________________________

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (index = 0; index < groceryList.length; index +=1) {
  console.log(groceryList[index])
}