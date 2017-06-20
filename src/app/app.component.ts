import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheThinkinGeek';
  public introTextOpacity: Number;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
        window.addEventListener('scroll', this.scroll, true); //third parameter
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (): void => {
      let app = this.document.getElementById('app');
      let introText = this.document.getElementById('introText');
      let designerTitle = this.document.getElementById('designerTitle');
      let number = app.scrollTop;
      let total = app.clientHeight;
      let translate = (115*number/total);
      let backTranslate =  -115*(1 - number/total);
      let opacity = 1.1 - (number/total);
      if(opacity <= total){
        introText.style.opacity = opacity.toString();
        introText.style.transform = 'translateY(' + translate + '%)';
      }
    };
}
