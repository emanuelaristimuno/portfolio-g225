import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/Experience'


@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: Experience[] = []
  constructor() { }
  ngOnInit(): void {
    let exper1 = new Experience(1,"Futbolista", "Patronato", 12 )
    this.experiences.push(exper1)
    this.experiences.push(new Experience(2,"Developer", "Securita", 55 ))
    this.experiences.push(new Experience(3, "Docente", "Argentina Programa 2022", 22 ))
  }

}
