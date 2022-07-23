import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainModuleComponent } from './main-module.component';
import { SideBarUiComponent } from '../../ui-elements/side-bar-ui/side-bar-ui.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from '../../ui-elements/footer/footer.component';
import { EncoderComponent } from '../../views/tools/encoder/encoder.component';
import { DecoderComponent } from '../../views/tools/decoder/decoder.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { DxHtmlEditorModule } from 'devextreme-angular';
import { MarkdownGeneratorComponent } from '../../views/tools/markdown-generator/markdown-generator.component';



@NgModule({
  declarations: [
    MainModuleComponent,
    SideBarUiComponent,
    FooterComponent,
    EncoderComponent,
    DecoderComponent,
    MarkdownGeneratorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // NG SELECT
    NgSelectModule,
    // Toastr
    ToastrModule.forRoot(),
    // DevExtreme-Ui-Components
    DxHtmlEditorModule,
  ]
})
export class MainModuleModule { }
