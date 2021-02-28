import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuntasticsPage } from './funtastics.page';

describe('FuntasticsPage', () => {
  let component: FuntasticsPage;
  let fixture: ComponentFixture<FuntasticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuntasticsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuntasticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
