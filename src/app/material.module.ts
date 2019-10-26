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
    MatAutocompleteModule,
    MatGridListModule,
    MatTooltipModule,

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
        MatSelectModule,
        MatAutocompleteModule,
        MatGridListModule,
        MatTooltipModule,
    ],
    exports: [
        MatAutocompleteModule,
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
        MatSelectModule,
        MatGridListModule,
        MatTooltipModule,
    ]
})
export class MaterialModule { }