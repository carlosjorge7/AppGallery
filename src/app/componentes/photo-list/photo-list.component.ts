import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];

  constructor(private photoService: PhotoService,
              private router: Router) { }

  ngOnInit() {
    this.photoService.getPhotos()
      .subscribe(res => {
        this.photos = res;
    });
  }

  selectedCard(id: string){
    // aqui conviene mas pasarle el id a photo-preview con el elrutador y que eshaga la peticion http
    /*this.photoService.getPhoto(id)
      .subscribe(res => {
        console.log(res);
    })*/
    this.router.navigate(['/photos', id]);
  }

}
