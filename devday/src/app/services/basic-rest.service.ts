import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicRestService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * Does a basic HTTP-GET request against a given path.
   * @param path the path the request is fired to
   * Returns Observable which can be subscribed to
   */
  public get<T>(path: string, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.get<T>(path, options).pipe(
      tap(
        () => {
          if (isDevMode()) {
            console.log('⬇ GET success ' + path);
          }

        }
      )
    );
  }

  /**
   * Does a basic HTTP-GET request against a given path.
   * @param path the path the request is fired to
   * Returns Observable which can be subscribed to
   */
  public getRaw(path: string, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'text';
    withCredentials?: boolean;
  }): Observable<string> {
    return this.httpClient.get(path, {responseType: 'text'}).pipe(
      tap(
        () => {
          if (isDevMode()) {
            console.log('GET success ' + path);
          }

        }
      )
    );
  }

  getBlob(url: string, options: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'response';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'blob';
    withCredentials?: boolean;
  }): Observable<HttpResponse<Blob>> {
    return this.httpClient.get(url, options)
  }

    /**
     * Constructs a `GET` request that interprets the body as a JSON object and
     * returns the full `HTTPResponse`.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     * @return An `Observable` of the full `HTTPResponse` for the request,
     * with a response body in the requested type.
     */
  getWithHeaders<T>(path: string, options: {
      headers?: HttpHeaders | {
          [header: string]: string | string[];
      };
      observe: 'response';
      params?: HttpParams | {
          [param: string]: string | string[];
      };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
  }): Observable<HttpResponse<T>> {
    return this.httpClient.get<T>(path, options).pipe(
      tap(
        () => {
          if (isDevMode()) {
            console.log('GET success ' + path);
          }

        }
      )
    );
  }

  /**
   * Sends given data with a HTTP-POST request to a given path
   * @param path the path the request is fired to
   * @param data the post data which is send to the given path
   * Returns Observable which can be subscribed to
   */
  public post<T>(path: string, data: any, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.post<T>(path, data, options).pipe(
      tap(
        () => {
          if (isDevMode()) {
            console.log('POST success' + path);
          }
        }
      )
    );
  }

  /**
   * Sends given data with a HTTP-PUT request to a given path.
   * @param path the path the request is fired to
   * @param data the put data which is send to the given path
   * Returns Observable which can be subscribed to
   */
  public put<T>(path: string, data: any, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.put<T>(path, data, options).pipe(
      tap(
        () => {
          if (isDevMode()) {
            console.log('Put success' + path);
          }
        }
      )
    );
  }

  /**
   * Sends a HTTP-DELETE requst to a given path
   * @param path the path the request is fired to
   * Returns Observable which can be subscribed to
   */
  public delete<T>(path: string, options?: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<T> {
    return this.httpClient.delete<T>(path, options).pipe(
      tap(
        () => {
          if (isDevMode()) {
            console.log('DELETE success' + path);
          }
        }
      )
    );
  }
}
