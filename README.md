# Angular2-soap

Angular2+ Service of the <a href ="http://javascriptsoapclient.codeplex.com/">Javascript SOAP Client</a>

Upgrade to version 2+ from the original angular-soap for Angular v1 created by <a href="https://github.com/andrewmcgivery/angular-soap">Andrew Mcgivery</a>

# Usage

### Installation

This example is based on the sidemenu template of Ionic:

there are two files:

```soap.service.ts```
```soapclient.js```

On this example, the soapclient.js file is located on src. You can place it anywhere provided you reference it correctly at the top of  soap.service.ts:

```ts
import SOAPClient from '../../soapclient.js';
```

Declarations:

Add the following lines to the ```declarations.d.ts``` file to avoid compilation errors

```ts
declare module '*';
declare var  SOAPClient: any;
```


Import the service and inject it as a provider for the component

```ts
import { SoapService } from './soap.service'
@Component({ 
selector: 'page-home', 
providers: [SoapService], 
templateUrl: 'home.html'
})
```
The post method accepts the following paramaters:

| Parameter | Description | Example |
| ------ | ------ | ------ |
| url |	The base URL of the service |	"http://www.mydomain.com/webservices/demo.asmx" |
| action | The Webservice Operation |	"GetUser"
| params | Parameters passed as an Object |	{ id: "123" } |


### Example
```ts
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

```
License
----

MIT
