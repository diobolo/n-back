import { Component } from '@angular/core';
import { AuthorizeService } from './authorize/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'n-back';
  constructor(private auth: AuthorizeService) {}
  async use() {
    let res = await this.auth.open();
    console.log(res);
  }
}
