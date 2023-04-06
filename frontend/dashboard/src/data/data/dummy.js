import React from 'react';
import { Link } from 'react-router-dom';

import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';

//removed package : 

// * @syncfusion/ej2    
// * @syncfusion/ej2-react-calendars  
// * @syncfusion/ej2-react-charts   
// * @syncfusion/ej2-react-dropdowns 
// * @syncfusion/ej2-react-inputs   
// * @syncfusion/ej2-react-kanban 
// * @syncfusion/ej2-react-richtexteditor 
// * @syncfusion/ej2-react-schedule 

//npm prune


//chaker 





import { TbLayoutDashboard } from 'react-icons/tb';
import { GiTeacher } from 'react-icons/gi';

import { TbFileMusic } from 'react-icons/tb';

import { GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineReviews } from 'react-icons/md';
import { HiOutlineUsers } from 'react-icons/hi';
import { AiOutlineBarChart } from 'react-icons/ai';
import { FiPieChart } from 'react-icons/fi';
import { BsBarChartLine } from 'react-icons/bs';
import { Button } from '../../components';

import { useStateContext } from '../../contexts/ContextProvider';
// const {currentColor}=useStateContext(); 

//chaker

//fc for films 
export const gridImage = (props) => (
  <div>
    <img
      className="rounded-xl h-24 w-24 md:ml-3"

      src={`http://localhost:3000/${props.profilePicture}`}



      alt="image"

    />
  </div>
);

export const gridImageCourse = (props) => (
  <div>
    <img
      className="rounded-xl h-24 w-24 md:ml-3"

      src={`http://localhost:3000/${props.mainCover}`}



      alt="image"

    />
  </div>
);


const GridView = (props) => {
  const { currentColor } = useStateContext();

  return (
    <Link to={`/Teacher/${props._id}`}>
      <div style={{ background: currentColor }} className={`text-white py-1 px-2 capitalize rounded-2xl text-md `}>
        <button type="button" style={{ background: currentColor }}>
          details
        </button>
      </div>
    </Link>
  );
};


const GridViewStudents = (props) => {
  const { currentColor } = useStateContext();

  return (
    <Link to={`/Students/${props._id}`}>
      <div style={{ background: currentColor }} className={`text-white py-1 px-2 capitalize rounded-2xl text-md `}>
        <button type="button" style={{ background: currentColor }}>
          details
        </button>
      </div>
    </Link>
  );
};

export const gridViewById = (props) => {
  return <GridView {...props} />;
};

export const gridViewByIdStudents = (props) => {
  return <GridViewStudents {...props} />;
};

export const gridViewCourseById = (props) => {
  return <GridCourseView {...props} />;
};

const GridCourseView = (props) => {
  const { currentColor } = useStateContext();

  return (
    <Link to={`/Course/${props._id}`}>
      <div style={{ background: currentColor }} className={`text-white py-1 px-2 capitalize rounded-2xl text-md `}>
        <button type="button" style={{ background: currentColor }}>
          details
        </button>
      </div>
    </Link>
  );
};




// for Notification 
export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

//for sidebare
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'DashHome',
        nameLink: 'Home',
        icon: <TbLayoutDashboard />,
      },
    ],
  },

  {
    title: 'Users Tools',
    links: [
      {
        name: 'Teachers',
        nameLink: 'Teachers',
        icon: <GiTeacher />,
      },
      {
        name: 'Student',
        nameLink: 'Student',
        icon: <HiOutlineUsers />,
      }
    ],
  },

  {
    title: 'courses Tools',
    links: [
      {
        name: 'Cours',
        nameLink: 'Courses',
        icon: <TbFileMusic />,
      }
    ],
  },


  {
    title: 'Financial Tools',
    links: [
      {
        name: 'Financial',
        nameLink: 'Financial Information',
        icon: <GiReceiveMoney />,
      }
    ],
  },


  {
    title: 'Reviews Tools',
    links: [
      {
        name: 'Reviews',
        nameLink: 'Reviews',
        icon: <MdOutlineReviews />,
      }
    ],
  },



  {
    title: 'Charts And Graphs',
    links: [
      {
        name: 'Bar',
        nameLink: 'Bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'Pie',
        nameLink: 'Pie',
        icon: <FiPieChart />,
      },
      {
        name: 'Color-Mapping',
        nameLink: 'Color-Mapping',
        icon: <BsBarChartLine />,
      }

    ],
  },
];



////////////////////////////////////themeColors


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


/////////////////////////////////data for films 

// not used 
export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];
//data 
// img title type rating  views edit 


//gride table 
export const teachersGrid = [
  {
    headerText: 'Image',
    template: gridImage,
    textAlign: 'Center',
    width: '120',
  },

  {
    headerText: 'Full Name',
    template: '${firstName} ${lastName}',
    width: '120',
    field: 'firstName',

    // editType: 'numericedit',
    textAlign: 'Center'
  },
  // {
  //   field: 'nationality',
  //   headerText: 'Nationality',
  //   width: '100',
  //   textAlign: 'Center',
  // },
  {
    field: 'instruments',
    headerText: 'instruments',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '120',
  },
  {
    field: 'teacherRate',
    headerText: 'Rating',
    width: '80',
    textAlign: 'Center',
  },

  ,
  {
    field: 'createdDate',
    headerText: 'CreatedAt',
    width: '100',
    textAlign: 'Center',
  },
  ,
  {

    field: 'IsActivated',


    headerText: 'Activated',
    width: '100',
    textAlign: 'Center',
    template: (rowData) => (
      <div className={`text-white py-1 px-2 capitalize rounded-2xl text-md ${rowData.IsActivated ? 'bg-lime-500 ' : 'bg-red-600 '}`}>
        {rowData.IsActivated ? 'Active' : 'Inactive'}
      </div>
    )
  },

  {
    headerText: 'Details',
    template: gridViewById,

    textAlign: 'Center',
    width: '100',
  }
];

// img title type rating  views edit 



export const CoursGrid = [
  {
    headerText: 'main Cover',
    template: gridImageCourse,
    textAlign: 'Center',
    width: '120',
  },

  {
    headerText: 'Title',

    width: '120',
    field: 'courseName',

    // editType: 'numericedit',
    textAlign: 'Center'
  },
  {
    field: 'courseSubject',
    headerText: 'Subject',
    width: '80',
    textAlign: 'Center',
  },
  // {
  //   field: 'instruments',
  //   headerText: 'instruments',
  //   format: 'C2',
  //   textAlign: 'Center',
  //   editType: 'numericedit',
  //   width: '120',
  // },
  {
    field: 'numberOfStudents',
    headerText: 'Students',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'rateCourse',
    headerText: 'Rating',
    width: '80',
    textAlign: 'Center',
  },

  ,
  {
    field: 'CourseDate',
    headerText: 'CreatedAt',
    width: '100',
    textAlign: 'Center',
  },
  ,
  {

    field: 'isPublish',


    headerText: 'Published',
    width: '100',
    textAlign: 'Center',
    template: (rowData) => (
      <div className={`text-white py-1 px-2 capitalize rounded-2xl text-md ${rowData.isPublish ? 'bg-lime-500 ' : 'bg-red-600 '}`}>
        {rowData.isPublish ? 'published' : 'Not pub'}
      </div>
    )
  },

  {
    headerText: 'Details',
    template: gridViewCourseById,

    textAlign: 'Center',
    width: '100',
  }
];



export const StudentsGrid = [

  {
    headerText: 'Full Name',
    template: '${firstName} ${lastName}',
    width: '120',
    field: 'firstName',

    // editType: 'numericedit',
    textAlign: 'Center'
  },

 
  {
    field: 'email',
    headerText: 'Email',
    width: '210',
    textAlign: 'Center',
  },



  {

    field: 'shopperCourses',
    headerText: 'Purchases',
    width: '100',
    textAlign: 'Center',
    template: (rowData) => (

      <div>
        {rowData.shopperCourses.length}

      </div>

    )
  },

  {

    field: 'certification',
    headerText: 'certificates',
    width: '100',
    textAlign: 'Center',
    template: (rowData) => (

      <div>
        {rowData.certification.length}

      </div>

    )
  },
  ,
  {
    field: 'createdDate',
    headerText: 'CreatedAt',
    width: '100',
    textAlign: 'Center',
  },
  ,


  {
    headerText: 'Details',
    template: gridViewByIdStudents,

    textAlign: 'Center',
    width: '100',
  }
];
