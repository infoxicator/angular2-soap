
import { Injectable } from '@angular/core';
import SOAPClient from '../../soapclient.js';

@Injectable()
export class SoapService {
    
public soapParams:any;
public soapClient:any;

  constructor() {}

   post(url, action, params){
    this.soapParams = new SOAPClient.SOAPClientParameters;
    this.soapClient = SOAPClient.SOAPClient; 
     return new Promise((resolve, reject) => {			
			//Create SOAPClientParameters
			for(var param in params){
				this.soapParams.add(param, params[param]);
			}
			//Create Callback
            var soapCallback = function (e, status) {
                if (e == null || e.constructor.toString().indexOf("function Error()") != -1) {
                    reject("Unable to contat the server: " + status);
                } else {
                    resolve(e);
                }
            }			
			this.soapClient.invoke(url, action, this.soapParams, true, soapCallback);
        });
        }
    setCredentials(username, password){
        this.soapClient.username = username;
		this.soapClient.password = password;
    }
}
