import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentDiscount: number = 10;
  public currentDate: Date = new Date(); 
  @Input() public imageWidth : number = 250;
  private STEP:number = 25;
  public isWinter: boolean = false;
  public fruits: string[] = ['Bananas', 'Oranges', 'Apples', 'Grapes']

  constructor(private title:Title) { 
    
  }

  ngOnInit(): void {
    this.title.setTitle('Product Home')
    this.currentDiscount = 15;  
    const month = this.currentDate.getMonth() + 1;
    this.isWinter = month >= 11 || month <=3
  }

  increaseWidth() {
    if (this.imageWidth < 750) {
      this.imageWidth =  this.imageWidth + this.STEP
    }
  
  }

  deacreseWidth() {
    if (this.imageWidth > 100) {
      this.imageWidth =  this.imageWidth - this.STEP
    }
  }

}
