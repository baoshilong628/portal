import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BlogInfo, BlogListService} from "../blog-list.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private blogListService: BlogListService,
    public router: Router
  ) {}
  // UI Modal
  public blogInfoList: BlogInfo[] = []
  ngOnInit() {
    this.blogInfoList = this.blogListService.getBlogInfoList()
  }

}
