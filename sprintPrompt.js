import promptSync from 'prompt-sync';
const prompt = promptSync();
let entry = prompt('Insira a entrada: ');

let arr = [];

do {
    arr.push(entry)
    entry = prompt('Insira a entrada: ')
} while (entry.toLowerCase() !== 'sair')

let org = arr.sort().join("\n")
console.log(org);