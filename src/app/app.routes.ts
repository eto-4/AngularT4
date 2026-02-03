import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServersComponent } from './servers/servers';
import { CotxesComponent } from './cotxes/cotxes';
import { ExternComponent } from './extern/extern';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'servers', component: ServersComponent },
    { path: 'cotxes', component: CotxesComponent },
    
    { path: '**', component: ExternComponent },
];
