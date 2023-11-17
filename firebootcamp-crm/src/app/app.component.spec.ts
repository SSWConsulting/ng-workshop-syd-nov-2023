import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppState } from './models/appState';
import { provideMockStore } from '@ngrx/store/testing'
import { By } from '@angular/platform-browser';

const initialState: AppState = {
  companies: []
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Sydney 🐨'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Sydney 🐨');
  });

  it('should add 1+1 as 2', () => {
    expect(1+1).toEqual(2)
  })

  it('should show the company count as 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const countElement = fixture.debugElement.query(By.css('#company-count')).nativeElement;

    expect(countElement.textContent).toEqual("0");
  })
});
