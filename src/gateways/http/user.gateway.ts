import axios from 'axios';
import {ServerGateway} from "@/gateways/http/server.gateway";

export class UserGateway {

    constructor(private httpClient: ServerGateway) {}

    /**
     * @param email
     * @param password
     */
    login(email: string, password: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().post('/login', {data: {email: email, password: password}});
    }

    /**
     * @param email
     * @param password
     * @param mailAddress
     * @param phoneNumber
     */
    signup(email: string, password: string, mailAddress: string, phoneNumber: string): void {
        // ToDo: not finished implemented
        this.httpClient.getHttpInstance().post('/signup', {data: {email: email, password: password, mailAddress: mailAddress, phoneNumber: phoneNumber}});
    }
}
