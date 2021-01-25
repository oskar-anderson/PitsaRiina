
export class ApiLinks {

    /*
    private readonly host: string = "https://pitsariina.azurewebsites.net/"
    private readonly api: string = "api/"
    private readonly version: string = "v1.0/"
    */
    private readonly host: string = "https://localhost:5001/"
    private readonly api: string = "api/"
    private readonly version: string = "v1.0/"

    public readonly cartApi: string =                   this.host + this.api + this.version + "Cart"
    public readonly cartMealApi: string =               this.host + this.api + this.version + "CartMeal"
    public readonly categoryApi: string =               this.host + this.api + this.version + "Category"
    public readonly componentApi: string =              this.host + this.api + this.version + "Component"
    public readonly componentPizzaTemplateApi: string = this.host + this.api + this.version + "ComponentPizzaTemplate"
    public readonly itemApi: string =                   this.host + this.api + this.version + "Item"
    public readonly pizzaApi: string =                  this.host + this.api + this.version + "Pizza"
    public readonly pizzaTemplateApi: string =          this.host + this.api + this.version + "PizzaTemplate"
    public readonly restaurantApi: string =             this.host + this.api + this.version + "Restaurant"
    public readonly restaurantFoodApi: string =         this.host + this.api + this.version + "RestaurantFood"
    public readonly sharingApi: string =                this.host + this.api + this.version + "Sharing"
    public readonly sharingItemApi: string =            this.host + this.api + this.version + "SharingItem"
    public readonly userLocationApi: string =           this.host + this.api + this.version + "UserLocation"

}

