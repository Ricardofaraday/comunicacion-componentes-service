import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  mensaje: string;
  enviarMensajeSubject = new Subject<string>();  // Permite enviar mensajes a multiples observadores
                                                  // <> El tipo de dato que queremos enviar es String
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor() { }

  enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }

}
