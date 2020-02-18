import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Links } from '../interfaces/links';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	endpoint: string = 'http://newsapi.org/v2/top-headlines?';
	apiKey: string = '&apiKey=171d4886890a4cae88a55422b27e2926';
	
  constructor(private http: HttpClient) { }
	
	getArticles(slug: string): Observable<Links[]>{
		let url: string = `${this.endpoint}${slug}${apiKey}`; 
		
		return this.http.get(url)
			.pipe(
				catchError(this.handleError());
			)
	}
	
	private handleError<T>(operation = 'operation', result?: T) {
		return (err: any): Observable<T> => {
			console.error(`Failed: ${err.message}`);
			return of(result as T);
		}
	}
}
