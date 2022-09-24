let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!(isAtivo));

console.log("Tipos verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!![]);
console.log(!!{});
console.log(!!"Texto");
console.log(!!Infinity);

console.log("Tipos Falsos");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log("Para finalizar, é possível montar expressões como: ");
console.log(!!('' || null || undefined || NaN));
