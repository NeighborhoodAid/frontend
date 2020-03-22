import {ArticleModel} from "@/models/article.model";

export class ShoppingListModel {

    private readonly _identifier:       string;
    private readonly _creator:          string;
    private readonly _claimer:          string;
    private readonly _creationDateTime: string;
    private readonly _dueDateTime:      string;
    private readonly _articles:         ArticleModel[]; // Add new item over State management

    constructor(identifier: string, creator: string, claimer: string, creationDateTime: string, dueDateTime: string, articles: ArticleModel[]) {
        this._identifier        = identifier;
        this._creator           = creator;
        this._claimer           = claimer;
        this._creationDateTime  = creationDateTime;
        this._dueDateTime       = dueDateTime;
        this._articles          = articles;
    }

    get identifier(): string {
        return this._identifier;
    }

    get creator(): string {
        return this._creator;
    }

    get claimer(): string {
        return this._claimer;
    }

    get creationDateTime(): string {
        return this._creationDateTime;
    }

    get dueDateTime(): string {
        return this._dueDateTime;
    }

    get articles(): ArticleModel[] {
        return this._articles;
    }
}
