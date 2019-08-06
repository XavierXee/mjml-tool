import { FileReader } from '../utils/file-reader';
import { SpaceInvader } from './space-invader';
import { Radar } from './radar';
import { MjmlProcessor } from './mjml-processor';

export class Main {

    // public mjmlProcessor: MjmlProcessor;
    // public radar: Radar;
    // private spaceInvaders: SpaceInvader[];

    public init(callback: any): Promise<any> {

        // this.mjmlProcessor = new MjmlProcessor({});
        return new Promise((resolve, reject) => {

            resolve('test');

            // this.mjmlProcessor.start(null)
            //     .then((data) => {
            //         resolve(data);
            //     })
            //     .catch((error) => {
            //         reject(error);
            //     })

        });

        // const getRadar: Promise<string> = FileReader.get('radar.txt');
        // const getSpaceInvaderOne: Promise<string> = FileReader.get('space-invader-1.txt');
        // const getSpaceInvaderTwo: Promise<string> = FileReader.get('space-invader-2.txt');

        // Promise.all([getRadar, getSpaceInvaderOne, getSpaceInvaderTwo]).then((values) => {
        //     this.spaceInvaders = [];
        //     this.radar = new Radar(values[0]);
        //     this.spaceInvaders.push(new SpaceInvader(values[1], 'space-invader-1'));
        //     this.spaceInvaders.push(new SpaceInvader(values[2], 'space-invader-2'));
        //
        //     callback();
        // });

    }

    // public getRadarData () {
    //     return this.radar.dataArray;
    // }
    //
    // public getDetection () {
    //     return this.radar.startSpaceInvadersDetection(this.spaceInvaders);
    // }

    constructor() {}

}