import axios from 'axios';
import {ServerGateway} from "@/gateways/http/server.gateway";

export class ShoppingListGateway {

    constructor(private httpClient: ServerGateway) {}

    getList(identifier: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().get('http://.../api/v1/list/'+identifier);
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
