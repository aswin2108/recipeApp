import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { RecipieListComponent } from './component/recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './component/recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './component/recipies/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
