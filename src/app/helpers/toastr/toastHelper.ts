import { ToastrService } from 'ngx-toastr';
import {Injectable} from '@angular/core';

// ---------------------------------------

// ---------------------------------------

@Injectable({
  providedIn: 'root'
})
export class ToastHelper {
  public Title !: string;
  public Msg   !: string;
  public Info  ?: string;
  public Type  ?: string;
  public Icon  ?: string;

  constructor(private toastr: ToastrService){}

  public toastSuccess(title: string, msg?: string): void{
    // --- Informing User On loaded Data ---
    this.toastr.success(title,msg, {
      closeButton: true,
      newestOnTop: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 5000,
      extendedTimeOut: 2000,
      enableHtml: true
    });
  }

  public toastError(title: string, msg?: string): void{
    // --- Informing User On loaded Data ---
    this.toastr.error(title,msg, {
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      newestOnTop: true,
      extendedTimeOut: 2000,
      positionClass: 'toast-top-right',
      enableHtml: true
    });
  }

  public toastInfo(title: string, msg?: string): void{
    // --- Informing User On loaded Data ---
    this.toastr.info(title,msg, {
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      newestOnTop: true,
      extendedTimeOut: 2000,
      positionClass: 'toast-top-right',
      enableHtml: true
    });
  }

  public toastWarn(title: string, msg?: string): void{
    // --- Informing User On loaded Data ---
    this.toastr.warning(title,msg, {
      timeOut: 5000,
      progressBar: true,
      closeButton: true,
      newestOnTop: true,
      extendedTimeOut: 2000,
      positionClass: 'toast-top-right',
      // positionClass: 'toast-bottom-full-width',
      enableHtml: true
    });
  }

  

}
