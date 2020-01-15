import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasforumComponent } from './ideasforum/ideasforum.component';
import { RouterModule } from '@angular/router';
import { routes } from './globalfeed.route';

@NgModule({
  declarations: [IdeasforumComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class GlobalfeedModule { }
