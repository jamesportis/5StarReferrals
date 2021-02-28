import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonathanPage } from './jonathan.page';

describe('JonathanPage', () => {
  let component: JonathanPage;
  let fixture: ComponentFixture<JonathanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonathanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonathanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
