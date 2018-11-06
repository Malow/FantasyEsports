import { Component } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  getNews() {
    return [
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Proin et mattis tortor. Vestibulum ex leo, venenatis eu dictum in, iaculis vel est. Morbi at tortor ultricies, semper dui eget, pretium metus. Nullam mattis est non felis imperdiet, a placerat nunc molestie. Morbi urna justo, euismod nec porttitor vitae, viverra in erat. Curabitur purus arcu, vulputate ut sapien et, placerat porta mauris. In urna nisl, mattis in enim eu, imperdiet venenatis nunc. Praesent tempor sagittis enim ut eleifend.',
        icon: '/assets/images/game-icons/starcraft.png'
      },{
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Proin et mattis tortor. Vestibulum ex leo, venenatis eu dictum in, iaculis vel est. Morbi at tortor ultricies, semper dui eget, pretium metus. Nullam mattis est non felis imperdiet, a placerat nunc molestie. Morbi urna justo, euismod nec porttitor vitae, viverra in erat. Curabitur purus arcu, vulputate ut sapien et, placerat porta mauris. In urna nisl, mattis in enim eu, imperdiet venenatis nunc. Praesent tempor sagittis enim ut eleifend.',
        icon: '/assets/images/game-icons/starcraft.png'
      },{
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Proin et mattis tortor. Vestibulum ex leo, venenatis eu dictum in, iaculis vel est. Morbi at tortor ultricies, semper dui eget, pretium metus. Nullam mattis est non felis imperdiet, a placerat nunc molestie. Morbi urna justo, euismod nec porttitor vitae, viverra in erat. Curabitur purus arcu, vulputate ut sapien et, placerat porta mauris. In urna nisl, mattis in enim eu, imperdiet venenatis nunc. Praesent tempor sagittis enim ut eleifend.',
        icon: '/assets/images/game-icons/starcraft.png'
      },{
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Proin et mattis tortor. Vestibulum ex leo, venenatis eu dictum in, iaculis vel est. Morbi at tortor ultricies, semper dui eget, pretium metus. Nullam mattis est non felis imperdiet, a placerat nunc molestie. Morbi urna justo, euismod nec porttitor vitae, viverra in erat. Curabitur purus arcu, vulputate ut sapien et, placerat porta mauris. In urna nisl, mattis in enim eu, imperdiet venenatis nunc. Praesent tempor sagittis enim ut eleifend.',
        icon: '/assets/images/game-icons/starcraft.png'
      },{
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: 'Proin et mattis tortor. Vestibulum ex leo, venenatis eu dictum in, iaculis vel est. Morbi at tortor ultricies, semper dui eget, pretium metus. Nullam mattis est non felis imperdiet, a placerat nunc molestie. Morbi urna justo, euismod nec porttitor vitae, viverra in erat. Curabitur purus arcu, vulputate ut sapien et, placerat porta mauris. In urna nisl, mattis in enim eu, imperdiet venenatis nunc. Praesent tempor sagittis enim ut eleifend.',
        icon: '/assets/images/game-icons/starcraft.png'
      }
    ];
  }
}
