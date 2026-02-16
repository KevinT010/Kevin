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
      image: 'assets/images/citygis.png',
      link: 'https://example.com/project1'
    },
    {
      title: 'Opus Events',
      description: 'Description for project two.',
      image: 'assets/images/opus.png',
      link: 'https://example.com/project2'
    },
    {
      title: 'Portfolio Website',
      description: 'Description for project three.',
      image: 'assets/images/project3.jpg',
      link: 'https://example.com/project3'
    }
  ];

  
  currentTab: string = 'language'; 
  

  get currentTitle(): string {
    return this.currentTab.charAt(0) + this.currentTab.slice(1) + 's';
  }

  selectedSkill: any = null;

  // 2. Updated Data with 3 Categories
  public skills = [
    // --- LANGUAGES (Core Syntax) ---
    {
      type: 'language',
      icon: 'assets/images/csharp.svg',
      skill: 'C#',
      description: 'A modern, object-oriented programming language developed by Microsoft.',
    },
    {
      type: 'language',
      icon: 'assets/images/js.svg',
      skill: 'JavaScript',
      description: 'A dynamic programming language commonly used for web development.',
    },
    {
      type: 'language',
      icon: 'assets/images/typescript.svg',
      skill: 'TypeScript',
      description: 'A superset of JavaScript that adds static types.',
    },
    {
      type: 'language',
      icon: 'assets/images/python.svg',
      skill: 'Python',
      description: 'A versatile programming language for web development, data analysis, and more.',
    },
    {
      type: 'language',
      icon: 'assets/images/php.svg',
      skill: 'PHP',
      description: 'A server-side scripting language designed primarily for web development.',
    },
    {
      type: 'language',
      icon: 'assets/images/css.svg',
      skill: 'CSS3',
      description: 'Style sheet language used for describing the presentation of a document.',
    },
    {
      type: 'language',
      icon: 'assets/images/html.svg',
      skill: 'HTML5',
      description: 'The standard markup language for creating web pages.',
    },
    {
      type: 'language',
      icon: 'assets/images/mysql.svg',
      skill: 'MySQL',
      description: 'A popular open-source relational database management system.',
    },

    // --- FRAMEWORKS (Libraries & Platforms) ---
    {
      type: 'framework',
      icon: 'assets/images/angular.svg',
      skill: 'Angular',
      description: 'A powerful front-end framework for building dynamic web applications.',
    },
    {
      type: 'framework',
      icon: 'assets/images/Bootstrap.svg',
      skill: 'Bootstrap',
      description: 'A popular CSS framework for building responsive and mobile-first websites.',
    },
    {
      type: 'framework',
      icon: 'assets/images/dotnet.svg',
      skill: '.Net',
      description: 'A developer platform for building many different types of applications.',
    },
    {
      type: 'framework',
      icon: 'assets/images/laravel.svg',
      skill: 'Laravel',
      description: 'A PHP framework for building web applications.',
    },
    {
      type: 'framework',
      icon: 'assets/images/tailwind.svg',
      skill: 'Tailwind CSS',
      description: 'A utility-first CSS framework for creating custom designs.',
    },

    // --- TOOLS (Software & Utilities) ---
    {
      type: 'tool',
      icon: 'assets/images/figma.svg',
      skill: 'Figma',
      description: 'A web-based UI/UX design application.',
    },
    {
      type: 'tool',
      icon: 'assets/images/git.svg',
      skill: 'Git',
      description: 'A distributed version control system for tracking changes in source code.',
    },
    {
      type: 'tool',
      icon: 'assets/images/wordpress.svg',
      skill: 'WordPress',
      description: 'A content management system (CMS) for building websites and blogs.',
    },
    {
      type: 'tool',
      icon: 'assets/images/github.svg',
      skill: 'GitHub',
      description: 'A platform for version control and collaboration on software projects.',
    },
    {
      type: 'tool',
      icon: 'assets/images/vscode.svg',
      skill: 'VSCode',
      description: 'A lightweight, powerful code editor by Microsoft.',
    },
    {
      type: 'tool',
      icon: 'assets/images/trello.svg',
      skill: 'Trello',
      description: 'A project management tool for organizing tasks and workflows.',
    },
    {
      type: 'tool',
      icon: 'assets/images/raspberrypi.svg',
      skill: 'Raspberry Pi',
      description: 'A small single-board computer for various computing projects.',
    }
  ];

  // 3. Filter Logic
  get filteredItems() {
    return this.skills.filter(item => item.type === this.currentTab);
  }

  ngOnInit() {
    this.selectFirstAvailable();
  }

  setTab(tab: string) {
    this.currentTab = tab;
    this.selectFirstAvailable();
  }

  selectFirstAvailable() {
    const items = this.filteredItems;
    if (items.length > 0) {
      this.selectedSkill = items[0];
    }
  }

  selectSkill(skill: any) {
    this.selectedSkill = skill;
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
