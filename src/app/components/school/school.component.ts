import { Component, OnInit } from '@angular/core';
import { SchoolMobilityService } from 'src/app/services/school-mobility.service';
import { School } from 'src/generated/graphql';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  title = 'kangouroute';
  public schools: School[];
  public selectedSchool: School;

  constructor(private schoolMobilityService : SchoolMobilityService) { }

  ngOnInit(): void {
  }

  reloadSchools(nameSubstr: String): void {
    this.schoolMobilityService.findSchools(nameSubstr).subscribe(schoolDataObj => {
      this.schools = schoolDataObj.data.schools;
      console.log("new schools list : " + JSON.stringify(this.schools));
      this.selectSchool();
    }, err => {
      console.log("err> " + JSON.stringify(err))
    }, () => {
      console.log("done");
    });
  }

  public search(e: any): void {
    let name = e.target.value;
    console.log("searchin : " + name);
    this.reloadSchools(name);
  }

  public selectSchool(): void {
    if (this.schools.length === 1)
    {
      this.selectedSchool = this.schools[0]
      console.log("selected" + JSON.stringify(this.selectedSchool));
    }
    else
    {
      this.selectedSchool = null;
      console.log("did not made selection");
    }
  }

}
