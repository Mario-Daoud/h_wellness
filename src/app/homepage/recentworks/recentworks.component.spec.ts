import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentworksComponent } from './recentworks.component';

describe('RecentworksComponent', () => {
  let component: RecentworksComponent;
  let fixture: ComponentFixture<RecentworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentworksComponent]
    });
    fixture = TestBed.createComponent(RecentworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
