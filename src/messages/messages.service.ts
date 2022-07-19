import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  //   messagesRepo: MessagesRepository;
  //   constructor(messagesRepo: MessagesRepository) {
  //     // Service is creating its own dependencies
  //     // not good DON'T USE IT
  //     // USE DEPENDENCY INJECTION
  //     this.messagesRepo = messagesRepo;
  //   }
  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
