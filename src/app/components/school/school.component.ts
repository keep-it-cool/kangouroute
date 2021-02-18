import { ReturnStatement } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SchoolMobilityService } from 'src/app/services/school-mobility.service';
import { School } from 'src/generated/graphql';

import { Subscription } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit, OnDestroy {

  title = 'kangouroute';
  schools : School[];
  selectedSchool: School;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private service: SchoolMobilityService) { 
  }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: gql`
      query getSchools{
        schools(first: 500){
          id
          name
          latitude
          longitude
        }
      }
    `
    })
      .valueChanges
      .subscribe(({ data }) => {
        let s = data.schools;

        this.schools= s.filter((thing, index, self) =>
          index === self.findIndex((t) => (
            t.name === thing.name
          ))
)
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }


  public selectSchool(event): void {
    console.log(event);
    this.selectedSchool = this.schools.find(s => s.name == event.target.value);
  }

}
