import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { ShoppingReducer } from "./store/reducers/shopping.reducer";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { ShoppingEffects } from "./store/effects/shopping.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shopping: ShoppingReducer }),
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
