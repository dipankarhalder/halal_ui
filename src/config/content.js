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

export const navigation = [
  {
    section_name: '',
    list_item: [
      { icon: HiOutlineSearch, path: '/', title: 'Search' },
      { icon: HiOutlineAdjustments, path: '/', title: 'Customizations' },
      { icon: HiOutlineViewGridAdd, path: '/', title: 'Templates' },
    ],
  },
  {
    section_name: 'Main Menu',
    list_item: [
      { icon: HiOutlineChartPie, path: '/', title: 'Dashboard' },
      { icon: HiOutlineClock, path: '/', title: 'Time Tracking' },
      { icon: HiOutlineNewspaper, path: '/', title: 'Task List' },
      { icon: HiOutlineInboxIn, path: '/', title: 'Lead Pipeline' },
      { icon: HiOutlineCheckCircle, path: '/', title: 'Estimates' },
      { icon: HiOutlineReceiptTax, path: '/', title: 'Invoices' },
      { icon: HiOutlineFolder, path: '/', title: 'Projects' },
      { icon: HiOutlineSupport, path: '/', title: 'Schedule' },
      { icon: HiOutlinePhotograph, path: '/', title: 'Photos & Files' },
      { icon: HiOutlineUserGroup, path: '/', title: 'Customers' },
      { icon: HiOutlineLocationMarker, path: '/', title: 'Map' },
      { icon: HiOutlineClipboardCheck, path: '/', title: 'Reports' },
    ],
  },
];
