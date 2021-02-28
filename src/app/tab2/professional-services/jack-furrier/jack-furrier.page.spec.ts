import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JackFurrierPage } from './jack-furrier.page';

describe('JackFurrierPage', () => {
  let component: JackFurrierPage;
  let fixture: ComponentFixture<JackFurrierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackFurrierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JackFurrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
