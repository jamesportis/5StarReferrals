import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenCardenasPage } from './ben-cardenas.page';

describe('BenCardenasPage', () => {
  let component: BenCardenasPage;
  let fixture: ComponentFixture<BenCardenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenCardenasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenCardenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
