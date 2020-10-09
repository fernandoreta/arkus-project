import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { ComidasComponent } from './menu/comidas/comidas.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PostresComponent } from './postres/postres.component';
import { MenuTemplateComponent } from './menu/menu-template/menu-template.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: 'app-menu',
    component: MenuComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'app-menu-template',
    component: MenuTemplateComponent,
  },
  {
    path: 'app-comidas',
    component: ComidasComponent
  },
  {
    path: 'app-bebidas',
    component: BebidasComponent
  },
  {
    path: 'app-postres',
    component: PostresComponent
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-inventario',
    component: InventarioComponent
  },
  {
    path: 'app-ventas',
    component: VentasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
