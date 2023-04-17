import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { io } from 'socket.io-client';
import { ChatComponent } from './chat.component';
import { ChatModule } from './chat.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChatModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
