import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, any>();

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    // Check if the response is already in the cache
    const cachedResponse = this.cache.get(request.url);
    if (cachedResponse) {
      console.log('Returning cached response');
      console.log(cachedResponse);
      console.log(request);
      console.log('-------------------------------------------------');
      console.log('-------------------------------------------------');
      return of(cachedResponse);
    }

    // If not in the cache, make the request and cache the response
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.cache.set(request.url, event);
        }
      })
    );
  }
}
