class ShoppingPage{

    get searchbarInput(){
        return $('#twotabsearchtextbox');
    }
    get searchButton(){
        return $('input[type="submit"]');
    }
    get searchResult(){
        return $('.a-color-state');
    }
    get selectItem(){
        return $('.a-link-normal.s-no-outline');
    }
    get addToCartButton(){
        return $('#add-to-cart-button');
    }
    get displayedtext(){
        return $('.a-size-medium-plus');
    }
    get cartButton(){
        return $('#nav-cart-text-container');
    }
    get deleteButton(){
        return $('input[value="Ta bort"]');
    }
    get deleteMessage(){
        return $('.a-spacing-mini.a-spacing-top-base');
    }

    async addToCart(itemName){
        await this.searchbarInput.clearValue();
        await this.searchbarInput.setValue(itemName);
        await this.searchButton.click();
        await this.selectItem.click();
        await this.addToCartButton.click();
    }

    async deleteFromCart(){
        await this.cartButton.click();
        await this.deleteButton.click();

    }

}export default new ShoppingPage();