import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocaterService {
  private getLocationUrl = "http://192.168.43.117:9000/search";
  private endEmailUrl = "http://192.168.43.117:9000/send";
  constructor(private http: HttpClient) {}
  getLocation(address: string) {
    return this.http.get<{
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
    }>(this.getLocationUrl, {
      headers: {
        // contentType: "application/json",
      },
      params: { query: address },
    });
  }
  sendEmail(data) {
    return this.http.post(this.endEmailUrl, data);
  }
}
