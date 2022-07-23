import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from './services/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  users: any;

  constructor(
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todoService.puxarUsers().subscribe( response => {
      this.users = response;
    })
  }

  navegarParaHome() {
    this.router.navigateByUrl('/home')
  }

  navegarParaHelp() {
    this.router.navigateByUrl('/help')
  }

  deletarItemDoArray(event:any) {
    console.log(event)
  }
}


