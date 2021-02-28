import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IguanaPage } from './iguana.page';

describe('IguanaPage', () => {
  let component: IguanaPage;
  let fixture: ComponentFixture<IguanaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IguanaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IguanaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
