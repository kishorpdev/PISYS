import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class InternshipApiService {
  authToken: any;
  constructor(private http: Http) { }

  loadToken(){
    this.authToken = localStorage.getItem('authToken');
  }

  getIntnshipDetails(id:string){
    this.loadToken();
    let data = {internshipId : id}
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/info', data, {headers: headers}).map(res => res.json());
  }

  getInternships(year){
    this.loadToken();
    let headers = new Headers;
    let data = {year: year};
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/yearInternships', data, {headers: headers}).map(res => res.json());
  }

  getDashboardInternships(){
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.get('internship/dashboardInternships', {headers: headers}).map(res => res.json());
  }

  createInternship(newIntnshp){
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/initInternship', newIntnshp, {headers: headers}).map(res => res.json());
  }

  updateBasicInfo(intnshpData){
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/upsertBasicInfo', intnshpData, {headers: headers}).map(res => res.json());
  }

  loadWeeklyReports(intnshpId:string){
    this.loadToken();
    let data = { intnshpId: intnshpId };
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/getWeeklyReports', data, {headers: headers}).map(res => res.json());
  }

  upsertWeeklyReport(internshipId, formData){
    this.loadToken();
    let headers = new Headers;
    headers.append('x-access-token', this.authToken);
    headers.append('internship-id', internshipId);
    return this.http.post('internship/updateCandidateWeeklyReport', formData, {headers: headers}).map(res => res.json());
  }

  upsertComment(intnshpId, wReptIndex, data){
    data['intnshpId'] = intnshpId;
    data['wReptIndex'] = wReptIndex;
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/updateWeeklyReportComment', data, {headers: headers}).map(res => res.json());
  }

  deleteComment(intnshpId, wReptIndex, cmtIndex){
    let data = {intnshpId: intnshpId, wReptIndex: wReptIndex, cmtIndex: cmtIndex}; 
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/deleteComment', data, {headers: headers}).map(res => res.json());
  }

  loadSuicaDetails(intnshpId){
    let data = {intnshpId: intnshpId};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/getSuicaDetails', data, {headers: headers}).map(res => res.json());
  }

  upsertSuicaDetails(intnshpId, suica){
    let data = {intnshpId: intnshpId, suica: suica};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/updateSuicaDetails', data, {headers: headers}).map(res => res.json());
  }

  loadWiFiDetails(intnshpId){
    let data = {intnshpId: intnshpId};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/getWifiDetails', data, {headers: headers}).map(res => res.json());
  }

  upsertWiFiDetails(intnshpId, wifi){
    let data = {intnshpId: intnshpId, wifi: wifi};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/updateWIfiDetails', data, {headers: headers}).map(res => res.json());
  }

  loadStipends(intnshpId){
    let data = {intnshpId: intnshpId};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/getPayments', data, {headers: headers}).map(res => res.json());
  }

  upsertStipend(intnshpId, payment){
    let data = {intnshpId: intnshpId, payment: payment};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/updatePayment', data, {headers: headers}).map(res => res.json());
  }

  deleteStipend(intnshpId, stipendIndex){
    let data = {intnshpId: intnshpId, stipendIndex: stipendIndex};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/deletePayment', data, {headers: headers}).map(res => res.json());
  }

  markStipendAcptd(intnshpId, stipendIndex){
    let data = {intnshpId: intnshpId, stipendIndex: stipendIndex};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/markPaymentAccepted', data, {headers: headers}).map(res => res.json());
  }

  loadAccommodationDetails(intnshpId){
    let data = {intnshpId: intnshpId}
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/getAccommodationDetails', data, {headers: headers}).map(res => res.json());
  }

  upsertAccommodationDetails(intnshpId, accommodation){
    let data = {intnshpId: intnshpId, accommodation: accommodation};
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.post('internship/updateAccommodationDetails', data, {headers: headers}).map(res => res.json());
  }

  isWLMember(){
    this.loadToken();
    let headers = new Headers;
    headers.append('Content-Type', "application/json");
    headers.append('x-access-token', this.authToken);
    return this.http.get('user/isWLMember', {headers: headers}).map(res => res.json());
  }
}
//http://localhost:3000/ for local testing