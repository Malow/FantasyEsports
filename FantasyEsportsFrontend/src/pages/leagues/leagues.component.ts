import { Component } from '@angular/core';

@Component({
  selector: 'leagues-page',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent {

  getLeagues() {
    return [
      {
        icon: '/assets/images/game-icons/starcraft.png',
        name: 'ESL One Katowice 2018',
        period: '2018-02-13 - 2018-06-30',
        owner: 'MaloW'
      }, {
        icon: '/assets/images/game-icons/starcraft.png',
        name: 'ESL One Katowice 2018',
        period: '2018-02-13 - 2018-06-30',
        owner: 'MaloW'
      }, {
        icon: '/assets/images/game-icons/starcraft.png',
        name: 'ESL One Katowice 2018',
        period: '2018-02-13 - 2018-06-30',
        owner: 'MaloW'
      }, {
        icon: '/assets/images/game-icons/starcraft.png',
        name: 'ESL One Katowice 2018',
        period: '2018-02-13 - 2018-06-30',
        owner: 'MaloW'
      }, {
        icon: '/assets/images/game-icons/starcraft.png',
        name: 'ESL One Katowice 2018',
        period: '2018-02-13 - 2018-06-30',
        owner: 'MaloW'
      }
    ]
  }
}
