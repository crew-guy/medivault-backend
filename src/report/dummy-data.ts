import { MimeType, ReportsCollection, ReportType } from './report.entity';

export const initialReportsCollection = {
  reports: [
    {
      uuid: '1',
      files: [
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/802',
          thumbnailUrl: 'https://unsplash.it/802',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/804',
          thumbnailUrl: 'https://unsplash.it/804',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/806',
          thumbnailUrl: 'https://unsplash.it/806',
        },
        {
          fileMimeType: '',
          dataUrl: 'https://unsplash.it/808',
          thumbnailUrl: 'https://unsplash.it/808',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 9, 12),
      title: 'Headache',
      tags: 'PRESCRIPTION',
    },
    {
      uuid: '2',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 9, 18),
      title: 'Unwanted headache',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '3',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/902',
          thumbnailUrl: 'https://unsplash.it/902',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/908',
          thumbnailUrl: 'https://unsplash.it/908',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 9, 1),
      title: 'AIDS',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '4',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/800',
          thumbnailUrl: 'https://unsplash.it/800',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/804',
          thumbnailUrl: 'https://unsplash.it/804',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/806',
          thumbnailUrl: 'https://unsplash.it/806',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/808',
          thumbnailUrl: 'https://unsplash.it/808',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/670',
          thumbnailUrl: 'https://unsplash.it/670',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/674',
          thumbnailUrl: 'https://unsplash.it/674',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/676',
          thumbnailUrl: 'https://unsplash.it/676',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/678',
          thumbnailUrl: 'https://unsplash.it/678',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 8, 12),
      title: 'Thoda aur AIDS',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '5',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/800',
          thumbnailUrl: 'https://unsplash.it/800',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/804',
          thumbnailUrl: 'https://unsplash.it/804',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/806',
          thumbnailUrl: 'https://unsplash.it/806',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/808',
          thumbnailUrl: 'https://unsplash.it/808',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 8, 5),
      title: 'Piles',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '6',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 5, 18),
      title: 'Gupt Rog #1',
      tags: [ReportType.VACCINE],
    },
    {
      uuid: '7',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 4, 18),
      title: 'Headache',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '8',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 4, 18),
      title: 'Gupt Rog #2',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '9',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2018, 4, 3),
      title: 'Some more AIDS',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '10',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2018, 1, 18),
      title: 'Headache',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '11',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 5, 18),
      title: 'Gupt Rog #3',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '12',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2021, 5, 18),
      title: 'Gupt Rog #1',
      tags: [ReportType.VACCINE],
    },
    {
      uuid: '13',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2019, 4, 18),
      title: 'Headache',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '14',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2018, 9, 12),
      title: 'Headache',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '15',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
      ],
      authorId: '9820178330',
      date: new Date(2019, 9, 18),
      title: 'Unwanted headache',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '16',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2018, 4, 3),
      title: 'Some more AIDS',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '17',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2017, 1, 18),
      title: 'Headache',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '18',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2016, 5, 18),
      title: 'Gupt Rog #3',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '19',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2016, 5, 18),
      title: 'Gupt Rog #1',
      tags: [ReportType.VACCINE],
    },
    {
      uuid: '20',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2016, 4, 18),
      title: 'Headache',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '20',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2017, 9, 12),
      title: 'Headache',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '20',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
      ],
      authorId: '9820178330',
      date: new Date(2016, 3, 18),
      title: 'Unwanted headache',
      tags: [ReportType.VACCINE],
    },
    {
      uuid: '21',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/120',
          thumbnailUrl: 'https://unsplash.it/120',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/120',
          thumbnailUrl: 'https://unsplash.it/120',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/122',
          thumbnailUrl: 'https://unsplash.it/122',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/122',
          thumbnailUrl: 'https://unsplash.it/122',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/128',
          thumbnailUrl: 'https://unsplash.it/128',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/128',
          thumbnailUrl: 'https://unsplash.it/128',
        },
      ],
      authorId: '9820178330',
      date: new Date(2015, 9, 18),
      title: 'Unwanted headache',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '22',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
      ],
      authorId: '9820178330',
      date: new Date(2015, 2, 12),
      title: 'Unwanted headache',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '23',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/802',
          thumbnailUrl: 'https://unsplash.it/802',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/804',
          thumbnailUrl: 'https://unsplash.it/804',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/806',
          thumbnailUrl: 'https://unsplash.it/806',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/808',
          thumbnailUrl: 'https://unsplash.it/808',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 9, 12),
      title: 'Headache',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '24',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 9, 18),
      title: 'Unwanted headache',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '25',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/700',
          thumbnailUrl: 'https://unsplash.it/700',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/702',
          thumbnailUrl: 'https://unsplash.it/702',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/708',
          thumbnailUrl: 'https://unsplash.it/708',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/902',
          thumbnailUrl: 'https://unsplash.it/902',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/908',
          thumbnailUrl: 'https://unsplash.it/908',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 9, 1),
      title: 'AIDS',
      tags: [ReportType.LAB_REPORT],
    },
    {
      uuid: '26',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/800',
          thumbnailUrl: 'https://unsplash.it/800',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/804',
          thumbnailUrl: 'https://unsplash.it/804',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/806',
          thumbnailUrl: 'https://unsplash.it/806',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/808',
          thumbnailUrl: 'https://unsplash.it/808',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/670',
          thumbnailUrl: 'https://unsplash.it/670',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/674',
          thumbnailUrl: 'https://unsplash.it/674',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/676',
          thumbnailUrl: 'https://unsplash.it/676',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/678',
          thumbnailUrl: 'https://unsplash.it/678',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 8, 12),
      title: 'Thoda aur AIDS',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '27',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/800',
          thumbnailUrl: 'https://unsplash.it/800',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/804',
          thumbnailUrl: 'https://unsplash.it/804',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/806',
          thumbnailUrl: 'https://unsplash.it/806',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/808',
          thumbnailUrl: 'https://unsplash.it/808',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 8, 5),
      title: 'Piles',
      tags: [ReportType.PRESCRIPTION],
    },
    {
      uuid: '28',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 5, 18),
      title: 'Gupt Rog #1',
      tags: [ReportType.VACCINE],
    },
    {
      uuid: '29',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 4, 18),
      title: 'Headache',
      tags: [ReportType.OTHER],
    },
    {
      uuid: '30',
      files: [
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/500',
          thumbnailUrl: 'https://unsplash.it/500',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/502',
          thumbnailUrl: 'https://unsplash.it/502',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/504',
          thumbnailUrl: 'https://unsplash.it/504',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/506',
          thumbnailUrl: 'https://unsplash.it/506',
        },
        {
          fileMimeType: MimeType.NON_PDF,
          dataUrl: 'https://unsplash.it/508',
          thumbnailUrl: 'https://unsplash.it/508',
        },
      ],
      authorId: '9820178330',
      date: new Date(2013, 4, 18),
      title: 'Gupt Rog #2',
      tags: [ReportType.PRESCRIPTION],
    },
  ],
};
