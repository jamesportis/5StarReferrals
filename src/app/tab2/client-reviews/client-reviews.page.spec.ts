import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientReviewsPage } from './client-reviews.page';

describe('ClientReviewsPage', () => {
  let component: ClientReviewsPage;
  let fixture: ComponentFixture<ClientReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
