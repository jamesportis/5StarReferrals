import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinutoPage } from './minuto.page';

describe('MinutoPage', () => {
  let component: MinutoPage;
  let fixture: ComponentFixture<MinutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinutoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
