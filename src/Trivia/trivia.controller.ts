import { TriviaService } from './trivia.service';
import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('trivia')
export class TriviaController {

  constructor(private triviaService: TriviaService) { }

  @Get()
  getNextLaunchRemainingTime(): Observable<any> {
    return this.triviaService.getQuestionsWithParameters();
  }
}
