import { Component } from '@angular/core';

import { ceps } from '../ceps';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css'],
})
export class CepListComponent {
  ceps = ceps;

  share() {
    window.alert('Cep Cadastrado!');
  }
}