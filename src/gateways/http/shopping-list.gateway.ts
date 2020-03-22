import {ServerGateway} from "@/gateways/http/server.gateway";
import {UserModel} from "@/models/user.model";

export class ShoppingListGateway {

    constructor(private httpClient: ServerGateway) {}

    getList(identifier: string, user: UserModel): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstanceForUser(user).get('http://.../api/v1/list/'+identifier);
    }

    create(user: UserModel): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstanceForUser(user).post('http://.../api/v1/list', {data: {}});
    }

    update(identifier: string, user: UserModel) : void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstanceForUser(user).put('http://.../api/v1/list/'+identifier, {data: {}});
    }

    claim(identifier: string, user: UserModel): void  {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstanceForUser(user).post('http://.../api/v1/list/'+identifier+'/claim', {data: {}});
    }

    delete(identifier: string, user: UserModel): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstanceForUser(user).delete('http://.../api/v1/list/'+identifier);
    }
}
