import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ListaCadastrosComponent } from "./components/lista-cadastros/lista-cadastros.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormularioComponent, ListaCadastrosComponent]
})
export class AppComponent {
  title = 'crude-angular';
}
