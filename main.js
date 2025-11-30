

const logic = require("logicjs");

// importamos helpers
const { lvar, fact, run, call } = logic;

// variables lógicas
const Heroe = lvar();
const Aliado = lvar();
const Enemigo = lvar();
const Mentor = lvar();

// hechos
fact("esAliado", "batman", "robin");
fact("esAliado", "ironman", "spiderman");
fact("esAliado", "wonderwoman", "superman");

fact("esEnemigo", "batman", "joker");
fact("esEnemigo", "spiderman", "greengoblin");
fact("esEnemigo", "superman", "lexluthor");

fact("esMentor", "batman", "robin");
fact("esMentor", "ironman", "spiderman");

// consultas
console.log("\n--- Aliados de Batman ---");
run(10, [Aliado], call("esAliado", "batman", Aliado))
  .forEach(r => console.log("Aliado:", r.get(Aliado)));

console.log("\n--- Enemigos de Superman ---");
run(10, [Enemigo], call("esEnemigo", "superman", Enemigo))
  .forEach(r => console.log("Enemigo:", r.get(Enemigo)));

console.log("\n--- Mentores de Spider-Man ---");
run(10, [Mentor], call("esMentor", Mentor, "spiderman"))
  .forEach(r => console.log("Mentor:", r.get(Mentor)));

console.log("\n--- Pares héroe–aliado ---");
run(10, [Heroe, Aliado], call("esAliado", Heroe, Aliado))
  .forEach(r => console.log("Par:", r.get(Heroe), "-", r.get(Aliado)));


