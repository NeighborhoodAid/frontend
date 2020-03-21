
export class AddressModel {

    private readonly _street:   string;
    private readonly _number:   string;
    private readonly _postcode: number;
    private readonly _cityName: string;

    constructor(street: string, number: string, postcode: number, cityName: string) {
        this._street    = street;
        this._number    = number;
        this._postcode  = postcode;
        this._cityName  = cityName;
    }

    get street(): string {
        return this._street;
    }

    get number(): string {
        return this._number;
    }

    get postcode(): number {
        return this._postcode;
    }

    get cityName(): string {
        return this._cityName;
    }
}
