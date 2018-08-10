import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { TranslateProvider } from '../providers';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'TabsPage';
  @ViewChild(Nav) nav: Nav;

  menuItems: any[] = [
    {
      name: '미완료 거래',
      page: 'IncompletePage',
      params: { type: 'all' }
    },
    {
      name: '계좌정보',
      page: 'MyAccoungPage',
      params: { type: 'titles-only' }
    },
    {
      name: '친구목록',
      page: 'FriendListPage',
      params: { type: 'icons-only' }
    },
    {
      name: '환경설정',
      page: 'SettingsPage',
      params: { type: 'all' }
    }
  ];

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar, 
    private splashScreen: SplashScreen,
    private translateService: TranslateService, 
    private translate: TranslateProvider,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
    this.initTranslate();
  }


  initTranslate() {
   
    // Set the default language for translation strings, and the current language.
    this.translateService.setDefaultLang('en');
    const browserLang = this.translateService.getBrowserLang();
    console.log(browserLang)
    this.translateService.use(browserLang);
    this.translateService.getTranslation(browserLang).subscribe(translations => {
      this.translate.setTranslations(translations);
     
      // this.rootPage = 'TabsPage';
    })
    

    // this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
    //   this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    // });
  }

   
  openPage(page) {
    console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    // this.nav.push(page.component);
    
    this.nav.push(page.page);

  }
}

