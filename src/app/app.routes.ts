import { Routes } from '@angular/router';

import { LayoutComponent } from '@shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        // I'm doing a default export in the list.component file that´s why we don't use the .then callback like we're using in about path
        loadComponent: () => import("@products/pages/list/list.component"),
      },
      {
        path: "about",
        loadComponent: () => import("@info/pages/about/about.component").then(m => m.AboutComponent),
      },
      {
        path: "services",
        loadComponent: () => import("@info/pages/services/services.component")
      },
      {
        path: "product/:id",
        loadComponent: () =>  import("@products/pages/product-detail/product-detail.component")
      },
    ]
  },
  {
    path: "**",
    loadComponent: () => import("@info/not-found/not-found.component")
  }
];
