import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BirdPage } from './bird.page';

describe('BirdPage', () => {
  let component: BirdPage;
  let fixture: ComponentFixture<BirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
