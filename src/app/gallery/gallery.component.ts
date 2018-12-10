import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges{
  visibleImages: any[] = [];
  @Input() filterBy?: string = 'all';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.visibleImages = this.dataService.getImages();

  }

  ngOnChanges() {


  }

}
