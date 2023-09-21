export class WeddingResponseDto {
  _id?:string
  tituloPagina?:string
  invitacion?:string
  createdAt?:string
  __v?:number
  abouts?:About[]
  banners?:Banner[]
  blogs?:Blog[]
  countdowns?:Countdown[]
  galleries?:Gallery[]
  headers?:Header[]
  navcustoms?:Navcustom[]
  testimonials?:Testimonial[]
  whens?:When[]
}

export class About {
  _id?:string
  weddingId?:string
  foto?:string
  mensaje?:string
  createdAt?:string
  __v?:number
}

export class Banner {
  _id?:string
  weddingId?:string
  nombreNovia?:string
  nombreNovio?:string
  apellidoNovia?:string
  apellidoNovio?:string
  direccion1?:string
  direccion2?:string
  createdAt?:string
  __v?:number
}

export class Blog {
  _id?:string
  weddingId?:string
  titulo?:string
  fecha?:string
  lugar?:string
  descripcion?:string
  foto?:string
  createdAt?:string
  __v?:number
  uuid?: string;
}

export class Countdown {
  _id?:string
  weddingId?:string
  fecha?:string
  hora?:string
  direccion?:string
  url?:string
  createdAt?:string
  __v?:number
}

export class Gallery {
  _id?:string;
  weddingId?:string
  archivo?:string
  nombre?:string
  tipo?:string
  createdAt?:string
  __v?:number
  uuid?: string;
}

export class Header {
  _id?:string
  weddingId?:string
  foto?:string
  mensaje?:string
  createdAt?:string
  __v?:number
}

export class Navcustom {
  _id?:string
  weddingId?:string
  foto?:any
  mensaje?:any
  createdAt?:string
  __v?:number
}

export class Testimonial {
  _id?:string
  weddingId?:string
  descripcion?:string
  autor?:string
  parentezco?:string
  createdAt?:string
  __v?:number
  uuid?: string;
}

export class When {
  _id?:string
  weddingId?:string
  titulo?:string
  hora?:string
  descripcion?:string
  ubicacion?:string
  createdAt?:string
  __v?:number
  uuid?: string;
}
