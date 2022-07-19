import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  //   messagesService: MessagesService;
  //   constructor(messagesService: MessagesService) {
  //     // Service is creating its own dependencies
  //     // not good DON'T USE IT
  //     this.messagesService = messagesService;
  //   }
  constructor(public messagesService: MessagesService) {}

  @Get() // GET http://localhost:3000/messages
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post() // POST http://localhost:3000/messages
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id') // GET http://localhost:3000/messages/:id // @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
