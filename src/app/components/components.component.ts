import { Component, OnInit, Renderer2 } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { LocaterService } from "app/service/locater.service";

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }
    `,
  ],
})
export class ComponentsComponent implements OnInit {
  email: string;
  address: string;
  page = 4;
  page1 = 5;
  focus;
  focus1;
  focus2;
  date: { year: number; month: number };
  model: NgbDateStruct;
  constructor(
    private renderer: Renderer2,
    private setLocater: LocaterService
  ) {}
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }
  data: {
    placeId: number;
    osm_id: number;
    placeRank: number;
    boundingBox: number[];
    importance: number;
    longitude: number;
    latitude: number;
    type: string;
    displayName: string;
    omsType: string;
    name: string;
    addressType: string;
    addressClass: string;
  } = null;
  ngOnInit() {}

  searchLocation() {
    if (this.address)
      this.setLocater.getLocation(this.address).subscribe((data) => {
        this.data = data;
      });
    else alert("address is required");
  }
  sendToEmail() {
    if (this.data) {
      if (this.email)
        this.setLocater
          .sendEmail({
            email: this.email,
            location: this.data,
          })
          .subscribe((data) => {
            alert("the email is sent ");
          });
      else alert("email is required");
    } else alert("there  is no address data to send ");
  }
}
