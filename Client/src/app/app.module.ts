import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { FinddeptComponent } from './finddept/finddept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { FormsModule } from '@angular/forms';
import { ShowdeptComponent } from './showdept/showdept.component';

@NgModule({
  declarations: [
    AppComponent,
    ListdeptComponent,
    FinddeptComponent,
    AdddeptComponent,
    EditdeptComponent,
    ShowdeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
