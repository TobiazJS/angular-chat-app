import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { io, Socket } from 'socket.io-client';

type Message = {
  user: string;
  message: string;
};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: [],
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  message: Message = { user: '', message: '' };
  send: string = '';
  socket?: Socket;
  user: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const key = this.route.snapshot.queryParamMap.get('user');
    this.route.queryParams.subscribe((params) => {
      const key = params['user'];
      this.user = key;
    });
    // Create a new instance of Socket.io
    this.socket = io('http://localhost:3000');
    // Listen for 'chat message' event
    this.socket.on('chat message', (message: Message) => {
      this.messages.push({ user: message.user, message: message.message });
    });
  }

  sendMessage(): void {
    // Send 'chat message' event to server
    this.socket!.emit('chat message', {
      user: this.user,
      message: this.send,
    });
    // // Clear the input field
    this.message = { user: this.user, message: '' };
  }
}
