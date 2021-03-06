import { autoinject } from 'aurelia-framework';
import { RouteConfig, NavigationInstruction, Router } from 'aurelia-router';
import { CategoryService} from 'service/category-service';
import { ICategory } from 'domain/ICategory';
import { IAlertData } from 'types/IAlertData';
import { AlertType } from 'types/AlertType';
import { alertHandler, SOURCE } from 'service/alert-service';

@autoinject
export class CategoryEdit {
    private _alert: IAlertData | null = null;

    private _category?: ICategory;

    constructor(private categoryService: CategoryService, private router: Router) {
    }

    attached() {
    }

    activate(params: any, routeConfig: RouteConfig, navigationInstruction: NavigationInstruction) {
        if (params.id && typeof (params.id) == 'string') {
            this.categoryService.getCategory(params.id).then(
                response => {
                    this._alert = alertHandler(SOURCE.CATEGORY, response.statusCode, response.errorMessage);
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        this._category = response.data!;
                    }
                }
            );
        }
    }

    onSubmit(event: Event) {
        console.log(this._category);
        this.categoryService
            .updateCategory(this._category!)
            .then(
                response => {
                    this._alert = alertHandler(SOURCE.CATEGORY, response.statusCode, response.errorMessage);
                    if (response.statusCode >= 200 && response.statusCode < 300) {
                        this.router.navigateToRoute('category-index', {});
                    }
                }
            );

        event.preventDefault();
    }
}
