import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { Contacts, RecentUsers, UserData } from '../../@core/data/users';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent {
  constructor() {}
}
