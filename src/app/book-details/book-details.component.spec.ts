import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let compiled;
  let form
  let min_price
  let max_price
  let filter_button
  let reset_button
  let msg
  let msg1
  let card

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  const pushInputValue = async (el, value) => {
    el.value = value;
    el.dispatchEvent(new Event('change'));
    el.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ BookDetailsComponent ],
      schemas : [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    await fixture.detectChanges();
    await fixture.whenStable();
    // await TestBed.configureTestingModule({
    //   imports: [FormsModule],
    //   declarations: [ BookDetailsComponent ]
    // })
    // .compileComponents();
    // form= getByTestId('form');
    min_price=getByTestId('min_price')
    max_price=getByTestId('max_price')
    filter_button=getByTestId('filter_button')
    reset_button=getByTestId('reset_button')
    msg=getByTestId('msg')
    msg1=getByTestId('msg1')
    card=getByTestId('card')
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(BookDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  

  it('initial UI is rendered properly', async() => {
    // expect(form.value).toBeFalsy();
    expect(min_price.value).toBeFalsy();
    expect(max_price.value).toBeFalsy();
    expect(filter_button.disabled).toBeFalsy();
    expect(reset_button.disabled).toBeFalsy();
    expect(msg).toBeNull();
    expect(card).toBeTruthy();
  });

  it('validation of books between 100-200', async() => {
    await pushInputValue(min_price, 100);
    await pushInputValue(max_price, 200);
    filter_button = getByTestId('filter_button');
    filter_button.click()
    await fixture.detectChanges();
    await fixture.whenStable();
    expect(msg).toBeNull();
    let buttonLabels = fixture.debugElement.queryAll(By.css('.custom-margin'));
    expect( buttonLabels.length).toBe(2);
  });

  it('validation for reset button', async() => {
    await pushInputValue(min_price, 100);
    await pushInputValue(max_price, 200);
    // reset_button = getByTestId('filter_button');
    reset_button.click()
    await fixture.detectChanges();
    await fixture.whenStable();
    expect(msg).toBeNull();
    let buttonLabels = fixture.debugElement.queryAll(By.css('.custom-margin'));
    expect( buttonLabels.length).toBe(5);
  });
});
