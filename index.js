// Taller de npm - Paso 6
// Se corre con: npm run dev

// Traigo las librerías que instalé con npm
const moment = require('moment');
const _ = require('lodash');
const { faker } = require('@faker-js/faker');

// ========== MOMENT.JS ==========
// Sirve para trabajar con fechas y horas
console.log("----- Moment.js -----");

// 1. Fecha de hoy (año-mes-día)
console.log("1. Fecha actual:", moment().format('YYYY-MM-DD'));

// 2. Hora actual. HH es para que salga en 24 horas
console.log("2. Hora actual:", moment().format('HH:mm:ss'));

// 3. Día de la semana (sale en inglés)
console.log("3. Día de la semana:", moment().format('dddd'));

// 4. Le sumo 7 días a hoy
console.log("4. En 7 días:", moment().add(7, 'days').format('YYYY-MM-DD'));

// 5. Le resto 3 meses a hoy
console.log("5. Hace 3 meses:", moment().subtract(3, 'months').format('YYYY-MM-DD'));

// 6. Días que faltan para el 31 de diciembre
// diff me da la diferencia entre dos fechas
const finDeAnio = moment().endOf('year');
console.log("6. Días para el 31 de diciembre:", finDeAnio.diff(moment(), 'days'));

// 7. Reviso si la fecha existe. Da false porque febrero no tiene 30 días
console.log("7. ¿2025-02-30 es válida?:", moment('2025-02-30', 'YYYY-MM-DD', true).isValid());

// 8. Primer día del mes
console.log("8. Inicio del mes:", moment().startOf('month').format('YYYY-MM-DD HH:mm:ss'));

// 9. Último segundo del día de hoy
console.log("9. Final del día:", moment().endOf('day').format('YYYY-MM-DD HH:mm:ss'));

// 10. Días que han pasado desde el 1 de enero de 2025
console.log("10. Días desde 2025-01-01:", moment().diff(moment('2025-01-01'), 'days'));

// ========== LODASH ==========
// Sirve para trabajar más fácil con arrays y objetos
console.log("----- Lodash -----");

const numeros = [10, 5, 20, 8];

// 1. El número más grande
console.log("1. Máximo:", _.max(numeros));

// 2. El número más pequeño
console.log("2. Mínimo:", _.min(numeros));

// 3. Ordeno de menor a mayor
console.log("3. Ordenado:", _.sortBy([3, 1, 4, 2]));

// 4. Quito los repetidos
console.log("4. Sin duplicados:", _.uniq([1, 2, 2, 3, 4, 4, 5]));

// 5. Parto el array en grupos de 2
console.log("5. En partes de 2:", _.chunk([1, 2, 3, 4, 5], 2));

// 6. Junto dos arrays en uno
console.log("6. Combinados:", _.concat([1, 2], [3, 4]));

// 7. Cambio por * desde la posición 1 hasta antes de la 3
console.log("7. Rellenado:", _.fill([1, 2, 3, 4, 5], '*', 1, 3));

// 8. Busco la posición del primer número mayor que 3
// Da 3 porque las posiciones empiezan en 0
console.log("8. Índice del primer mayor que 3:", _.findIndex([1, 2, 3, 4, 5], (n) => n > 3));

// 9. Agrupo los productos según su type
const productos = [
  { nombre: "Manzana", type: "fruta" },
  { nombre: "Zanahoria", type: "verdura" },
  { nombre: "Banano", type: "fruta" }
];
console.log("9. Agrupados por type:", _.groupBy(productos, 'type'));

// 10. Volteo el objeto: las claves pasan a ser los valores
console.log("10. Objeto invertido:", _.invert({ a: 1, b: 2 }));

// ========== FAKER.JS ==========
// Sirve para crear datos falsos para hacer pruebas
// Cada vez que lo corro salen datos distintos
console.log("----- Faker.js -----");

// 1. Nombre completo
console.log("1. Nombre completo:", faker.person.fullName());

// 2. Correo
console.log("2. Correo:", faker.internet.email());

// 3. Dirección
console.log("3. Dirección:", faker.location.streetAddress());

// 4. Teléfono
console.log("4. Teléfono:", faker.phone.number());

// 5. Fecha de nacimiento
console.log("5. Fecha de nacimiento:", faker.date.birthdate());

// 6. Nombre de usuario
console.log("6. Usuario:", faker.internet.username());

// 7. País
console.log("7. País:", faker.location.country());

// 8. Producto
console.log("8. Producto:", faker.commerce.productName());

// 9. Empresa
console.log("9. Empresa:", faker.company.name());

// 10. Tarjeta de crédito (falsa)
console.log("10. Tarjeta de crédito:", faker.finance.creditCardNumber());
