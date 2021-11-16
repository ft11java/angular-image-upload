import { HttpClient,HttpEventType} from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsCreateDTO } from '../model/newsCerateDTO';
import { NewsCreateDTOo } from '../model/newsCreateDTOo';
import { UploadserviceService } from '../uploadservice.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.css']
})
export class NewsCreateComponent implements OnInit {

  newsCreateForm=new FormGroup({
    newsTitle:new FormControl(''),
    newsBody:new FormControl(''),
    deploy:new FormControl(''),
    data:new FormControl('')
    
  })

newsCreateDTO:NewsCreateDTO=new NewsCreateDTO();
 
  constructor(private uploadservice:UploadserviceService,
    private router:Router,
    private httpClient: HttpClient,
    private cd: ChangeDetectorRef  ) { }

  selectedFile!: File;
  base64Data: any;
  retrieveResonse: any;
  message: string | undefined;
  imageName: any;
  imageURL!: string;
 
  newsCreateDTOo:NewsCreateDTOo=new NewsCreateDTOo;

  ngOnInit(): void {
  }

  onFileChange(event:any) {
    const file:File = event.target.files[0];
    console.log(file);
    this.newsCreateForm.patchValue({
      data: file           
    });
    
console.log(this.newsCreateForm.value);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    console.log("onsubmit run");
    this.newsCreateDTO=this.newsCreateForm.value;
    console.log(this.newsCreateDTO);
    this.uploadservice.createNews(this.newsCreateDTO).subscribe(data=>{
      console.log("resim eklendi");
    },
    error=>{
      console.log(error);
     
    })
  }

  get f() {
    return this.newsCreateForm.get('databaseFileCreateDTO') as FormGroup;
}
}
