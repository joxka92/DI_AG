import { Routes } from '@angular/router';
import { IA } from './Pages/ia/ia';
import { IA2 } from './Pages/ia2/ia2';

export const routes: Routes = [
    {
        path: 'ia',
        component: IA
    },
    {
        path: 'ia2',
        component: IA2
    },
];
