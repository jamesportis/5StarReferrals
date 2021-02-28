import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibationsPage } from './libations.page';

describe('LibationsPage', () => {
  let component: LibationsPage;
  let fixture: ComponentFixture<LibationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
