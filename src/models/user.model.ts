import {AddressModel} from "@/models/address.model";

export class UserModel {

    private readonly _identifier:     string;
    private readonly _name:           string;
    private readonly _email:          string;
    private readonly _phoneNumber:    string;
    private readonly _address:        AddressModel;

    constructor(identifier: string, name: string, email: string, phoneNumber: string, address: AddressModel) {
        this._identifier     = identifier;
        this._name           = name;
        this._email          = email;
        this._phoneNumber    = phoneNumber;
        this._address        = address;
    }

    get identifier(): string {
        return this._identifier;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get address(): AddressModel {
        return this._address;
    }
}
