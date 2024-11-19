import { obtenerProductos, obtenerCategorias } from '../Api/servicios'
import { Product, Category } from '../interfaces/Producto';

// Inicialización del carrito
let carrito: number[] = [];

// Función para incrementar el carrito
function incrementarCarrito(): void {
  carrito.push(1);
  actualizarContadorCarrito();
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito(): void {
  const notificacion = document.querySelector('.notificacion') as HTMLElement;
  notificacion.textContent = carrito.length.toString();
}

// Función para cargar productos en el contenedor
async function cargarProductos(categoriaSeleccionada: string = '', terminoBusqueda: string = ''): Promise<void> {
  try {
    const productos: Product[] = await obtenerProductos(categoriaSeleccionada);
    const contenedorProductos = document.querySelector('.productos') as HTMLElement;

    while (contenedorProductos.firstChild) {
      contenedorProductos.removeChild(contenedorProductos.firstChild);
    }

    const productosFiltrados = productos.filter(producto =>
      producto.title.toLowerCase().includes(terminoBusqueda) ||
      producto.description.toLowerCase().includes(terminoBusqueda)
    );

    if (productosFiltrados.length === 0) {
      const mensajeNoProductos = document.createElement('p');
      mensajeNoProductos.textContent = 'No se encontraron productos.';
      contenedorProductos.appendChild(mensajeNoProductos);
      return;
    }

    productosFiltrados.forEach(producto => {
      const divProducto = document.createElement('div');
      divProducto.classList.add('producto');

      const imgProducto = document.createElement('img');
      imgProducto.src = producto.images[0] || '../imagenes/iconos/default-product-image.jpg';
      imgProducto.alt = producto.title || 'Producto sin nombre';
      imgProducto.classList.add('img-producto');

      const nombreProducto = document.createElement('h3');
      nombreProducto.textContent = producto.title;

      const descripcion = document.createElement('p');
      descripcion.textContent = producto.description || 'Descripción no disponible';

      const categoria = document.createElement('p');
      categoria.classList.add('categoria');
      categoria.textContent = `Categoría: ${producto.category || 'Sin categoría'}`;

      const precio = document.createElement('p');
      precio.classList.add('precio');
      precio.textContent = `Precio: S/ ${producto.price || 'No disponible'}`;

      const botonAgregar = document.createElement('button');
      botonAgregar.textContent = 'Agregar al carrito';
      botonAgregar.addEventListener('click', () => incrementarCarrito());

      divProducto.appendChild(imgProducto);
      divProducto.appendChild(nombreProducto);
      divProducto.appendChild(descripcion);
      divProducto.appendChild(categoria);
      divProducto.appendChild(precio);
      divProducto.appendChild(botonAgregar);

      contenedorProductos.appendChild(divProducto);
    });
  } catch (error) {
    console.error('Error al cargar los productos en el contenedor:', error);
  }
}

// Función para llenar el select con las categorías
function llenarSelectCategorias(categorias: Category[]): void {
  const selectCategorias = document.getElementById('categoriaOpciones') as HTMLSelectElement;

  while (selectCategorias.firstChild) {
    selectCategorias.removeChild(selectCategorias.firstChild);
  }

  const optionTodas = document.createElement('option');
  optionTodas.value = '';
  optionTodas.textContent = 'Todas las categorías';
  selectCategorias.appendChild(optionTodas);

  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria.slug;
    option.textContent = categoria.name;
    selectCategorias.appendChild(option);
  });
}

// Escuchar el cambio de categoría en el select
document.getElementById('categoriaOpciones')?.addEventListener('change', (event) => {
  const categoriaSeleccionada = (event.target as HTMLSelectElement).value;
  cargarProductos(categoriaSeleccionada);
});

// Escuchar la búsqueda
const buscadorInput = document.getElementById('buscador') as HTMLInputElement;
buscadorInput.addEventListener('input', () => {
  const terminoBusqueda = buscadorInput.value.toLowerCase();
  cargarProductos('', terminoBusqueda);
});

// Inicializar la carga de productos y categorías
cargarProductos();
obtenerCategorias().then(categorias => llenarSelectCategorias(categorias));
