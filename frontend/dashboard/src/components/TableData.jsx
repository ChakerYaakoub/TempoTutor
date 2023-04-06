
import React,{ useState, useEffect   } from 'react';
// import { useHistory, useParams } from "react-router-dom";

import {
  GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort,
  ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject , Search , Toolbar , Selection
} from '@syncfusion/ej2-react-grids';





import AlertDeletsucc from './AlertDeletsucc';
// import Loading from './Loading';
import AlertDeleteError from './AlertDeleteError';


const TableData = ({data , dataGrid ,searchSettings ,deletUrl }) => {

  const [errorDeletAlert, seterrorDeletAlert] = useState(false);
  const [succDeletAlert, setsuccDeletAlert] = useState(false);

//   const [loadingdelet, setLoadingdelet] = useState(false);


  const handleActionBegin = async (args) => {
    seterrorDeletAlert(false);
    setsuccDeletAlert(false);
    setLoadingdelet(true);
  
    if (args.requestType === "delete") {
      const itemId = args.data[0]._id;
  
      try {
        const response = await fetch(`${deletUrl}${itemId}`, {
          method: "DELETE"
        });
  
        if (response.status === 200) {
          args.cancel = false;
          console.log(`Item with ID ${itemId} was successfully deleted`);
          setLoadingdelet(false);
          setsuccDeletAlert(true);
        } else {
          args.cancel = true;
          console.error(`Failed to delete item with ID ${itemId}`);
        }
      } catch (error) {
        args.cancel = true;
        console.error(`Failed to delete item with ID ${itemId} due to error: ${error}`);
        setLoadingdelet(false);
        seterrorDeletAlert(true);
      }
    }
  };



  return (

  

    <div className='m-1 md:m-2 mt-3 p-1 md:p-4 bg-white rounded-3xl'>
      

      
      {errorDeletAlert  && <AlertDeleteError text="Something seriously bad happened. Data Not Deleted"/> } 

      {succDeletAlert && <AlertDeletsucc  text=" Great !  Data Removed Successfully!" /> }

      {/* {loadingdelet && <Loading/>} */}
       
    
      <GridComponent
       id='gridcomp'
        dataSource={data}
        allowPaging
        allowSorting
        toolbar={['Search']}
        // toolbar={['Search' , 'Delete']}
        actionBegin={handleActionBegin}
  
       
    
        
        editSettings={{allowDeleting: true , showDeleteConfirmDialog: true,ConfirmDelete:true  }}
        searchSettings={searchSettings}
        // allowEditing: true ,
        width="auto"
     
       
        
        >
        <ColumnsDirective>
        
        {dataGrid.map((item,index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        

        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport , Search , Toolbar , Selection]} />
      </GridComponent>
    </div>
  )
};

export default TableData
