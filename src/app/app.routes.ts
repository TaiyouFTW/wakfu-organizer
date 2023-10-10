import { Routes } from '@angular/router';
import { LayoutComponent } from './_shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [

        ]
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(mod => mod.NotFoundComponent) }
];
