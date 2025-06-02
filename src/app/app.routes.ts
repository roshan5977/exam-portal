import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExamComponent } from './exam/exam.component';
import { ResultComponent } from './result/result.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'result', component: ResultComponent },
  { path: 'admin', component: AdminComponent }

];
