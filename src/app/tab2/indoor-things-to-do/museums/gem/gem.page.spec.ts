import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GemPage } from './gem.page';

describe('GemPage', () => {
  let component: GemPage;
  let fixture: ComponentFixture<GemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
