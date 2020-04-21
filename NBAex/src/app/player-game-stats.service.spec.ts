import { TestBed } from '@angular/core/testing';

import { PlayerGameStatsService } from './player-game-stats.service';

describe('PlayerGameStatsService', () => {
  let service: PlayerGameStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerGameStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
