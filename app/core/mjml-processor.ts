import { Report } from '../interfaces/report';
import { Matrix } from './matrix';
import { SpaceInvader } from './space-invader';

export class MjmlProcessor extends Matrix {

    // private reports: Report[];

    constructor(data: any) {
        super(data);
        // this.reports = [];
    }

    public start(data: any): Promise<any> {
        return new Promise((resolve, reject) => {

        });
        console.log('///////////////////////////////');
        console.log('MjmlProcessor START');
        console.log(data);
        console.log('///////////////////////////////');
    }

}