import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './ung dung blog/blog/blog.component';
import {BlogDetailComponent} from './ung dung blog/blog-detail/blog-detail.component';
import {BlogEditComponent} from './ung dung blog/blog-edit/blog-edit.component';
import {TodoComponent} from './ung dung todo/todo/todo.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'blog/:id',
    component: BlogDetailComponent
  }, {
    path: 'blog/:id/edit',
    component: BlogEditComponent
  },
  {path: 'todo',
  component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
