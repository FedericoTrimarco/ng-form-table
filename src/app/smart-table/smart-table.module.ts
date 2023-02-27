import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartTableRoutingModule } from './smart-table-routing.module';
import { SmartTableComponent } from './smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';


@NgModule({
  declarations: [SmartTableComponent],
  imports: [
    CommonModule,
    SmartTableRoutingModule,
    Ng2SmartTableModule,
    Ng2CompleterModule
  ]
})
export class SmartTableModule { }
