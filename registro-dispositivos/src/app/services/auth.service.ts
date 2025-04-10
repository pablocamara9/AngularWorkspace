import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.noxium.net/admin-api'; // Replace with your API URL
  private tokenSubject = new BehaviorSubject<string | null>(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();
  
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    // Check for token in URL on app initialization
    this.route.queryParams.subscribe(params => {
      const tokenFromUrl = params['token'];
      if (tokenFromUrl) {
        this.tokenSubject.next(tokenFromUrl);
      }
    });
  }

  // 1. Get token from URL
  getTokenFromUrl(): string | null {
    return this.route.snapshot.queryParams['token'] || null;
  }

  // 2. Validate token
  validateToken(token: string): Observable<any> {
    const url = `${this.apiUrl}/validate-token`;
    const body = new URLSearchParams();
    body.set('token', token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') ?? ''
    });
    return this.http.post(url, body.toString(), { headers }).pipe(
      tap((response: any) => {
        if (response.success) {
          // Token is valid, do something with user data if needed
          console.log('Token validated successfully', response.user);
        } else {
          console.error('Token validation failed', response.message);
          // Handle invalid token (e.g., redirect to login)
        }
      })
    );
  }

  // 3. Get token with email and password
  login(email: string, password: string): Observable<string> {
    const url = `${this.apiUrl}/generate-token`;
    const body = { email, password };
    return this.http.post<any>(url, body).pipe(
      map(response => {
        if (response.success) {
          const token = response.token;
          this.tokenSubject.next(token); // Store the token
          return token;
        } else {
          throw new Error(response.message);
        }
      })
    );
  }

  // Helper function to clear the token
  logout(): void {
    this.tokenSubject.next(null);
  }
}
