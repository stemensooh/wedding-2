export class WeddingResponseDto {
    _id!: string
    fecha!: Date
    resumen!: string
    mensaje!: string
    createdAt!: string
    __v!: number
    cupler!: CuplerDto[]
    sliders!: SliderDto[]
    galleries!: GalleryDto[]
    events!: EventDto[]
    timelines!: TimelineDto[]
    maps!: MapDto[]
  }
  
  export class CuplerDto {
    _id!: string;
    weddingId!: string;
    novioNombre!: string;
    novioApellido!: string;
    novioFoto!: string;
    novioDescripcion!: string;
    noviaNombre!: string;
    noviaApellido!: string;
    noviaFoto!: string;
    noviaDescripcion!: string;
    createdAt!: string;
    __v!: number;
  }
  
  export class SliderDto {
    _id!: string
    weddingId!: string
    titulo!: string
    foto!: string
    createdAt!: string
    __v!: number
  }
  
  export class GalleryDto {
    _id!: string
    weddingId!: string
    titulo!: string
    foto!: string
    createdAt!: string
    __v!: number
  }
  
  export class EventDto {
    _id!: string
    weddingId!: string
    titulo!: string
    fecha!: string
    descripcion!: string
    createdAt!: string
    __v!: number
  }
  
  export class TimelineDto {
    _id!: string
    weddingId!: string
    fecha!: string
    titulo!: string
    descripcion!: string
    icono!: string
    createdAt!: string
    __v!: number
  }
  
  export class MapDto {
    _id!: string
    weddingId!: string
    descripcion!: string
    lat!: number
    lng!: number
    mensaje!: string
    createdAt!: string
    __v!: number
  }
  