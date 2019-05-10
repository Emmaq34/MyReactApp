// header nav data

const BASE_URL = '/';

const navItems = [
    {
      label: 'Home',
      url: BASE_URL,
      icon: 'Home'
    },
    {
      label: 'Colors',
      url: BASE_URL + 'colors',
      icon: 'Palette'
    },
    {
      label: 'Components',
      url: BASE_URL + 'components',
      icon: 'Widgets',
      subNavItems: [
        {
          label: 'Button',
          url: BASE_URL + 'components/button',
          icon: 'NavigateNext'
        },
        {
          label: 'Table',
          url: BASE_URL + 'components/table',
          icon: 'NavigateNext'
        },
        
        {
          label: 'Tabs',
          url: BASE_URL + 'components/tabs',
          icon: 'NavigateNext'
        },
        {
          label: 'Spinner',
          url: BASE_URL + 'components/spinner',
          icon: 'NavigateNext'
        },
        {
          label: 'Progress',
          url: BASE_URL + 'components/progress',
          icon: 'NavigateNext'
        },
        
        {
          label: 'Avatar',
          url: BASE_URL + 'components/avatar',
          icon: 'NavigateNext'
        },
        
      ]
    },
    {
      label: 'Charts',
      url: BASE_URL + 'charts',
      icon: 'Timeline',
      subNavItems: [
        {
          label: 'Bar',
          url: BASE_URL + 'charts/bar',
          icon: 'NavigateNext'
        },
        {
          label: 'Stacked Bar',
          url: BASE_URL + 'charts/stackbar',
          icon: 'NavigateNext'
        },
        {
          label: 'Area',
          url: BASE_URL + 'charts/area',
          icon: 'NavigateNext'
        },
        {
          label: 'Line',
          url: BASE_URL + 'charts/line',
          icon: 'NavigateNext'
        },
        {
          label: 'Pie',
          url: BASE_URL + 'charts/pie',
          icon: 'NavigateNext'
        },
        {
          label: 'scatterplot',
          url: BASE_URL + 'charts/scatterplot',
          icon: 'NavigateNext'
        }
      ]
    },
    {
      label: 'Iconography',
      url: BASE_URL + 'icons',
      icon: 'BlurOn'
    }
];


export default {navItems}
