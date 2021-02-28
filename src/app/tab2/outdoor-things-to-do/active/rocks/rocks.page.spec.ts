import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocksPage } from './rocks.page';

describe('RocksPage', () => {
  let component: RocksPage;
  let fixture: ComponentFixture<RocksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
