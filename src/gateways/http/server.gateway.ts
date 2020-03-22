import axios, { AxiosInstance } from 'axios';
import {UserModel} from "@/models/user.model";

export class ServerGateway {

    private readonly BASE_URL = 'http://.../api/v1/';
    private readonly TIMEOUT  = 1000;

    constructor(private user: UserModel|null = null) {}

    public getHttpInstance(): AxiosInstance {

        const headers = this.user !== null ? {'Authorization': this.user.identifier}: {};

        return axios.create({
            baseURL: this.BASE_URL,
            timeout: this.TIMEOUT,
            headers: headers
        })
    }
}
