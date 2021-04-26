import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isVisible: boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.isHeaderVisible.subscribe(e => this.isVisible = e);
  }

}
