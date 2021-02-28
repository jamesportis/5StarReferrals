import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuckPage } from './duck.page';

describe('DuckPage', () => {
  let component: DuckPage;
  let fixture: ComponentFixture<DuckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
