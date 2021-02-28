import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaPage } from './nova.page';

describe('NovaPage', () => {
  let component: NovaPage;
  let fixture: ComponentFixture<NovaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
