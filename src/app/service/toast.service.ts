import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toast: ToastrService) {}

  successalert(message: string, title: string) {
    this.toast.success(message, title);
  }
}
