import {Injectable} from '@angular/core';
// declare var knetikcloud-sdk: any;

import * as KnetikCloudSDK from '@knetik/knetikcloud-sdk/src';


@Injectable({
  providedIn: 'root'
})
export class KnetikcloudService {

  constructor(private KnetikCloud: any,
              private oauth2_client_credentials_grant: any) {
    this.KnetikCloud = KnetikCloudSDK;
    this.oauth2_client_credentials_grant = null;
  }

  public initSDK(app: string, env: string, token: string): Promise<any> {
    if (app.length === 0 ||
      env.length === 0) {
      console.log('ERROR knetikcloud.js init: app or env is empty.');
      return Promise.reject('ERROR knetikcloud.js init: app or env is empty.');
    }
    // let jsapiUrl = `https://${app}.${env}.knetikcloud.com`;
    let jsapiUrl = `https://shawntest278-shawntest278.admin.sandbox.knetikcloud.com`;
    if (env === 'prod') {
      jsapiUrl = `https://${app}.knetikcloud.com`;
    }
    const defaultClient = this.KnetikCloud.ApiClient.instance;
    defaultClient.basePath = jsapiUrl;
    if (token && token.length !== 0) {
      console.log(`User token supplied: ${token}`);
      this.oauth2_client_credentials_grant = defaultClient.authentications['oauth2_client_credentials_grant'];
      this.oauth2_client_credentials_grant.accessToken = token;
      return Promise.resolve(this.KnetikCloud);
    }
  }

}
