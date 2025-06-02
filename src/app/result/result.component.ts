import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score = 0;

  constructor(private examService: ExamService) {}

  ngOnInit() {
    this.score = this.examService.getScore();
  }
}
