import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServersComponent } from './servers/servers';
import { CotxesComponent } from './cotxes/cotxes';
import { PaisComponent } from './pais/pais';
import { ExternComponent } from './extern/extern';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'servers', component: ServersComponent },
    { path: 'cotxes', component: CotxesComponent },
    { path: 'pais', component: PaisComponent },

    
    // Si no existeix la ruta porta a Extern Component
    { path: '**', component: ExternComponent }, 
];
