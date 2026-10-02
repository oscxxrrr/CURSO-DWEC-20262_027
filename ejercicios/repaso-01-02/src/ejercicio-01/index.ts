const lecturas = ['21.5', '19', '', '23.5', 'error', '20']

function analizarLecturas(lecturas: string[]): {
  validas: number
  descartadas: number
  media: string
} {
  let validas = 0
  let descartadas = 0
  let suma = 0

  for (const lectura of lecturas) {
    if (lectura === '' || !Number.isFinite(Number(lectura))) {
      descartadas++
    } else {
      validas++
      const valorNumerico = Number(lectura)
      suma += valorNumerico

      // Ternario para clasificar la lectura válida
      const etiqueta = valorNumerico >= 22 ? 'Caluroso' : 'Fresco'
      console.log(`Lectura: ${valorNumerico} -> ${etiqueta}`)
    }
  }

  // Evitar división entre cero si no hay lecturas válidas
  if (validas === 0) {
    return {
      validas: 0,
      descartadas,
      media: 'Sin datos'
    }
  }

  const mediaCalculada = suma / validas

  return { validas, descartadas, media: mediaCalculada.toFixed(1) }
}

export function ejercicio01(): void {
  console.log('Probando array principal')
  console.log(analizarLecturas(lecturas))

  console.log('Probando array vacío')
  console.log(analizarLecturas([]))

  console.log('Probando array con cero')
  console.log(analizarLecturas(['0']))
}
