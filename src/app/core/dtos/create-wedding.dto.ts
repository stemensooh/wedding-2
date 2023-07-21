export interface CreateWeddingDto {
    fecha: string
    resumen: string
    mensaje: string
    mapas: Mapa[]
    timelines: Timeline[]
    novios: Novios
    sliders: Slider[]
    galeria: Galerum[]
    eventos: Evento[]
  }
  
  export interface Mapa {
    descripcion: string
    coordenadas: string
    mensaje: string
  }
  
  export interface Timeline {
    fecha: string
    titulo: string
    descripcion: string
    icono: string
  }
  
  export interface Novios {
    novioNombre: string
    novioApellido: string
    novioFoto: string
    novioDescripcion: string
    noviaNombre: string
    noviaApellido: string
    noviaFoto: string
    noviaDescripcion: string
  }
  
  export interface Slider {
    titulo: string
    foto: string
  }
  
  export interface Galerum {
    titulo: string
    foto: string
  }
  
  export interface Evento {
    titulo: string
    fecha: string
    descripcion: string
  }
  