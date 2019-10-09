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

} from '@Angular/material'
import { MatDialogModule } from '@angular/material/dialog'

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
        MatDividerModule
    ]
})
export class MaterialModule { }