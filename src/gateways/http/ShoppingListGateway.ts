import axios from 'axios';

export class ShoppingListGateway {

    getList(identifier: string): void {
        // ToDo: not finished implemented
        axios.get('http://.../api/v1/list/'+identifier);
    }

    create(): void {
        // ToDo: not finished implemented
        axios.post('http://.../api/v1/list', {data: {}});
    }

    update(identifier: string) : void {
        // ToDo: not finished implemented
        axios.put('http://.../api/v1/list/'+identifier, {data: {}});
    }

    claim(identifier: string): void  {
        // ToDo: not finished implemented
        axios.post('http://.../api/v1/list/'+identifier+'/claim', {data: {}});
    }

    delete(identifier: string): void {
        // ToDo: not finished implemented
        axios.delete('http://.../api/v1/list/'+identifier);
    }
}
