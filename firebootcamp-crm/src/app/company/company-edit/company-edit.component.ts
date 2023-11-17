import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss',
})
export class CompanyEditComponent implements OnInit {
  companyId: number = 0;
  isNewCompany: boolean = false;
  companyForm!: UntypedFormGroup;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private companyService: CompanyService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.companyId = +this.activateRoute.snapshot.params['id'];
    this.isNewCompany = !this.companyId;

    this.buildForm();

    if (!this.isNewCompany) {
      //TODO: this.getCompany()
    }
  }

  buildForm(): void {
    this.companyForm = this.formBuilder.group({
      // longer way
      // name: this.formBuilder.control(''),
      // phone: this.formBuilder.control(''),
      // email: this.formBuilder.control('')
      name: ['', [Validators.required]],
      phone: [''],
      email: [''],
    });

    this.companyForm.valueChanges.subscribe((value) =>
      console.log('form changed', value)
    );
  }

  saveCompany() {
    const { valid, value } = this.companyForm;
    // const valid = this.companyForm.valid;
    // const value = this.companyForm.value;
    if (valid) {
      this.companyService
        .addCompany(value)
        .subscribe((_) => this.router.navigateByUrl('/company/list'));
    }
  }
}
