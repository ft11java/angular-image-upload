import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NewsCreateComponent } from "./news-create/news-create.component";
import { UploadfileComponent } from "./uploadfile/uploadfile.component";
import { ViewdatabaseFileComponent } from "./viewdatabase-file/viewdatabase-file.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/:id', component: ViewdatabaseFileComponent },
  { path: 'upload', component: UploadfileComponent },
  { path: 'news-create', component: NewsCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
