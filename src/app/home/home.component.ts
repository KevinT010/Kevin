import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public projects = [
    {
      title: 'Citygis service dashboard',
      description: 'Description for Citygis service dashboard.',
      image: 'assets/images/project1.jpg',
      link: 'https://example.com/project1'
    },
    {
      title: 'Opus Events',
      description: 'Description for project two.',
      image: 'assets/images/project2.jpg',
      link: 'https://example.com/project2'
    },
    {
      title: 'Portfolio Website',
      description: 'Description for project three.',
      image: 'assets/images/project3.jpg',
      link: 'https://example.com/project3'
    }
  ];

  constructor() { }

  public skills = [
    {
      icon: 'assets/images/angular.svg',
      skill: 'Angular',
      description: 'A powerful front-end framework for building dynamic web applications. With Angular, I created responsive and interactive user interfaces. Like a services dashboard and this portfolio website.',
      startDate: 'January 2023'

    },
    {
      icon: 'assets/images/typescript.svg',
      skill: 'TypeScript',
      description: 'A superset of JavaScript that adds static types.',
      startDate: 'February 2023'
    },
    {
      icon: 'assets/images/python.svg',
      skill: 'Python',
      description: 'A versatile programming language for web development, data analysis, and more.',
      startDate: 'March 2023'
    },
    {
      icon: 'assets/images/js.svg',
      skill: 'JavaScript',
      description: 'A dynamic programming language commonly used for web development.',
      startDate: 'April 2023'
    },
    {
      icon: 'assets/images/html.svg',
      skill: 'HTML5',
      description: 'The standard markup language for creating web pages.',
      startDate: 'May 2023'
    },
    {
      icon: 'assets/images/css.svg',
      skill: 'CSS3',
      description: 'A style sheet language used for describing the presentation of a document written in HTML.',
      startDate: 'June 2023'
    },
    {
      icon: 'assets/images/tailwind.svg',
      skill: 'Tailwind CSS',
      description: 'A utility-first CSS framework for creating custom designs.',
      startDate: 'July 2023'
    },
    {
      icon: 'assets/images/Bootstrap.svg',
      skill: 'Bootstrap',
      description: 'A popular CSS framework for building responsive and mobile-first websites.',
      startDate: 'August 2023'
    },
    {
      icon: 'assets/images/php.svg',
      skill: 'PHP',
      description: 'A server-side scripting language designed primarily for web development.',
      startDate: 'September 2023'
    },
    {
      icon: 'assets/images/laravel.svg',
      skill: 'Laravel',
      description: 'A PHP framework for building web applications.',
      startDate: 'October 2023'
    },
    {
      icon: 'assets/images/mysql.svg',
      skill: 'MySQL',
      description: 'A popular open-source relational database management system.',
      startDate: 'November 2023'
    },
    {
      icon: 'assets/images/csharp.svg',
      skill: 'C#',
      description: 'A modern, object-oriented programming language developed by Microsoft.',
      startDate: 'December 2023'
    },
    {
      icon: 'assets/images/dotnet.svg',
      skill: '.Net',
      description: 'A free, cross-platform, open-source developer platform for building many different types of applications.',
      startDate: 'January 2024'
    },
    {
      icon: 'assets/images/wordpress.svg',
      skill: 'WordPress',
      description: 'A content management system (CMS) for building websites and blogs.',
      startDate: 'February 2024'
    },
    {
      icon: 'assets/images/git.svg',
      skill: 'Git',
      description: 'A distributed version control system for tracking changes in source code.',
      startDate: 'March 2024'
    },
    {
      icon: 'assets/images/figma.svg',
      skill: 'Figma',
      description: 'A web-based UI/UX design application.',
      startDate: 'April 2024'
    },



  ];
  selectedSkill: any = null;

  selectSkill(skill: any) {
    this.selectedSkill = skill;
  }
  ngOnInit() {
  if (this.skills && this.skills.length > 0) {
    this.selectedSkill = this.skills[0]; 
  }
}





  getAge(): number {
    const birthDate = new Date(2002, 4, 2);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
