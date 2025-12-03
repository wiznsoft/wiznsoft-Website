import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Common } from '../service/common';

@Component({
  selector: 'app-career',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './career.html',
  styleUrl: './career.scss',
})
export class Career {
  careerForm!: FormGroup;
  submitted = false;
  file: any;
  fb = inject(FormBuilder);
  commonService = inject(Common);

  ngOnInit() {
    this.careerForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w+]+([\.-]?\w+)*\+?\d*@[\w-]+(\.\w+){1,2}$/i),
      ]),
      phone: new FormControl('', [Validators.required]),
      file: new FormControl('', [Validators.required]),
    });
  }

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.file = file;
  //     console.log('Selected file:', file);
  //   }
  // }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;
      this.careerForm.patchValue({ file: file });
      this.careerForm.get('file')?.updateValueAndValidity();
      console.log('Selected file:', file);
    }
  }

  applyForm() {
    this.submitted = true;

    if (this.careerForm.invalid) {
      return;
    }

    const formData = new FormData();

    formData.append('fullName', this.careerForm.value.fullName);
    formData.append('role', this.careerForm.value.role);
    formData.append('email', this.careerForm.value.email);
    formData.append('phone', this.careerForm.value.phone);
    formData.append('file', this.file);

    console.log(formData, 'aaaaa');

    // this.commonService.careerForm(formData).subscribe((res: any) => {
    //   console.log("res", res);
    // });
  }

  closeApplyForm() {
    this.careerForm.reset();
    this.submitted = false;
  }
}
