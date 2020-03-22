
export class ArticleModel {

    private readonly _amount:         number;
    private readonly _title:          string;
    private readonly _description:    string;
    private readonly _done:           boolean;

    constructor(amount: number, title: string, description: string, done: boolean) {
        this._amount        = amount;
        this._title         = title;
        this._description   = description;
        this._done          = done;
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

    get done(): boolean {
        return this._done;
    }
}
