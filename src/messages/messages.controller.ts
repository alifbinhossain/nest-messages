import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list message';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return body;
  }

  @Get('/:id')
  getSingleMessage(@Param('id') id: string) {
    return id;
  }
}
