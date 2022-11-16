import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>('Moby Dick', {
        validators: [Validators.required, Validators.minLength(3)],
      }),
    });

    this.form.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap((status) => console.log(status))
      )
      .subscribe();

    this.form
      .get('title')
      ?.valueChanges.pipe(
        debounceTime(300),
        tap((value) => console.log(value))
      )
      .subscribe();
  }

  saveBook(value: unknown): void {
    // effect
    console.log(value);
  }
}
