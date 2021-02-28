import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';

import axios from 'axios';

let headers = new Headers();
  headers.append('Authorization', '8duNw_DlDnKwRbbc9Ju_l_t2zOZ3h23KejIZxtOvrB_sv4F9gBnpPrNXVSEJAP9meHHBG9pWj6Szy7IP-QfdMbsf9ug6j7Mtzm7piP5cqOa3mmXLUeoIO7mQUAY8X3Yx' );



@Injectable({
  providedIn: 'root'
})
export class YelpService {
  url = 'https://api.yelp.com/v3/businesses/search/phone';
  apiKEY = '8duNw_DlDnKwRbbc9Ju_l_t2zOZ3h23KejIZxtOvrB_sv4F9gBnpPrNXVSEJAP9meHHBG9pWj6Szy7IP-QfdMbsf9ug6j7Mtzm7piP5cqOa3mmXLUeoIO7mQUAY8X3Yx';
  


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer 8duNw_DlDnKwRbbc9Ju_l_t2zOZ3h23KejIZxtOvrB_sv4F9gBnpPrNXVSEJAP9meHHBG9pWj6Szy7IP-QfdMbsf9ug6j7Mtzm7piP5cqOa3mmXLUeoIO7mQUAY8X3Y'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  axiosSearch() {
    axios.get(`https://api.yelp.com/v3/businesses/search/phone=+15202845252`, {
      headers: {
        Authorization: 'Bearer 8duNw_DlDnKwRbbc9Ju_l_t2zOZ3h23KejIZxtOvrB_sv4F9gBnpPrNXVSEJAP9meHHBG9pWj6Szy7IP-QfdMbsf9ug6j7Mtzm7piP5cqOa3mmXLUeoIO7mQUAY8X3Y',
        
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
        'Access-Control-Allow-Origin': 'http://localhost:8100',
        
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  

  searchData(): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: 'Bearer 8duNw_DlDnKwRbbc9Ju_l_t2zOZ3h23KejIZxtOvrB_sv4F9gBnpPrNXVSEJAP9meHHBG9pWj6Szy7IP-QfdMbsf9ug6j7Mtzm7piP5cqOa3mmXLUeoIO7mQUAY8X3Y'
    });
    headers.append('Authorization', 'Bearer 8duNw_DlDnKwRbbc9Ju_l_t2zOZ3h23KejIZxtOvrB_sv4F9gBnpPrNXVSEJAP9meHHBG9pWj6Szy7IP-QfdMbsf9ug6j7Mtzm7piP5cqOa3mmXLUeoIO7mQUAY8X3Y');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization');
    console.log(this.http.get<any>(`${this.url}?phone=+15202845252`, {headers: headers}));
    this.http.get<any>(`${this.url}?phone=+15202845252`, {headers: headers}).subscribe((data) => {
      console.log(data);
    });
    return this.http.get<any>(`${this.url}?phone=+15202845252`, {headers: headers}).pipe(map(results => results.json));
  }

  

  

}
