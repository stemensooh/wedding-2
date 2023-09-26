export interface ViewHistoryResponse {
  _id: string;
  weddingId: string;
  secChUa: string;
  secChUaMobile: string;
  secChUaPlatform: string;
  secFetchDest: string;
  secFetchMode: string;
  secFetchSite: string;
  userAgent: string;

  xEnvoyExternalAddress: string;
  xForwardedFor: string;
  usexForwardedProto: string;
  xRequestId: string;
  
  ip: string;
  titulo: string;
  createdAt: string;
  __v: number;
}