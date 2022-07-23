import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
