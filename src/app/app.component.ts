import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  emailAddress!: string;
  experience!: string;
  user!: { loggedInUser: string };

  constructor(
    public translate: TranslateService
  ) {
    // Register translation languages
    translate.addLangs(['en', 'es', 'fr', 'ar']);
    // Set default language
    translate.setDefaultLang('en');

    this.getTitleString();
  }

  ngOnInit(): void {
    this.user = { loggedInUser: 'John Steve' }; // Defining static value for demo
  }

  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }

  getTitleString() {
    // asynchronous - gets translations then completes.
    this.translate.get(['USER_INFO.EMAIL_ADDRESS', 'USER_INFO.RELEVANT_EXPERIENCE'])
      .subscribe(translations => {
        this.emailAddress = translations['USER_INFO.EMAIL_ADDRESS'];
        this.experience = translations['USER_INFO.RELEVANT_EXPERIENCE'];
      });
  }
}
