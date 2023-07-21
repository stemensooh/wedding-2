import { BaseDto } from "./base.dto";

export class ParametroDto extends BaseDto {
  codigo!: string;
  descripcion!: string;
  valor!: string;
}
