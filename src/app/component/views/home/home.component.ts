import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // --------------------------
  constructor() { }
  // --------------------------
  private deferredPrompt : any;
  // --------------------------


  // ******************************
  ngOnInit(): void {
    // This variable will save the event for later use.
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();
      // Save the event because you'll need to trigger it later.
      this.deferredPrompt = event;
      this.promptUserInstall();
    });
  }
  // ******************************
  private promptUserInstall() {
    Notiflix.Confirm.show(
      '💖 Good News Buddy 🤗',
      'Do you want to install this app ? (🥺 Say YES Please 😢)',
      'YES', 'No',
      () => {
        // User clicked YES.
        Notiflix.Notify.success('🚀 YESYESYES ! Follow the instructions now to install this app !');
        return this.deferredPrompt.prompt();
      },
      () => {
        return Notiflix.Notify.warning('😭 You\'ve Decided, To not install this app 🤧');
      }
    );
  }
}
