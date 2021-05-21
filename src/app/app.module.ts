import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

// const appRoutes: Routes = [
//   {path: '', component: MainComponent},
//   {path: 'about', component: AboutComponent},
//   {path: 'services', component: ServiceComponent},
//   {path: 'product', component: ProductComponent},
//   {path: 'contact', component: ContactComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ServiceComponent,
    ProductComponent,
    AboutComponent,
    PaymentComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
