import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image:any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.dataService.getImage(
      this.route.snapshot.params['id']
    )
    console.log(this.image);
  }
}
