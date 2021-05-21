import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(private photoService: PhotoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.id = res['id'];
      // Llamamos al servicio
      this.photoService.getPhoto(this.id)
        .subscribe(res => {
          this.photo = res;
      });
    });
  }

  deletePhoto(id: string){
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos']);
    });
    return false;
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.photoService.updatePhoto(this.id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos'])
    });
    return false; // Para que no recargue la pagin
  }

}
