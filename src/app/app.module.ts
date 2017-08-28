import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormConfigComponent } from './components/form-config/form-config.component';
import { FormModelComponent } from './components/form-model/form-model.component';
import { FormFieldGroupComponent } from './components/form-field-group/form-field-group.component';

import { OrderByPipe } from './pipes/order-by.pipe';
import { TextInputComponent } from './components/field-editor-types/text-input/text-input.component';
import { DropdownComponent } from './components/field-editor-types/dropdown/dropdown.component';
import { MemoComponent } from './components/field-editor-types/memo/memo.component';
import { HiddenComponent } from './components/field-editor-types/hidden/hidden.component';

@NgModule({
  declarations: [
    AppComponent,
    FormConfigComponent,
    FormModelComponent,
    FormFieldGroupComponent,
    OrderByPipe,
    TextInputComponent,
    DropdownComponent,
    MemoComponent,
    HiddenComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
