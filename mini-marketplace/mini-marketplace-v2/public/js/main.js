// importacion de apis
import { urlProductos,urlCategoria } from "../Api/servicios";

// Inicialización del carrito
let carrito = [];

// Función para incrementar el carrito
function incrementarCarrito() {
  // Agregar un producto al carrito
  carrito.push(1); 
  actualizarContadorCarrito();
}

// Función para actualizar el contador del carrito
function actualizarContadorCarrito() {
  const notificacion = document.querySelector('.notificacion');
  notificacion.textContent = carrito.length; 
}

// Obtener productos desde la API (filtrados por categoría si es necesario)
async function obtenerProductos(categoria = '') {
  try {
    let url = urlProductos;  // URL base para productos
    
 
    if (categoria) {
      url = `https://dummyjson.com/products/category/${categoria}`; 
    }
    
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error('Error al obtener los productos');
    }
    const datos = await respuesta.json();
    console.log('Productos obtenidos:', datos.products); 
    return datos.products || []; 
  } catch (error) {
    console.error('Error al cargar los productos:', error);
    alert('Hubo un problema al cargar los productos. Intenta nuevamente más tarde.');
    return []; 
  }
}

// Cargar productos en el contenedor con filtrado por búsqueda
async function cargarProductos(categoriaSeleccionada = '', terminoBusqueda = '') {
  try {
    const productos = await obtenerProductos(categoriaSeleccionada);
    const contenedorProductos = document.querySelector('.productos'); 
    
    // Limpiar el contenedor antes de agregar nuevos productos
    while (contenedorProductos.firstChild) {
      contenedorProductos.removeChild(contenedorProductos.firstChild); 
    }

    // Filtrar los productos según el término de búsqueda
    const productosFiltrados = productos.filter(producto => 
      producto.title.toLowerCase().includes(terminoBusqueda) || 
      producto.description.toLowerCase().includes(terminoBusqueda)
    );

    // Verifica si no hay productos y muestra un mensaje
    if (productosFiltrados.length === 0) {
      const mensajeNoProductos = document.createElement('p');
      mensajeNoProductos.textContent = 'No se encontraron productos.';
      contenedorProductos.appendChild(mensajeNoProductos);
      return;
    }

    // Crear y agregar productos al contenedor
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
      categoria.textContent = `Categoría`;

      const categoriaDetalle= document.createElement('p');
      categoriaDetalle.classList.add('categoria-detalle');
      categoriaDetalle.textContent = ` ${producto.category || 'Sin categoría'}`;
      
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
      divProducto.appendChild(categoriaDetalle);

      divProducto.appendChild(precio);
      divProducto.appendChild(botonAgregar);
      
      contenedorProductos.appendChild(divProducto);
    });
  } catch (error) {
    console.error('Error al cargar los productos en el contenedor:', error);
    alert('Hubo un problema al mostrar los productos. Intenta nuevamente más tarde.');
  }
}

// Obtener categorías desde la API y llenar el select
async function obtenerCategorias() {
  try {
    const respuesta = await fetch(urlCategoria );
    if (!respuesta.ok) {
      throw new Error('Error al obtener las categorías');
    }
    const categorias = await respuesta.json();
    llenarSelectCategorias(categorias); 
  } catch (error) {
    console.error('Error al cargar las categorías:', error);
    alert('Hubo un problema al cargar las categorías. Intenta nuevamente más tarde.');
  }
}

// Llenar el select con las categorías
function llenarSelectCategorias(categorias) {
  const selectCategorias = document.getElementById('categoriaOpciones');
  
  // Limpiar las opciones anteriores del select
  while (selectCategorias.firstChild) {
    selectCategorias.removeChild(selectCategorias.firstChild);
  }

  // Agregar la opción "Todas las categorías"
  const optionTodas = document.createElement('option');
  optionTodas.value = ''; // El valor vacío para "Todas las categorías"
  optionTodas.textContent = 'Todas las categorías';
  selectCategorias.appendChild(optionTodas);

  // Crear una opción por cada categoría
  categorias.forEach(categoria => {
    const option = document.createElement('option');
    option.value = categoria.slug;  
    option.textContent = categoria.name; 
    selectCategorias.appendChild(option); 
  });
}

// Escuchar el cambio de categoría en el select y cargar productos filtrados
document.getElementById('categoriaOpciones').addEventListener('change', (event) => {
  const categoriaSeleccionada = event.target.value; 
  console.log('Categoría seleccionada:', categoriaSeleccionada); 
  cargarProductos(categoriaSeleccionada); 
});

// Obtener el campo de búsqueda y agregar el evento
const buscadorInput = document.getElementById('buscador');

buscadorInput.addEventListener('input', () => {
  const terminoBusqueda = buscadorInput.value.toLowerCase(); 
  cargarProductos('', terminoBusqueda);  
});

// Llamar a la función para cargar productos inicialmente
cargarProductos();

// Llamar a la función para obtener las categorías y llenar el select
obtenerCategorias();


