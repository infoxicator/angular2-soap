import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SoapService } from './soap.service'

@Component({
  selector: 'page-home',
  providers: [SoapService],
  templateUrl: 'home.html'  
})

export class HomePage {
    
  constructor(public navCtrl: NavController, public soapService: SoapService) {
    soapService.post('http://mydomain.com/webservices/sync.asmx', 'GetUser', {id: '1'})
    .then(result => {
      console.log(result);
    }).catch(error => {
        console.log(error);
    });
  }

}
