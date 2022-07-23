import { Component, OnInit } from '@angular/core';
import { OrbitEncoder } from 'orbit-encoder/lib/OrbitEncoder';
import { DecodeTypes } from 'src/app/entities/entities';
import { ToastHelper } from 'src/app/helpers/toastr/toastHelper';

@Component({
  selector: 'app-decoder',
  templateUrl: './decoder.component.html',
  styleUrls: ['./decoder.component.css']
})
export class DecoderComponent implements OnInit {
  // =============================
  constructor(private notify: ToastHelper) { }
  // =============================
  public typeDecoder = Object.values(DecodeTypes);
  // =============================
  public selectedType: string = `Choose a type of Decoder...`;
  // =============================
  public imageUploadConfig = ['file', 'url'];
  // =============================
  public valueContent: string = '';
  public isMultiline = true;
  // =============================
  public decodedString: string = `You will see the encoded string here...`;
  public objectType: string | null = ``;
  // =============================


  ngOnInit(): void {
    // console.log(OrbitEncoder['rawEncode']('hello world'))
  }

  // ==========================================================
  // ******************* ENCODE LOGIC *******************
  // ==========================================================
  public submit(): void {
    const type : DecodeTypes | string = this.selectedType;
    if (type === `Choose a type of Decoder...`) {
      return this.notify.toastError('Choose a valid Decoder Type/Format', 'Invalid Parameters');
    }
    
    const value = OrbitEncoder[type as DecodeTypes](this.valueContent);
    this.decodedString = JSON.stringify(value);
    this.objectType = typeof value;
  }

  
  public reset() {
    this.valueContent = '';
    this.objectType = null;
    this.decodedString = `You will see the Decoded Object here...`;
  }
}
