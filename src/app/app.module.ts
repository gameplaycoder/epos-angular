import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutDialogComponent } from './components/checkout-dialog/checkout-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    CheckoutDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
