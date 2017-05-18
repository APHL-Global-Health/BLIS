import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'patient',
        loadChildren: './patient/patient.module#PatientModule'
      },
      {
        path: 'tests',
        loadChildren: './tests/tests.module#TestsModule'
      },
      {
        path: 'instruments',
        loadChildren: './instruments/instruments.module#InstrumentModule'
      },
      {
        path: 'facilities',
        loadChildren: './facilities/facilities.module#FacilitiesModule'
      },
      {
        path: 'surveillance',
        loadChildren: './surveillance/surveillance.module#SurveillanceModule'
      },      
      {
        path: 'barcode',
        loadChildren: './barcode/barcode.module#BarcodeModule'
      },
      {
        path: 'interfacedEquipment',
        loadChildren: './interfacedEquipment/interfacedEquipment.module#InterfacedEquipmentModule'
      },
       {
        path: 'testcategory',
        loadChildren: './testcategory/testcategory.module#TestCategoryModule'
      },
       {
        path: 'specimen',
        loadChildren: './specimen/specimen.module#SpecimenModule'
      },
       {
        path: 'specimenrejection',
        loadChildren: './specimenrejection/specimenrejection.module#SpecimenRejectionModule'
      },
        {
        path: 'testtype',
        loadChildren: './testtypes/testtype.module#TestTypeModule'
      },
        {
        path: 'drugs',
        loadChildren: './drugs/drugs.module#DrugsModule'
      },
      {
        path: 'organisms',
        loadChildren: './organisms/organisms.module#OrganismsModule'
      },
      {
        path: 'critical',
        loadChildren: './critical/critical.module#CriticalModule'
      },
        {
        path: 'microbiology',
        loadChildren: './microbiology/microbiology.module#MicrobiologyModule'
      }      
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
