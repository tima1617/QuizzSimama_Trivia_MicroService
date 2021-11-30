import { TriviaService } from './trivia.service';
import { Controller, Get, Param } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('trivia')
export class TriviaController {
  constructor(private triviaService: TriviaService) { } 

  @Get('/:amount/:category/:difficulty')
  getNextLaunchRemainingTime(@Param('amount') amount: number,@Param('category') category: number,@Param('difficulty') difficulty: string): Observable<any> {
    return this.triviaService.getQuestionsWithParameters(amount,category,difficulty);
    }
  }