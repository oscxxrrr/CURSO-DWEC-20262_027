const datos: number[] = [1, -10, 25, 11, 9, 5, -6, 8, -5, 9, 12, -10]

const positivos: number[] = []
const negativos: number[] = []
let sumaPositivos = 0
let sumaNegativos = 0

let i = 0
while (true) {
  if (i >= datos.length) break
  
  const n = datos[i]
  n >= 0 ? (positivos.push(n), sumaPositivos += n) : (negativos.push(n), sumaNegativos += n)
  
  i++
}

console.log("Positivos:", positivos, "Suma:", sumaPositivos)
console.log("Negativos:", negativos, "Suma:", sumaNegativos)
