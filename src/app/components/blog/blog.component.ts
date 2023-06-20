import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles=[
    {date:"May 20, 2020", description: "ppppppp", title:"Title 1", img:"assets/images/img_1.jpg" },
    {date:"Juin 20, 2020", description: "ppppppp", title:"Title 2", img:"assets/images/img_2.jpg" },
    {date:"Juily 20, 2020", description: "ppppppp", title:"Title 3", img:"assets/images/img_3.jpg" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
