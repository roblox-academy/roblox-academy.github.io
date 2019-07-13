import { MatButtonModule, MatCheckboxModule, MatNavList, MatToolbarModule, MatToolbar, MatSlider } from '@angular/material';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatNavList, MatToolbarModule, MatToolbar, MatToolbarModule, MatSlider],
  exports: [MatButtonModule, MatCheckboxModule, MatNavList, MatToolbarModule, MatToolbar, MatToolbarModule, MatSlider],
})
export class MyOwnCustomMaterialModule {}
