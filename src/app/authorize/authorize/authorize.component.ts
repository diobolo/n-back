import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(private auth: AuthorizeService) {
  }

  ngOnInit(): void {
  }

  async use() {
    let code = await this.auth.open({
      user: 'mock user',
    });
    console.log('授权结果：' + code);
    // alert('授权结果：' + code);
    if (!code) {
      return;
    }
  }
}
