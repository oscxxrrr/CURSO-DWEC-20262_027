type Producto = {
  id: number
  nombre: string
  precio: number
  rebajado: boolean
}

const productos: Producto[] = [
  { id: 1, nombre: 'Teclado', precio: 25, rebajado: false },
  { id: 2, nombre: 'Ratón', precio: 15, rebajado: true },
  { id: 3, nombre: 'Monitor', precio: 180, rebajado: false },
  { id: 4, nombre: 'Altavoces', precio: 45, rebajado: true },
  { id: 5, nombre: 'Webcam', precio: 60, rebajado: false }
]

function buscarProducto(catalogo: Producto[], id: number): Producto | null {
  const encontrado = catalogo.find(prod => prod.id === id)

  if (encontrado === undefined) {
    return null
  }

  return encontrado
}

export function ejercicio04(): void {
  console.log('buscar id3 monitor')
  console.log(buscarProducto(productos, 3))

  console.log('buscar id 99')
  console.log(buscarProducto(productos, 99))

  console.log('buscar vacio')
  console.log(buscarProducto([], 3))
}
