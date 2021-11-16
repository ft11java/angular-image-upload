import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../model/news';
import { UploadserviceService } from '../uploadservice.service';

@Component({
  selector: 'app-viewdatabase-file',
  templateUrl: './viewdatabase-file.component.html',
  styleUrls: ['./viewdatabase-file.component.css']
})
export class ViewdatabaseFileComponent implements OnInit {

 id:String|undefined;
 news!:News;
 imge:any;
 base64Data: any;
 retrieveResonse?: any;
  retrievedImage: string|undefined;

  constructor(private uploadService:UploadserviceService,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   
    this.news=new News();
    this.uploadService.getNewsById(this.id).subscribe(data=>{
      this.news.newsTitle=data.newsTitle;
      console.log(data.newsTitle);
      this.news.newsBody=data.newsBody;
      this.news.deploy=data.deploy;
      this.news.newsRegistrationDate=data.newsRegistrationDate;
      this.news.databaseFile=data.databaseFile;
      console.log(this.news.databaseFile?.fileName);
      this.base64Data=data.databaseFile?.data;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      },
    error=>{
      console.log(error);
      
    })

  }

}
