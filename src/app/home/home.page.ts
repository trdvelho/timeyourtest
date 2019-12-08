import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  percent:number = 0;
  radius:number = 100;
  timer: any = false;
  progress: number = 0;

  fulltime: any = '00:01:30';
  minutes: number = 1;
  seconds: any = 30;

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00'
  };

  overAllTimer: any = false;

  constructor(private toast: ToastController, private ringtones: NativeRingtones, private route: Router) {
    this.ringtones.getRingtone().then((ringtones) => { console.log(ringtones); });
  }

  private pushPage() {
    this.route.navigate(['/intervals']);
  }

  startProgress() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    if (!this.overAllTimer) {
      this.progressTimer();
    }


    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timesplit = this.fulltime.split(':');
    this.minutes = timesplit[1];
    this.seconds = timesplit[2];

    const totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
    this.timer = setInterval(() => {

      if (this.percent == this.radius) {
        clearInterval(this.timer);
      }
      console.log('here ', totalSeconds);
      this.percent = Math.floor( (this.progress / totalSeconds) * 100);
      this.progress++;
    }, 1000);
  }

  progressTimer() {
    const countDownDate = new Date();

    this.overAllTimer = setInterval(() => {
      let now = new Date().getTime();

      let distance = now - countDownDate.getTime();
      this.elapsed.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((distance % (1000 * 60) / 1000 ));

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);

      this.checkTime(this.elapsed.h, this.elapsed.m, this.elapsed.s);
    }, 1000);
  }

  checkTime(h, m, s){
    if (m === '00' && s === '02'){
      this.presentToast();
    }
  }

  pad(num, size) {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  stopProgress(){
    clearInterval(this.timer);
    clearInterval(this.overAllTimer);
    this.overAllTimer = false;
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
    this.elapsed = {
      h: '00',
      m: '00',
      s: '00'
    };
  }

  async presentToast() {
    const message = await this.toast.create({
      message: 'Remember',
      duration: 3000,
      position: 'top'
    });
    message.present();
  }

}
