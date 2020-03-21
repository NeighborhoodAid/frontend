import axios, { AxiosInstance } from 'axios';

export class ServerGateway {

    private httpInstance: AxiosInstance;

    constructor() {
        this.httpInstance = axios.create({
            baseURL: 'http://.../api/v1/',
            timeout: 1000,
        })
    }

    public getHttpInstance() {
        return this.httpInstance;
    }
}
