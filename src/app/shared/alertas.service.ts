import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class AlertasService {

    constructor() {}

    erro(mensagem: string){
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: mensagem
        });
    }

}