import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../servicios/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;
  userdata: any;

  erroresForm = { 'email': '', 'password': '' }

  constructor(private formBuilder: FormBuilder,
    private autService: AuthenticationService,
    private router: Router,
    private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      'email': ['', [
        Validators.required, Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });

    this.registroForm.valueChanges.subscribe(data =>
      this.onValueChanged(data));
    this.onValueChanged();
  }

  // tslint:disable-next-line:member-ordering
  mensajesValidacion = {
    'email': {
      'required': 'Email obligatorio',
      'email': 'Introduzca una dirección email correcta'
    },
    'password': {
      'required': 'Contraseña obligatoria',
      'pattern': 'La contraseña debe tener al menos una letra un número ',
      'minlength': 'y más de 6 caracteres'
    }
  }

  onValueChanged(data?: any) {
    if (!this.registroForm) { return; }
    const form = this.registroForm;
    // tslint:disable-next-line:forin
    for (const field in this.erroresForm) {
      this.erroresForm[field] = '';
      const control = form.get(field); if
        (control && control.dirty && !control.valid) {
        const messages = this.mensajesValidacion[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.userdata = this.saveUserdata();
    this.autService.registroUsuario(this.userdata);
    this.router.navigate(['']);
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.registroForm.get('email').value, password: this.registroForm.get('password').value,
    }; return saveUserdata;
  }
}
