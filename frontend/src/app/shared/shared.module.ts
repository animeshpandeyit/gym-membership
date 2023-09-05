import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [HeaderComponent, FooterComponent, AngularMaterialModule],
})
export class SharedModule {}
