import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './ung dung blog/blog/blog.component';
import { BlogEditComponent } from './ung dung blog/blog-edit/blog-edit.component';
import { BlogDetailComponent } from './ung dung blog/blog-detail/blog-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './ung dung todo/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogEditComponent,
    BlogDetailComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
