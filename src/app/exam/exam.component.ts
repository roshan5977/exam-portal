import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exam',
  imports: [CommonModule, FormsModule],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  sets = ['set1', 'set2', 'set3', 'set4', 'set5'];
  selectedSet = '';
  subject = '';
  questions: any[] = [];
  selectedAnswers: string[] = [];
  timeLeft = 900; // 5 minutes
  interval: any;
  examStarted = false;

  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit() {}

  startExam() {
    if (!this.selectedSet) return;

    this.examService.setSelectedSet(this.selectedSet);
    this.questions = this.examService.getQuestions();
    this.subject = this.examService.sets[this.selectedSet].subject;
    this.selectedAnswers = Array(this.questions.length).fill('');
    this.examStarted = true;
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.submit();
      }
    }, 1000);
  }

  submit() {
    clearInterval(this.interval);
    this.examService.setAnswers(this.selectedAnswers);
    this.router.navigate(['/result']);
  }
}

