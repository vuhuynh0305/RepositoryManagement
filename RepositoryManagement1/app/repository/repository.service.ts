import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';

import { RepositoryModel } from '../../models/repository.model';

@Injectable()
export class RepositoryService {
    private url = 'http://localhost:64604/api/repository';

    constructor(private http: Http) { };

    getList(): Observable<RepositoryModel[]> {
        return this.http.get(this.url).map((res: Response) => res.json());
    }

    addProduct(value: any): Observable<RepositoryModel> {
        let body = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, body, options).map((res: Response) => res.json());
    }

    updateProduct(value: any): Observable<RepositoryModel> {
        let body = JSON.stringify(value);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.url, body, options).map((res: Response) => res.json());
    }

    deleteProduct(id: number): Observable<RepositoryModel> {
        let delURL = `${this.url}/${id}`;
        return this.http.delete(delURL).map((res: Response) => res.json());
    }
}