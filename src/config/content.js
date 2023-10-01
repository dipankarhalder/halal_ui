import {
  HiOutlineSearch,
  HiOutlineAdjustments,
  HiOutlineViewGridAdd,
  HiOutlineChartPie,
  HiOutlineClock,
  HiOutlineNewspaper,
  HiOutlineInboxIn,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
  HiOutlineSupport,
  HiOutlineFolder,
  HiOutlineCheckCircle,
  HiOutlineReceiptTax,
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from 'react-icons/hi';

import {
  SEARCH,
  CUSTOMIZATIONS,
  TEMPLATES,
  DASHBOARD,
  TIMETRACKING,
  TASKLIST,
  LEADPIPELINE,
  ESTIMATES,
  INVOICES,
  PROJECTS,
  SCHEDULE,
  PHOTOANDFILES,
  CUSTOMERS,
  MAP,
  REPORTS,
} from './routes';

export const navigation = [
  {
    section_name: '',
    list_item: [
      { icon: HiOutlineSearch, path: SEARCH, title: 'Search' },
      {
        icon: HiOutlineAdjustments,
        path: CUSTOMIZATIONS,
        title: 'Customizations',
      },
      { icon: HiOutlineViewGridAdd, path: TEMPLATES, title: 'Templates' },
    ],
  },
  {
    section_name: 'Main Menu',
    list_item: [
      { icon: HiOutlineChartPie, path: DASHBOARD, title: 'Dashboard' },
      { icon: HiOutlineClock, path: TIMETRACKING, title: 'Time Tracking' },
      { icon: HiOutlineNewspaper, path: TASKLIST, title: 'Task List' },
      {
        icon: HiOutlineInboxIn,
        path: LEADPIPELINE,
        title: 'Lead Pipeline',
      },
      { icon: HiOutlineCheckCircle, path: ESTIMATES, title: 'Estimates' },
      { icon: HiOutlineReceiptTax, path: INVOICES, title: 'Invoices' },
      { icon: HiOutlineFolder, path: PROJECTS, title: 'Projects' },
      { icon: HiOutlineSupport, path: SCHEDULE, title: 'Schedule' },
      {
        icon: HiOutlinePhotograph,
        path: PHOTOANDFILES,
        title: 'Photos & Files',
      },
      { icon: HiOutlineUserGroup, path: CUSTOMERS, title: 'Customers' },
      { icon: HiOutlineLocationMarker, path: MAP, title: 'Map' },
      { icon: HiOutlineClipboardCheck, path: REPORTS, title: 'Reports' },
    ],
  },
];
