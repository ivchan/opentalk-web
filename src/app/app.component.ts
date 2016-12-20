import {Component, Optional, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';
import './operators';
import {StompService} from "./shared/service/stomp.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StompService]
})
export class AppComponent implements OnInit{
  public inputField = '<enter some text>!';
  public serverResponse: string;

  isDarkTheme: boolean = false;
  lastDialogResult: string;

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
  }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar() {
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }
}


@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
