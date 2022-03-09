const { Story } = require('../models');

const storydata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#090446',
    title_color: '#786F52',
    font_size: 15,
    font: 'IM Fell English SC',
    border_width: 100,
    border_color: '#FEB95F',
    user_id: 1,
  },
  {
    title: 'Donec posuere metus',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#F71735',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Homemade Apple',
    border_width: 50,
    border_color: '#FEB95F',
    user_id: 2,
  },
  {
    title:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#FFA552',
    title_color: '#381D2A',
    font_size: 100,
    font: 'Barrio',
    border_width: 90,
    border_color: '#FCDE9C',
    user_id: 3,
  },
  {
    title: 'Nunc purus.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: 90,
    font: 'UnifrakturCook',
    border_width: 50,
    border_color: '#04A777',
    user_id: 4,
  },
  {
    title: 'Pellentesque eget nunc.',
    body: ` Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#C4D6B0',
    title_color: '#BA5624',
    font_size: 78,
    font: 'Barrio',
    border_width: 5,
    border_color: '#FCDE9C',
    user_id: 5,
  },
  {
    title: 'Lorem ipsum dolor',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#32965D',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Turret Road',
    border_width: 5,
    border_color: '#BCA371',
    user_id: 6,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#D7FDEC',
    title_color: '#938BA1',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#B2E4DB',
    user_id: 7,
  },
  {
    title: 'Morbi',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#3C0919',
    title_color: '#ffffff',
    font_size: 100,
    font: 'Codystar',
    border_width: 5,
    border_color: '#7D1128',
    user_id: 8,
  },
  {
    title: 'Duis ac nibh.',
    body: ` Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
    Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
    Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: 15,
    font: 'UnifrakturCook',
    border_width: 5,
    border_color: '#424044',
    user_id: 9,
  },
  {
    title: 'Curabitur at',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#FF958C',
    title_color: '#441151',
    font_size: 70,
    font: 'Barrio',
    border_width: 5,
    border_color: '#EE85B5',
    user_id: 10,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: ` Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
    Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
    Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: 15,
    font: 'UnifrakturCook',
    border_width: 5,
    border_color: '#424044',
    user_id: 10,
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: 15,
    font: 'UnifrakturCook',
    border_width: 5,
    border_color: '#424044',
    user_id: 8,
  },
  {
    title: 'Donec dapibus.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#1B181D',
    user_id: 7,
  },
  {
    title: 'Nulla tellus.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: 15,
    font: 'UnifrakturCook',
    border_width: 5,
    border_color: '#424044',
    user_id: 6,
  },
  {
    title:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    body: 'Pellentesque tempor et ex in sodales. Donec varius malesuada arcu et pretium. Duis iaculis eu ipsum sed eleifend. Cras dictum velit accumsan quam sagittis, eu tincidunt lorem molestie. ',
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#1B181D',
    user_id: 5,
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    body: ` Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#238514',
    title_color: '#ffffff',
    font_size: 15,
    font: 'UnifrakturCook',
    border_width: 5,
    border_color: '#424044',
    user_id: 4,
  },
  {
    title: 'In hac habitasse platea dictumst.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#1B181D',
    user_id: 3,
  },
  {
    title: 'Etiam justo.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Aliquam ac enim aliquam, finibus dui ac, varius ligula. Cras hendrerit sapien vitae euismod tristique. Ut viverra ullamcorper turpis eget mattis. Ut finibus leo sed auctor varius. In hac habitasse platea dictumst. Nunc tempus magna vel ex consectetur finibus. Nulla commodo ultricies dui ut tempus. Morbi tincidunt, purus eu elementum dapibus, ante metus pellentesque dolor, a cursus est elit eu enim. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#1B181D',
    user_id: 2,
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    body: ` Praesent non feugiat turpis, vitae accumsan est. Vestibulum posuere magna sed eros blandit cursus. Quisque diam ipsum, finibus eget orci sit amet, sollicitudin lobortis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at vestibulum sapien. Nullam pulvinar luctus tortor. Maecenas convallis orci a libero vehicula, vel elementum nulla molestie. Sed nec eros ac libero dignissim vulputate. Donec tincidunt, risus ut ultricies efficitur, elit ipsum lacinia est, vel vehicula massa nisl nec lacus. Pellentesque semper vulputate pulvinar. Morbi eu pretium ante. Vivamus dignissim nisl dui. 
            Nullam justo metus, blandit ac elit eget, condimentum pulvinar eros. Vestibulum in sapien ut nulla hendrerit cursus. Vivamus laoreet, erat sed congue blandit, est dui viverra libero, ac consequat odio sem eget leo. Vivamus eu porta tortor. Integer in diam lorem. Cras vitae ornare elit. Curabitur cursus ullamcorper dolor, in varius nibh ullamcorper ac. Sed eu semper lacus. Pellentesque gravida dictum porta. Ut pharetra tortor mauris, id venenatis massa ultrices ac. In consectetur elit arcu, ut suscipit magna lacinia vel. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    user_id: '1',
    cover_color: '#f21b3f',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#1B181D',
  },
  {
    title:
      'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue semper neque tempus faucibus. Vestibulum lorem turpis, vulputate at ullamcorper nec, scelerisque non erat. Quisque nunc ligula, vestibulum ut purus a, volutpat mattis libero. Curabitur faucibus lobortis erat ut consectetur. Maecenas auctor turpis enim, vitae consectetur ante eleifend nec. Sed imperdiet ultricies felis. Mauris ultricies dui eget placerat volutpat. Nam tempus, magna tincidunt laoreet molestie, massa augue hendrerit neque, sit amet accumsan arcu diam eu justo. Donec libero est, ultrices sed justo id, vestibulum scelerisque ipsum. Cras cursus, erat in finibus suscipit, nunc enim egestas elit, non finibus nunc metus non felis. Curabitur faucibus libero mi, et ullamcorper eros convallis in. In interdum sit amet diam ac scelerisque. Nulla iaculis varius augue eget sollicitudin. Sed condimentum nisi eleifend, mattis mauris vel, rutrum magna. Phasellus tristique, ligula eu fermentum fermentum, risus erat accumsan ex, scelerisque interdum libero lectus semper nibh. Cras vel diam luctus, malesuada lectus non, rutrum tortor. 
            Sed venenatis in augue eu pharetra. Proin sit amet efficitur justo. Praesent dignissim tortor neque, ac accumsan eros laoreet sit amet. Sed semper, sapien vitae feugiat pellentesque, nunc ligula lobortis magna, at vulputate velit nisl ornare metus. Integer quis nunc hendrerit, suscipit arcu a, pellentesque risus. Maecenas sit amet orci augue. Mauris ante nisl, auctor sed dapibus vel, viverra nec nibh. Mauris pharetra arcu in nisi scelerisque, id tempor ex lobortis.`,
    cover_color: '#8624B0',
    title_color: '#ffffff',
    font_size: 15,
    font: 'Barrio',
    border_width: 5,
    border_color: '#1B181D',
    user_id: 10,
  },
];

const seedStories = () => Story.bulkCreate(storydata);

module.exports = seedStories;
