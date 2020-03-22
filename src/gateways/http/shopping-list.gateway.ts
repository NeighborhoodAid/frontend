import {ServerGateway} from "@/gateways/http/server.gateway";
import {UserModel} from "@/models/user.model";
import {ShoppingListModel} from "@/models/shopping-list.model";
import {ArticleModel} from "@/models/article.model";

export class ShoppingListGateway {

    constructor(private httpClient: ServerGateway) {}

    getList(identifier: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().get('/list/'+identifier).then((response) => {

            const articleList = [];
            for (const articleItem of response.data.articles) {
                articleList.push(new ArticleModel(articleItem.amount, articleItem.title, articleItem.description, articleItem.done))
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
        this.httpClient.getHttpInstance().post('/list', {data: {}});
    }

    update(identifier: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().put('/list/'+identifier, {data: {}});
    }

    claim(identifier: string): void  {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().post('/list/'+identifier+'/claim', {data: {}});
    }

    delete(identifier: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().delete('/list/'+identifier);
    }
}
