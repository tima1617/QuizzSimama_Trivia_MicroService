import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviaController } from './Trivia/trivia.controller';
import { TriviaService } from './Trivia/trivia.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, TriviaController],
  providers: [AppService, TriviaService],
})
export class AppModule {}
