import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateModule } from './template/template.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Template Labs';
}
