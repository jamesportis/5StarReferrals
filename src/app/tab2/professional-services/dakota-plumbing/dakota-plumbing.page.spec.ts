import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DakotaPlumbingPage } from './dakota-plumbing.page';

describe('DakotaPlumbingPage', () => {
  let component: DakotaPlumbingPage;
  let fixture: ComponentFixture<DakotaPlumbingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DakotaPlumbingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DakotaPlumbingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
