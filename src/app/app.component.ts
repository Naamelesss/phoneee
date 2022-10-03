import { Component, OnInit } from '@angular/core';
import { AppsArray } from './models/apps.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nls_phone';

  time!: Date;

  appsArray!: AppsArray[];

  ngOnInit() {
    this.time = new Date();

    this.appsArray = [
      {
        icon: "../assets/img/icon/facetime.png",
        name: "FaceTime",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/calendar.png",
        name: "Calendrier",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/photos.png",
        name: "Photos",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/camera.png",
        name: "Caméra",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/mail.png",
        name: "Mail",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/clock.png",
        name: "Horloge",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/maps.png",
        name: "Plans",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/weather.png",
        name: "Météo",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/reminders.png",
        name: "Rappels",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/notes.png",
        name: "Notes",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/stocks.png",
        name: "Bourse",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/books.png",
        name: "Livres",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/app-store.png",
        name: "App Store",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/safari.png",
        name: "Podcasts",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/tv.png",
        name: "TV",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/health.png",
        name: "Santé",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/settings.png",
        name: "Réglages",
        nameShowed: true
      },
      {
        icon: "../assets/img/icon/wallet.png",
        name: "Cartes",
        nameShowed: true
      }
    ]
  }
}
