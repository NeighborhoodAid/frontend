//import axios, { AxiosInstance } from 'axios';
import {UserModel} from "@/models/user.model";

export class ServerGateway {

    private readonly BASE_URL = 'http://.../api/v1/';
    private readonly TIMEOUT  = 1000;

    constructor() {}

/*    public getHttpInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.BASE_URL,
            timeout: this.TIMEOUT,
        })
    }

    public getHttpInstanceForUser(user: UserModel): AxiosInstance {
        return axios.create({
            baseURL: this.BASE_URL,
            timeout: this.TIMEOUT,
            headers: {'Authorization': user.identifier}
        })
    }*/
}
