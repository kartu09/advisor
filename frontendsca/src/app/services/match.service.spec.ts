import { TestBed } from '@angular/core/testing';

import { MatchService } from './match.service';
import { Observable } from 'rxjs';
import { Firestore } from 'firebase/firestore';

describe('MatchService', () => {
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchService]
    });
    service = TestBed.inject(MatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of Match[] when calling getAll', () => {
    const result = service.getAll();

    expect(result).toBeInstanceOf(Observable);
  });
  
});
