import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Item } from '../domain/Item';
import { ItemsService } from '../services/ItemService/Items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showAllItems',
  templateUrl: './showAllItems.component.html',
  styleUrls: ['./showAllItems.component.css']
})
export class ShowAllItemsComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'poder']
  items :Item[] 
  dataSource : MatTableDataSource<Item>
  itemSelected:String

  constructor(private itemsService : ItemsService, private route:ActivatedRoute ){}

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator

  ngOnInit() {
    
    this.route.params.subscribe(routeParams => {
      this.itemSelected = null
      this.loadItems(routeParams.id)      
    })
  }
  async loadItems(id:String){
    const itemList = await this.itemsService.getItems(id)
    this.dataSource= new MatTableDataSource<Item>(itemList)
    this.dataSource.paginator = this.paginator;
  }
  selectItem(item:String){
    this.itemSelected=item
  }
}
