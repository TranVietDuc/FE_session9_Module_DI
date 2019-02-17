import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectComponent } from './content-project.component';
import { CdCardComponent } from './cd-card/cd-card.component';

@NgModule({
  declarations: [ContentProjectComponent, CdCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentProjectComponent]
})
export class ContentProjectModule { }
