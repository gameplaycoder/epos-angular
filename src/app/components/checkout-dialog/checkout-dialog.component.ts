import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-dialog',
  templateUrl: './checkout-dialog.component.html',
  styleUrls: ['./checkout-dialog.component.css']
})
export class CheckoutDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { total: number, itemCount: number },
    private dialogRef: MatDialogRef<CheckoutDialogComponent>
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 5000); // Auto close after 3s
  }
}
