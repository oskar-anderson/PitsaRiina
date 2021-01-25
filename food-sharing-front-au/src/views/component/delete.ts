import { autoinject } from 'aurelia-framework';
import { RouteConfig, NavigationInstruction, Router } from 'aurelia-router';
import { ComponentService } from 'service/component-service';
import { IComponent } from 'domain/IComponent';
import { IAlertData } from 'types/IAlertData';
import { AlertType } from 'types/AlertType';
import { alertHandler, SOURCE } from 'service/alert-service';


@autoinject
export class MealDelete {
    private _alert: IAlertData | null = null;

    private _component?: IComponent;

    constructor(private componentService: ComponentService, private router: Router) {

    }

    attached() {

    }

    activate(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        console.log(params);
        if (params.id && typeof (params.id) == 'string') {
            this.componentService.getComponent(params.id).then(
                response => {
                    this._alert = alertHandler(SOURCE.COMPONENT, response.statusCode, response.errorMessage);
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        this._component = response.data!;
                    };
                }
            );
        }
    }

    onSubmit(event: Event) {
        this.componentService
            .deleteComponent(this._component!.id)
            .then(
                response => {
                    this._alert = alertHandler(SOURCE.COMPONENT, response.statusCode, response.errorMessage);
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        this.router.navigateToRoute('component-index', {});
                    }
                }
            );
        event.preventDefault();
    }
}
