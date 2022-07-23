import { Component, OnInit } from '@angular/core';
import { OrbitEncoder } from 'orbit-encoder/lib/OrbitEncoder';
import { defaultMarkup, EncodeTypes } from 'src/app/entities/entities';
import { ToastHelper } from 'src/app/helpers/toastr/toastHelper';
import 'devextreme/ui/html_editor/converters/markdown';

@Component({
  selector: 'app-markdown-generator',
  templateUrl: './markdown-generator.component.html',
  styleUrls: ['./markdown-generator.component.css']
})
export class MarkdownGeneratorComponent implements OnInit {
  // =============================
  constructor(private notify: ToastHelper) { }
  // =============================
  public selectedType: string = `Choisissez un Type d'Encodage...`;
  // =============================
  public imageUploadConfig = ['file', 'url'];
  // =============================
  public valueContent: string = '';
  public isMultiline = true;
  // =============================
  public encodedString: string = `You will see the encoded string here...`;
  // =============================


  ngOnInit(): void {
    this.valueContent = defaultMarkup;
  }

  // ==========================================================
  // ******************* ENCODE LOGIC *******************
  // ==========================================================
  
  public reset() {
    this.valueContent = '';
    this.encodedString = `You will see the encoded string here...`;
  }
}

