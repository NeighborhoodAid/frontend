
export class ArticleModel {

    private readonly _amount:         number;
    private readonly _title:          string;
    private readonly _description:    string;

    constructor(amount: number, title: string, description: string) {
        this._amount        = amount;
        this._title         = title;
        this._description   = description;
    }

    get amount(): number {
        return this._amount;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }
}
