Angular2-Soap

Angular2+ Service of the <a href="http://javascriptsoapclient.codeplex.com/">Javascript SOAP Client </a>

Upgrade to version 2+ from the original angular-soap for Angular v1 created by <a href="https://github.com/andrewmcgivery/angular-soap">Andrew Mcgivery</a>

This example is based on the sidemenu template of Ionic

Usage: Inject the SoapService to the component:

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
