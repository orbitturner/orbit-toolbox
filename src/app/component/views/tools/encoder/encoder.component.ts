import { Component, OnInit } from '@angular/core';
import { OrbitEncoder } from 'orbit-encoder/lib/OrbitEncoder';
import { EncodeTypes } from 'src/app/entities/entities';
import { ToastHelper } from 'src/app/helpers/toastr/toastHelper';
import { UtilsHelper } from 'src/app/helpers/utils/utils.helper';


@Component({
  selector: 'app-encoder',
  templateUrl: './encoder.component.html',
  styleUrls: ['./encoder.component.css'],
  providers: []
})
export class EncoderComponent implements OnInit {
  // =============================
  constructor(private notify: ToastHelper,private utilsHelper: UtilsHelper) { }
  // =============================
  public typeEncoder = Object.values(EncodeTypes);
  public typeObject= ['String', 'Array', 'Number', 'JSON', 'Any'];
  // =============================
  private typeSelectPlaceholder = `Choisissez un Type d'Encodage...`;
  public selectedType: string = `Choisissez un Type d'Encodage...`;
  public selectedObject: string = `Choose the Object Type...`;
  // =============================
  public imageUploadConfig = ['file', 'url'];
  // =============================
  public valueContent: string = '';
  public isMultiline = true;
  // =============================
  public encodedString: string = `You will see the encoded string here...`;
  // =============================
  // =============================


  ngOnInit(): void {
    // console.log(OrbitEncoder['rawEncode']('hello world'))
  }

  // ==========================================================
  // ******************* ENCODE LOGIC *******************
  // ==========================================================
  public submit(): void {
    const type : EncodeTypes | string = this.selectedType;
    if (type === this.typeSelectPlaceholder || type === '' || !type) {
      return this.notify.toastError('Choose a valid Encode Type/Format', 'Invalid Parameters');
    }
    let tobeEncoded: any;

    switch (this.selectedObject) {
      case this.typeObject[3]:
        try {
          tobeEncoded = JSON.parse(this.valueContent.replace(/\xA0/g, " "));
        } catch (ex) {
          this.notify.toastError('Invalid JSON Format', 'Invalid Parameters');
        }
        break;
      case this.typeObject[2]:
        tobeEncoded = Number(this.valueContent);
        break;
    
      default:
        tobeEncoded = this.valueContent;
        break;
    }
    this.encodedString = OrbitEncoder[type as EncodeTypes](tobeEncoded);
  }

  
  public reset() {
    this.valueContent = '';
    this. selectedType = this.typeSelectPlaceholder;
    this.encodedString = `You will see the encoded string here...`;
  }
  // ==========================================================
  // ******************* TRIGGERS *******************
  // ==========================================================
  public doCopy() {
    this.utilsHelper.copyToClipboard(this.encodedString);
  }
}
