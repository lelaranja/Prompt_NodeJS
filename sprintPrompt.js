import promptSync from 'prompt-sync'; 
const prompt = promptSync(); 
let entry = prompt('Insira a entrada: ');

let arr = [];

while(entry !== 'Sair'){
    arr.push(entry)
    entry = prompt('Insira a entrada: ');
    break
}

console.log(arr.sort());