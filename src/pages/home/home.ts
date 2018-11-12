import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
name: string;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage) {
    storage.get('name').then(res => this.name = res);
  }


  async setName() {
   await this.storage.set('name', 'PON')
      this.getName();


  }

  async getName() {
    this.name = await this.storage.get('name')
  }

  async removeName() {
    await this.storage.remove('name');
    this.getName();
  }
}
