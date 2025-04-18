import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GreetingService } from './greeting.service';
import { mock, instance, when } from 'ts-mockito';
import { verify } from 'ts-mockito';
describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    // Step 1: Create mock
    const mockedService = mock(GreetingService);

    // Step 2: Stub method
    when(mockedService.getGreeting()).thenReturn('Mocked Hello from ts-mockito!');

    // Step 3: Convert to real instance with mocked behavior
    const mockServiceInstance = instance(mockedService);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{ provide: GreetingService, useValue: mockServiceInstance }],
    }).compileComponents();
       // Step 5: Create component
       fixture = TestBed.createComponent(AppComponent);
       component = fixture.componentInstance;
       fixture.detectChanges(); // ngOnInit is called here
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'mockdemo' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mockdemo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, mockdemo');
  });
  it('should show mocked greeting in DOM', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('p')?.textContent).toContain('Mocked Hello from ts-mockito!');
  });
});
