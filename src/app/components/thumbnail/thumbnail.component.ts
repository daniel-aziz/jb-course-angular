import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input() imageSource: string = ""

  @Output()
  public imageClicked = new EventEmitter<string>()

  onImageClick():void {
    // Raising an event
    this.imageClicked.emit(this.imageSource)
  }

}
