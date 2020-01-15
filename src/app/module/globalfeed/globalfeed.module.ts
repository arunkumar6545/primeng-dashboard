import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasforumComponent } from './ideasforum/ideasforum.component';
import { RouterModule } from '@angular/router';
import { routes } from './globalfeed.route';
import { FeedcardComponent } from './feedcard/feedcard.component';
import { IdeadiscussionComponent } from './ideadiscussion/ideadiscussion.component';

@NgModule({
  declarations: [IdeasforumComponent, FeedcardComponent, IdeadiscussionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [IdeadiscussionComponent]
})
export class GlobalfeedModule { }
