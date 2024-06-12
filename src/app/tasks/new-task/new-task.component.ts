import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string
  @Output() close = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()

  private tasksService = inject(TasksService)

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';  
  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title:this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    },
    this.userId
  )
    this.close.emit()
  }
} 
