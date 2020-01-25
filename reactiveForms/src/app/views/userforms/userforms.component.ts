import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.scss']
})
export class UserformsComponent implements OnInit {
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  get fName() { return this.userForm.get('fName'); }
  get lName() { return this.userForm.get('lName'); }
  get mName() { return this.userForm.get('mName'); }

  ngOnInit() {
    // this.userForm = new FormGroup({
    //   fName: new FormControl('', Validators.required),
    //   lName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   mName: new FormControl('', Validators.required),
    //   hasMiddleName: new FormControl(false)
    // });
    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.minLength(3)]],
      mName: ['', [Validators.required, Validators.minLength(1)]],
      hasMiddleName: false
    });

    this.userForm.get('hasMiddleName').valueChanges.subscribe(value => {
      if(value) { 
        this.mName.clearValidators();
      } else {
        this.mName.setValidators(Validators.required);
      }

      this.mName.updateValueAndValidity();
    });
  }
  setValue() {
    this.userForm.setValue({
      fName: 'kevin',
      lName: 'caballero',
      mName: 'r',
      hasMiddleName: true
    });
  }

  patchValue(){
    this.userForm.patchValue({
      fName: 'kevin'
    });
  }

  submitForm() {
    if(this.userForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      this.userForm.reset();
      console.log(this.userForm.value);
    }
  }

}
