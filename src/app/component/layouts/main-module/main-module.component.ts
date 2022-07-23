import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/config/app.config';
import { UtilsHelper } from 'src/app/helpers/utils/utils.helper';

@Component({
  selector: 'app-main-module',
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})
export class MainModuleComponent implements OnInit {

  // =============================
  public myProjects: any[] = [
    {name: 'PIFS', link: 'https://github.com/orbitturner/IMPLICIT-SFTP-FILE-SENDER', image:'https://github.com/orbitturner/IMPLICIT-SFTP-FILE-SENDER/raw/main/.repo-assets/images/GITHUB%20REPOS%20COVER.gif'},
    {name: 'ORBIT-JWT', link: 'https://github.com/orbitturner/orbit-jwt', image:'https://raw.githubusercontent.com/orbitturner/ORBIT_SUGAR_CODES/master/assets/ORBIT-JWT-ANNOUNCEMENT-1024.png'},
    {name: 'THE ORBIT CHAIN', link: 'https://github.com/orbitturner/ORBITCHAIN', image:'https://github.com/orbitturner/ORBITCHAIN/raw/main/.repo-assets/images/GITHUB-REPOS-COVER.gif'},
    {name: 'CLEAN-CODE', link: 'https://github.com/orbitturner/CLEAN-CODE', image:'https://github.com/orbitturner/CLEAN-CODE/raw/master/assets/Clean-Code-Slide-Cover.png'},
    {name: 'ARRAY-QUERIER', link: 'https://github.com/orbitturner/array-querier', image:'https://raw.githubusercontent.com/orbitturner/ORBIT_SUGAR_CODES/master/assets/arrayQuerier.png'},
    {name: 'FUTURIZE-WORLD', link: 'https://futurize.world/', image:'https://futurize.world/wp-content/uploads/2020/03/NEXTADS-PRESENTATION-780-x-1000-px.gif'},

  ];
  // =============================
  public isFullScreen: boolean = false;
  public elem: any; 
  // =============================
  public currentThemeMode = localStorage.getItem(AppConfig.THEME_LS_Key);
  public oppositeThemeName = this.currentThemeMode === 'dark' ? 'light' : 'dark';
  // =============================

  constructor(@Inject(DOCUMENT) private document: any) { }

  // ----------------------------
  ngOnInit(): void {
    this.chkScreenMode();
    this.elem = document.documentElement;
  }
  // ----------------------------
    // =================================================
    @HostListener('document:fullscreenchange', ['$event'])
    @HostListener('document:webkitfullscreenchange', ['$event'])
    @HostListener('document:mozfullscreenchange', ['$event'])
    @HostListener('document:MSFullscreenChange', ['$event'])
    public fullscreenmodes(event: any) {
      this.chkScreenMode();
    }
    // =================================================
  // ----------------------------
  public switchUIThemeMode() {
    const theme = localStorage.getItem(AppConfig.THEME_LS_Key) === 'dark' ? 'light' : 'dark';
    localStorage.setItem(AppConfig.THEME_LS_Key, theme);
    return UtilsHelper.reloadPage();
  }
  // ----------------------------
  public toggleFullScreen() {
    if (this.isFullScreen) {
      return this.closeFullscreen();;
    }
    return this.openFullscreen();
  }
  // ----------------------------
  public chkScreenMode() {
    if (document.fullscreenElement) {
      //fullscreen
      this.isFullScreen = true;
    } else {
      //not in full screen
      this.isFullScreen = false;
    }
  }
  // ----------------------------
  // =================================================
  public openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  public closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
  // =================================================
  
  
}
