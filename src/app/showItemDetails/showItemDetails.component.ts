import { Component, Input, OnChanges } from '@angular/core';
import { ItemsService } from '../services/ItemService/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showItemDetails',
  templateUrl: './showItemDetails.component.html',
  styleUrls: ['./showItemDetails.component.css']
})
export class ShowItemDetailsComponent implements OnChanges {
  itemDetailed: Observable<{}>
  @Input() itemId: String

  constructor(private itemsService: ItemsService) { }

  ngOnChanges(): void {
    this.loadItem()
  }
  async loadItem() {
    this.itemDetailed = await this.itemsService.getItemDetails(this.itemId)
  }
}
