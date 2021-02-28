import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from '../components/rating/rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [RatingComponent],
    imports: [IonicModule, CommonModule],
    exports: [RatingComponent]
})

export class ComponentsModule{}