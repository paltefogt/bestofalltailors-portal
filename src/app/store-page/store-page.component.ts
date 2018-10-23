import { Component, OnInit } from '@angular/core';
import {KnetikcloudService} from '../shared/services/knetikcloud/knetikcloud.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  constructor(private knetikcloudService: KnetikcloudService) { }

  ngOnInit() {
    // 'f4360701-11d1-4379-abb3-6780fa19484b'
    const token = 'f4360701-11d1-4379-abb3-6780fa19484b';
    // this.knetikcloudService.initSDK('app', 'env', token)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log('Knetikcloud SDK init error');
    //     console.log(err);
    //   });
  }

}
