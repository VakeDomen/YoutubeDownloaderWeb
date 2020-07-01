import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

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
      this.api.download(this.url, this.type, this.quality).subscribe(res => {
        console.log("resp")
        const url = window.URL.createObjectURL(this.returnBlob(res));
        window.open(url);
      });
    }
  }

  returnBlob(res): Blob {
    return new Blob([res], {type: 'video/mp4'});
  }

}
