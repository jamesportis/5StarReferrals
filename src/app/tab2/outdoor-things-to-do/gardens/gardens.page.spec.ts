import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GardensPage } from './gardens.page';

describe('GardensPage', () => {
  let component: GardensPage;
  let fixture: ComponentFixture<GardensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GardensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
