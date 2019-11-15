import { Component, OnInit } from '@angular/core';
import './icon_loader';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-nameofpage',
  templateUrl: './component.html',
  styleUrls: ['style.scss']
})

export class NameofpageComponent implements OnInit{
  public isCollapsed = false;
    constructor(config: NgbCarouselConfig) {

// customize default values of carousels used by this component tree
    config.interval = 8000;
//  config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }
  ngOnInit(){



  }

}

