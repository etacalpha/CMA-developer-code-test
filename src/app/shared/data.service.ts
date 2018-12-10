import { Injectable } from '@angular/core';
import artworks from '../../assets/cma-artwork.json'


@Injectable({
  providedIn: 'root'
})
export class DataService {
 visibleImages = [];

  getImages(){
    return this.visibleImages = images.slice(0)
  }

  getImage(id: string){
    return images.slice(0).find(image => image.artworkID == id)
  }

}

const images = artworks.items;
