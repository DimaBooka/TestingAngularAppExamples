import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { HappyService } from './happy.service';
import { HttpModule, RequestMethod, ResponseOptions, XHRBackend, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

const mockResponse = 'Happy';

fdescribe('Happy.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        },
        HappyService
      ]
    });
  });

  it('should get search results', fakeAsync(
    inject([
      XHRBackend,
      HappyService
    ], (mockBackend, happyService: HappyService) => {

      const expectedUrl = '/assets/json/happy.json';

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe(expectedUrl);

          connection.mockRespond(new Response(
            new ResponseOptions({ body: { mockResponse }})
          ));
        });

      happyService.getHappy()
        .subscribe(res => {
          expect(res['mockResponse']).toEqual(mockResponse);
        });
    })
  ));
});
