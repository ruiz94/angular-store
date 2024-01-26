import { Routes } from '@angular/router';

import { ListComponent } from '@products/pages/list/list.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/not-found/not-found.component';
import { ServicesComponent } from '@info/pages/services/services.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: "about",
        component: AboutComponent,
      },
      {
        path: "services",
        component: ServicesComponent
      },
    ]
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
