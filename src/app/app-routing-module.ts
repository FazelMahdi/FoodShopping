import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recpies', pathMatch: 'full'},
    {path: 'recpies', component: RecpiesComponent},
    {path: 'shopping-lists', component: ShoppingListComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}