import {Component} from '@angular/core';
import {ColorPickerDirective} from 'ct-angular2-color-picker/component'

@Component({
    selector: 'my-app',
    templateUrl: '/src/app.component.html',
    directives: [ColorPickerDirective]
})

export class AppComponent {
    private color: string = "#127bdc";
    private color2: string = "hsla(300,82%,52%)";
    private color3: string = "#fff500";
    private color4: string = "rgb(236,64,64)";
    private color5: string = "rgba(45,208,45,1)";
    private color6: string = "#1973c0";
    private color7: string = "#f200bd";
    private color8: string = "#a8ff00";
}