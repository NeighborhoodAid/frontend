import axios from 'axios';

export class UserGateway {

    /**
     * @param email
     * @param password
     */
    login(email: string, password: string): void {
        // ToDo: not finished implemented
        axios.post('http://.../api/v1/login', {data: {email: email, password: password}});
    }

    /**
     * @param email
     * @param password
     * @param mailAddress
     * @param phoneNumber
     */
    signup(email: string, password: string, mailAddress: string, phoneNumber: string): void {
        // ToDo: not finished implemented
        axios.post('http://.../api/v1/signup', {data: {email: email, password: password, mailAddress: mailAddress, phoneNumber: phoneNumber}});
    }
}
