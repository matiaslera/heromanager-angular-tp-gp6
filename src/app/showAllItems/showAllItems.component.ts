import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Item } from '../domain/Item';
import { ItemsService } from '../services/ItemService/items.service';

@Component({
  selector: 'app-showAllItems',
  templateUrl: './showAllItems.component.html',
  styleUrls: ['./showAllItems.component.css']
})
export class ShowAllItemsComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'poder']
  items :Item[] 
  dataSource : MatTableDataSource<Item>

  constructor(private itemsService : ItemsService){}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator

  async ngOnInit() {
    const itemList = await this.itemsService.getItems()
    this.dataSource= new MatTableDataSource<Item>(itemList)
    this.dataSource.paginator = this.paginator;
  }
}
