import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, filter, of, tap } from 'rxjs';

export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cacheKey = request.urlWithParams;

    const cachedResponse = this.cache.get(cacheKey);

    if (cachedResponse) {
      return of(cachedResponse);
    }

    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse && event.status === 200),
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.cache.set(request.url, response);
        }
      })
    );
  }
}
