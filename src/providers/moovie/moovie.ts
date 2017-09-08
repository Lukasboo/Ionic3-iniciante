import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
//60471ecf5f288a61c69c6592c9d9e1cf
  getLatestMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=60471ecf5f288a61c69c6592c9d9e1cf");
  }

//getApiKey(): string{-

//}

}
