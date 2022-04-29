import { EdtechplayerComponent } from './edtechplayer/edtechplayer.component';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

const routes: Routes = [
  {path:'',redirectTo:'toolbar',pathMatch:'full'},
  {path:'toolbar',component:ToolbarComponent,children:[
    {path:'',component:VideoplayerComponent},
    {path:'edtechplayer',component:EdtechplayerComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

  

 }
