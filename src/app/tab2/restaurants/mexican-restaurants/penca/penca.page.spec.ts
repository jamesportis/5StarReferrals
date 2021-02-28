import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PencaPage } from './penca.page';

describe('PencaPage', () => {
  let component: PencaPage;
  let fixture: ComponentFixture<PencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
