import { NgModule } from '@Angular/core'

import {
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatSelectModule,
    

} from '@Angular/material'
import { MatDialogModule } from '@angular/material/dialog'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        MatSelectModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatDialogModule,
        MatSnackBarModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatDividerModule,
        MatPaginatorModule,
        MatTableModule,
        MatSelectModule
    ]
})
export class MaterialModule { }