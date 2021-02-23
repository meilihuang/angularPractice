import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  //Initialization
  board = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  player1: boolean = true;
  row = 0;
  column = 0;

  //Function 
  Process() {
    //Player 1 
    if (this.player1) {
      //check whether the coordinate is already filled in or not
      if (this.board[this.row][this.column] == "*") {
        this.board[this.row][this.column] = "0";
        this.player1 = false;
      } else {
        alert("It's already taken!");
      }
    } 
    //Player 2
    else {
       //check whether the coordinate is already filled in or not
      if (this.board[this.row][this.column] == "*") {
        this.board[this.row][this.column] = "1";
        this.player1 = true;
      } else {
        alert("It's already taken!");
      }
    }
    
    for (let i = 0; i < 5; i++) {
      //check vertical Player 1
      if (
        this.board[i][0] == "0" &&
        this.board[i][1] == "0" &&
        this.board[i][2] == "0" &&
        this.board[i][3] == "0" &&
        this.board[i][4] == "0"
      ) {
        alert("PLAYER 1 WINS!");
      }
      //check vertical Player 2
      if (
        this.board[i][0] == "1" &&
        this.board[i][1] == "1" &&
        this.board[i][2] == "1" &&
        this.board[i][3] == "1" &&
        this.board[i][4] == "1"
      ) {
        alert("PLAYER 2 WINS!");
      }
      //check horizontal Player 1
      if (
        this.board[0][i] == "0" &&
        this.board[1][i] == "0" &&
        this.board[2][i] == "0" &&
        this.board[3][i] == "0" &&
        this.board[4][i] == "0"
      ) {
        alert("PLAYER 1 WINS!");
      }
      //check horizontal Player 2
      if (
        this.board[0][i] == "1" &&
        this.board[1][i] == "1" &&
        this.board[2][i] == "1" &&
        this.board[3][i] == "1" &&
        this.board[4][i] == "1"
      ) {
        alert("PLAYER 2 WINS!");
      }
    }
  }
}
