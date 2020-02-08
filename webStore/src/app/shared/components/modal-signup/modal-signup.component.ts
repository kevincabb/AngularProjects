import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-modal-signup',
  templateUrl: './modal-signup.component.html',
  styleUrls: ['./modal-signup.component.scss']
})
export class ModalSignupComponent implements OnInit {
  userForm: FormGroup;
  closeResult: string;
  constructor(private modalService: NgbModal, private formBuilder: FormBuilder, private user: AccountService) { 
    user.setUserList();
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]],
      cPassword: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  signUp(fName: string, lName: string, email: string, password: string, cPassword: string){
    if(password === cPassword){
      if(this.user.userExists(email)){
        alert('User already Exists');
      } else {
        this.user.addUser(fName, lName, email, password, cPassword);
      }
    }
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
