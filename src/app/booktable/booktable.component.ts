import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogContent, MatDialog} from '@angular/material/dialog';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {

  collections:any;
  @ViewChild('searchId') searchid:ElementRef;
  constructor(
    private dataService: DataService,
    private dialog:MatDialog
  ) { }

  ngOnInit(){

    this.dataService.fetchCuisines('290').subscribe(resData => {
      console.log(resData);
      this.collections = resData['collections']; 
    })
  }

  onSearch(e){
    if(e.keyCode === 13){
      console.log(this.searchid.nativeElement.value);
      const id = this.searchid.nativeElement.value;
      this.dataService.fetchCuisines(id).subscribe(resData => {
        console.log(resData);
        this.collections = resData['collections']; 
      })
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(BooktableDialogComponent);
  }

}

@Component({
  selector:'app-booktable-dialog',
  templateUrl:'./booktabledialog.component.html'
})
export class BooktableDialogComponent {

}