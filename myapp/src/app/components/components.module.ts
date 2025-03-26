import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardFinalComponent } from './product-card-final/product-card-final.component';
import { ProductCardPipesComponent } from './product-card-pipes/product-card-pipes.component';
import { ProductCardV4Component } from './product-card-v4/product-card-v4.component';
import { ProductCardV3Component } from './product-card-v3/product-card-v3.component';
import { ProductCardV2Component } from './product-card-v2/product-card-v2.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LinkComponent } from './link/link.component';
import { IconComponent } from './icon/icon.component';
import { BtnComponent } from './btn/btn.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    BtnComponent,
    IconComponent,
    LinkComponent,
    UserCardComponent,
    ProductCardComponent,
    ProductCardV2Component,
    ProductCardV3Component,
    ProductCardV4Component,
    ProductCardPipesComponent,
    ProductCardFinalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    AvatarComponent,
    BtnComponent,
    IconComponent,
    LinkComponent,
    UserCardComponent,
    ProductCardComponent,
    ProductCardV2Component,
    ProductCardV3Component,
    ProductCardV4Component,
    ProductCardPipesComponent,
    ProductCardFinalComponent
  ]
})
export class ComponentsModule { }
