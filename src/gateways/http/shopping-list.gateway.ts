import {ServerGateway} from "@/gateways/http/server.gateway";
import {UserModel} from "@/models/user.model";
import {ShoppingListModel} from "@/models/shopping-list.model";
import {ArticleModel} from "@/models/article.model";

export class ShoppingListGateway {

    constructor(private httpClient: ServerGateway) {}

    getList(identifier: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().get('http://.../api/v1/list/'+identifier).then((response) => {

            let articleList = [];
            for (let articleItem of response.data.articles) {
                articleList.push(new ArticleModel(articleItem.amount, articleItem.title, articleItem.description))
            }

            const shoppingList = new ShoppingListModel(
                response.data.id,
                response.data.creator,
                response.data.claimer,
                response.data.creationDateTime,
                response.data.dueDateTime,
                articleList
            );

            // add to store
            // commit("setShoppingLists", shoppingList)
        });
    }

    create(): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().post('http://.../api/v1/list', {data: {}});
    }

    update(identifier: string) : void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().put('http://.../api/v1/list/'+identifier, {data: {}});
    }

    claim(identifier: string): void  {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().post('http://.../api/v1/list/'+identifier+'/claim', {data: {}});
    }

    delete(identifier: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().delete('http://.../api/v1/list/'+identifier);
    }
}
