import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  selectedSet = 'set1';
  subject = '';
  question = '';
  options = ['', '', '', ''];
  answer = '';
  message = '';

  constructor(private examService: ExamService) {}

  updateSubject() {
    this.examService.setSubject(this.selectedSet, this.subject);
    this.message = 'Subject updated';
  }

  addQuestion() {
    if (this.question && this.options.every(o => o) && this.answer) {
      this.examService.addQuestion(this.selectedSet, {
        question: this.question,
        options: [...this.options],
        answer: this.answer
      });
      this.question = '';
      this.options = ['', '', '', ''];
      this.answer = '';
      this.message = 'Question added successfully';
    }
  }
}
