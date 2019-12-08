import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntervalsPage } from './intervals.page';

describe('IntervalsPage', () => {
  let component: IntervalsPage;
  let fixture: ComponentFixture<IntervalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntervalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
