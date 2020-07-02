import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  url: string;
  type: string = 'audioonly';
  quality: string = 'highest';

  constructor(
    private toastr: ToastrService,
    private api: ApiService,
  ) { }

  ngOnInit() {
  }

  download() {
    if (!this.url) {
      this.toastr.error("Provide an url");
    } else {
      this.api.download(this.url, this.type, this.quality);
    }
  }

  returnBlob(res): Blob {
    return new Blob([res], { type: 'video/mp4' });
  }

}
