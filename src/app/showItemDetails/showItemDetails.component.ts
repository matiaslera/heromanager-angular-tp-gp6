import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/ItemService/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showItemDetails',
  templateUrl: './showItemDetails.component.html',
  styleUrls: ['./showItemDetails.component.css']
})
export class ShowItemDetailsComponent implements OnInit {
  item:Observable<{}>
  paramId = this.route.snapshot.params.id
  constructor(private route: ActivatedRoute,private itemsService : ItemsService) { }

  async ngOnInit() {
    this.item = await this.itemsService.getItemDetail(this.paramId)
  }

}
