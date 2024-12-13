import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Propiedad de productos
  products = [
    { 
      name: 'Psalmos', 
      price: 50, 
      inventoryStatus: 'In Stock', 
      image: 'https://i0.wp.com/irreverentemusic.com/wp-content/uploads/2020/09/folder.jpg?fit=1000%2C1000&ssl=1'
    },
    { 
      name: 'Carmesi', 
      price: 60, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://akamai.sscdn.co/uploadfile/letras/albuns/a/8/9/d/1104441625149303.jpg'
    },
    { 
      name: 'Noche', 
      price: 70, 
      inventoryStatus: 'In Stock', 
      image: 'https://i.scdn.co/image/ab67616d0000b273418b13d6e2851c6a307831b4'
    },
    { 
      name: 'Alba', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://akamai.sscdn.co/uploadfile/letras/albuns/b/6/6/c/1104421625149213.jpg'
    },
    { 
      name: 'Giallo', 
      price: 80, 
      inventoryStatus: 'In Stock', 
      image: 'https://http2.mlstatic.com/D_NQ_NP_701905-MLU71615899713_092023-O.webp'
    },
    { 
      name: 'Sarajevo', 
      price: 100, 
      inventoryStatus: 'In Stock', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiURHbfwo4JohgZ3jxJx4_VbvUixY1tgAgyg&s'
    },


    // Agrega más productos si es necesario
  ];

  // Opciones de visibilidad y desplazamiento para el carrusel
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 5,
      numScroll: 1
    }
  ];

  // Método para determinar la severidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';  // Severidad para "En Stock"
      case 'Out of Stock':
        return 'danger';   // Severidad para "Agotado"
      case 'Low Stock':
        return 'warning';  // Severidad para "Bajo stock"
      default:
        return 'info';     // Severidad por defecto
    }
  }
}
