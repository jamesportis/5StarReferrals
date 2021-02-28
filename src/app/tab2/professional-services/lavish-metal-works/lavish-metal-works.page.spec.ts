import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LavishMetalWorksPage } from './lavish-metal-works.page';

describe('LavishMetalWorksPage', () => {
  let component: LavishMetalWorksPage;
  let fixture: ComponentFixture<LavishMetalWorksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavishMetalWorksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LavishMetalWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
