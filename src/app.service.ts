import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
    }
    getUserInformation(): any {
        const obj = { firstname: 'Sarmad', lastname: 'Saeed', cellNo:'484654546' };

        return JSON.parse(JSON.stringify(obj));
    }
}
