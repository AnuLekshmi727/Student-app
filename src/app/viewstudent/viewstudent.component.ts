import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"name":"Rahul","age":27, "photo":"https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"},
    {"name":"Anu","age":19, "photo":"https://media.istockphoto.com/photos/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-picture-id1206439390?k=20&m=1206439390&s=170667a&w=0&h=wDX4xov95UOzjOgOkTqRurDiTepjhqAA7Q2iFofrO5c="},
    {"name":"Alex","age":30 ,"photo":"https://i.pinimg.com/originals/08/3a/68/083a68071698506a2e71a55a638514a0.jpg"},
    {"name":"Sam","age":24 , "photo":"https://i.pinimg.com/originals/bc/af/18/bcaf18ce6054768da1628a939e2b4f65.jpg"},
    {"name":"Ishaan","age":22, "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CS6_0YToOfgpDfifFXhvqg9fV1UG3FNJcMtn7rRBc72tr18c3lvoDuPlUf36_Uz4l58&usqp=CAU"}  ,
    {"name":"Eric","age":12, "photo":"https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8dDJpdzViRy1Tcmd8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"}  ,
    {"name":"Harry","age":28, "photo":"https://pbs.twimg.com/media/EpCUHOCXMAIDYXh.jpg"},  
    {"name":"Louis","age":30, "photo":"https://pbs.twimg.com/media/E7UKiuHWYAEMFaT.jpg"}  
  ]
}
