import { NgModule } from '@angular/core';
//botones
import {MatButtonModule} from '@angular/material/button';
//sidenav para poner el menu alado
import {MatSidenavModule} from '@angular/material/sidenav';
//toolbar es para poner el menu de aburgesa
import {MatToolbarModule} from '@angular/material/toolbar';
//iconos https://fonts.google.com/icons?selected=Material+Icons:bookmark
import {MatIconModule} from '@angular/material/icon';
//lista
import {MatListModule} from '@angular/material/list';
//cards
import {MatCardModule} from '@angular/material/card';
//rueda que carga 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//cover secciones 
import { MatGridListModule } from '@angular/material/grid-list';
//autocompletado en buscador
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
//select de agregar heroe
import { MatSelectModule } from '@angular/material/select';
//mensaje de confirmacion al dar click guardar editar snackbar
import {MatSnackBarModule} from '@angular/material/snack-bar';
//mensaje al momento de eliminar para saber si esta seguro dialog
import {MatDialogModule} from '@angular/material/dialog';



/*instalar el angular flex-layout para usar los flex
npm i @angular/flex-layout
npm i -s @angular/flex-layout @angular/cdk 

import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});*/

@NgModule({
exports:[
MatSidenavModule,
MatToolbarModule,
MatButtonModule,
MatIconModule,
MatListModule,
MatCardModule,
MatProgressSpinnerModule,
MatGridListModule,
MatAutocompleteModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,
MatSnackBarModule,
MatDialogModule
]
})
export class MaterialModule { }
