import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabprofilPage } from './tabprofil.page';

describe('TabprofilPage', () => {
  let component: TabprofilPage;
  let fixture: ComponentFixture<TabprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabprofilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
