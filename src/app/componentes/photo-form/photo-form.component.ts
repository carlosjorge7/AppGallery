import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private photoService: PhotoService,
              private router: Router) { }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];

      // leemos el archivo
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  createPhoto(title: HTMLInputElement, description: HTMLTextAreaElement){
    this.photoService.createPhoto(title.value, description.value, this.file)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photos']);
    });
    return false;
  }

}
