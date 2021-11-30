import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios'
import { map } from 'rxjs/operators';

@Injectable()
export class TriviaService {
    
    constructor(private httpService: HttpService) {}
    
    getQuestionsWithParameters(amount: number, category: number, difficulty: string) : Observable<AxiosResponse> {
        return this.httpService.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`, {
            headers: {
                'Accept': 'application/json'
            }
        }).pipe(
            map(response => response.data),
        );
    }
}
