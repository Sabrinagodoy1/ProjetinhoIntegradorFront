import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(environment.token==''){
      //alert('Seção expirada, faça login novamente')
      this.router.navigate(['/entrar'])
    }
  }

}
