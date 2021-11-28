import { TriviaService } from './trivia.service';
import { Controller, Get } from '@nestjs/common';

@Controller('trivia')
export class TriviaController {
    constructor(private triviaService: TriviaService) {}
  
    @Get('next-launch')
    getNextLaunchRemainingTime() {
      return this.triviaService.getQuestionsWithParameters();
    }
  }
