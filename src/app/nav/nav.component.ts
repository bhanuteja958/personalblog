import { Component, OnInit ,Inject, PLATFORM_ID, APP_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(){}

  ngOnInit() {
  }

}
