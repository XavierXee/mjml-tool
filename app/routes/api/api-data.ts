import { Request, Response, Router } from 'express';
import { BaseRoute } from '../router';
import { Main } from "../../core/main";

export class ApiData extends BaseRoute {

    private main: Main;

    constructor(mainInstance: Main) {
        super();
        this.main = mainInstance;
    }

    public static create(router: Router, mainInstance: Main): void {
        router.post('/api/data', (req: Request, res: Response) => {
            new ApiData(mainInstance).processData(req, res);
        });
    }

    public processData(req: Request, res: Response): void {
        this.main.init(() => {
            this.send(req, res, 'Response');
        });
    }
}