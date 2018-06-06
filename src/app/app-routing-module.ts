import { RecipeEditComponent } from './recpies/recipe-edit/recipe-edit.component';
import { RecpieDetailComponent } from './recpies/recpie-detail/recpie-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recpies', pathMatch: 'full'},
    {path: 'recpies', component: RecpiesComponent, children: [
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecpieDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent},
    ]},
    {path: 'shopping-lists', component: ShoppingListComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}