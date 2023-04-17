import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChatComponent } from './chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [],
  exports: [ChatComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ChatModule {}
