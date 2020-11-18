import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  constructor(
    private _http: Http
  ) { }

  private _albumUrl = '../assets/album.json';

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
      .map(response => response.json())
  }

}
