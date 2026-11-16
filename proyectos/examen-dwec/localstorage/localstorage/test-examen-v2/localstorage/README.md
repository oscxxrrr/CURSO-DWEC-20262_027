# Test de examen · v2: persistencia con localStorage

Esta versión añade persistencia a [la v1](../test-examen-v1/README.md). Buscar, añadir, borrar y marcar favoritos siguen el mismo ciclo: evento → nuevo estado → renderizado. Conviene leer primero la explicación completa de la v1.

## Ejecutar

Dentro de esta carpeta:

```bash
npm ci
npm run dev
```

`npm run build` comprueba tipos y genera `dist`. Cada versión se ejecuta por separado; usar la dirección que indique Vite.

## Qué cambia respecto a la v1

| Punto | v1 | v2 |
| --- | --- | --- |
| Inicio | `products: initialProducts` | `products: loadProducts() ?? initialProducts` |
| Añadir, borrar y favorito | Actualizar estado y renderizar | Actualizar estado, guardar productos y renderizar |
| Búsqueda | En memoria | En memoria; no se guarda |
| Recarga | Restablece datos iniciales | Recupera productos válidos guardados |
| Servicio adicional | Ninguno | `src/services/storage.ts` |

No hay que reescribir componentes ni cambiar el tipo de producto. Esa continuidad permite observar para qué sirve separar responsabilidades.

## Cargar, paso a paso

1. `localStorage.getItem(KEY)` lee texto asociado a `test-examen-v2:products`, o devuelve `null` si la clave no existe.
2. `JSON.parse(text)` transforma el JSON en un valor JavaScript. Puede fallar si el texto está mal formado.
3. Se recibe como `unknown`: un JSON válido no garantiza que sea una lista de productos.
4. `Array.isArray(data)` y `data.every(isProduct)` comprueban su estructura.
5. Si los datos no sirven, `loadProducts` devuelve `null`. El operador `??` selecciona entonces `initialProducts`.

Una lista vacía `[]` es válida y se conserva. No se debe sustituir por los productos iniciales: el usuario puede haber borrado todos.

`isProduct(x): x is Product` es un predicado de tipo: informa a TypeScript de que, si devuelve `true`, podemos tratar el valor como producto. El `as Record<string, unknown>` permite consultar campos al compilador; la comprobación real la realizan `typeof` y las condiciones. Una aserción por sí sola no valida nada.

## Guardar, paso a paso

`JSON.stringify(products)` convierte los productos en texto. `localStorage.setItem(KEY, texto)` lo conserva en el almacenamiento de ese origen del navegador. Se llama después de añadir, borrar o marcar un favorito, porque esas acciones cambian la lista.

No se guarda la búsqueda: al recargar vuelve a estar vacía. El almacenamiento no sustituye al estado; sirve para reconstruirlo en el próximo arranque. Durante la ejecución, la fuente de verdad sigue siendo `state`.

Los datos pertenecen a un origen —protocolo, host y puerto— y al perfil del navegador. No se comparten automáticamente entre dispositivos ni entre puertos de desarrollo. No se deben guardar contraseñas ni secretos en este ejercicio.

## ¿Es didáctica esta v2?

Sí, como segunda etapa después de dominar la v1. Mantiene las mismas operaciones y aísla la nueva responsabilidad en un servicio pequeño. Permite enseñar una necesidad concreta —conservar cambios al recargar—, JSON y la diferencia entre tipos estáticos y validación en ejecución.

Como primera práctica completa acumula demasiados conceptos: módulos, genéricos, callbacks, closures, arrays inmutables, DOM, `FormData`, `unknown`, predicados y almacenamiento. Es preferible construir la v1 por acciones y presentar después un diff de los puntos de integración de la v2.

### Precisiones sobre el código actual

- «En un evento NUNCA se toca la pantalla» es demasiado absoluto: `form.reset()` modifica controles. La regla es que lista y contador se actualicen a partir del estado mediante `render()`.
- «Pinta la pantalla desde cero» se refiere a los hijos de la lista. Los elementos fijos se conservan.
- El máximo actual más uno evita colisiones con identificadores presentes; puede reutilizar uno eliminado.
- `readonly` no congela profundamente los objetos. La inmutabilidad depende también de las operaciones utilizadas.
- El estado no incluye los valores temporales del formulario, que se leen al enviarlo.

### Límites técnicos para explicar, no ocultar

La implementación actual captura errores de `JSON.parse`, pero `getItem` queda fuera del `try` y `setItem` no tiene captura. Si el navegador impide el acceso o falla el guardado por cuota, la aplicación puede interrumpirse. En una siguiente mejora conviene tolerar errores de almacenamiento, continuar en memoria e informar al usuario de que los cambios no se conservarán.

La validación comprueba tipos básicos, pero acepta identificadores repetidos, nombres vacíos y precios negativos o no finitos. Por ejemplo, el JSON `1e400` se convierte en un número infinito. Ampliar la validación es un ejercicio posterior: números finitos, ids enteros positivos únicos, nombre no vacío y precio no negativo.

El formulario añade validación HTML, pero `Number("")` convierte un vacío en cero. Si se extrae la lógica fuera del formulario, hay que validar el valor bruto antes de convertirlo.

Estas observaciones describen el código revisado; en este bloque se añade documentación, sin modificar el funcionamiento de la v2.

## Secuencia para explicar la transición

1. Añadir un producto en la v1 y recargar: plantear el problema.
2. Mostrar que `state` desaparece al recargar; distinguir memoria de persistencia.
3. Introducir `stringify` y `parse` con una lista pequeña.
4. Leer `saveProducts` y añadir sus tres llamadas tras cambios de productos.
5. Leer `loadProducts`, explicar `unknown`, validación y `??`.
6. Probar JSON inválido y lista vacía; después discutir los errores de acceso.

## Pruebas manuales propuestas

- Añadir, borrar y marcar favoritos; recargar: se conservan los cambios.
- Escribir una búsqueda y recargar: la búsqueda se vacía.
- Borrar todos; recargar: la lista sigue vacía.
- En las herramientas del navegador, cambiar solo la clave de este ejercicio a texto que no sea JSON; recargar: vuelve a los productos iniciales.
- Probar JSON válido con estructura incorrecta: también se descarta.
- Eliminar únicamente `test-examen-v2:products` para restaurar el punto de partida. No usar `localStorage.clear()`, que borraría otras claves del mismo origen.

Ejercicio final: explicar por qué cargar ocurre al arrancar, guardar ocurre en las acciones y ninguna de las dos cosas pertenece a `render()`.
