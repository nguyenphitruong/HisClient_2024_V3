// const itemsPerPage = 5; // Number of items per page
//   const data = []; // Your data array

//   // Generate some sample data
//   for (let i = 1; i <= 50; i++) {
//     data.push(`Item ${i}`);
//   }

//   function displayData(pageNumber) {
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const pageData = data.slice(startIndex, endIndex);
    
//     const dataContainer = document.getElementById('dataContainer');
//     dataContainer.innerHTML = '';
    
//     pageData.forEach(item => {
//       const itemElement = document.createElement('div');
//       itemElement.textContent = item;
//       dataContainer.appendChild(itemElement);
//     });
//   }

//   function setupPagination() {
//     const totalItems = data.length;
//     const totalPages = Math.ceil(totalItems / itemsPerPage);
//     const paginationContainer = document.getElementById('paginationContainer');
//     paginationContainer.innerHTML = '';

//     for (let i = 1; i <= totalPages; i++) {
//       const button = document.createElement('button');
//       button.textContent = i;
//       button.addEventListener('click', () => {
//         displayData(i);
//         highlightButton(i);
//       });
//       paginationContainer.appendChild(button);
//     }

//     // Display the first page by default
//     displayData(1);
//     highlightButton(1);
//   }

//   function highlightButton(pageNumber) {
//     const paginationContainer = document.getElementById('paginationContainer');
//     const buttons = paginationContainer.getElementsByTagName('button');
    
//     for (let i = 0; i < buttons.length; i++) {
//       buttons[i].classList.remove('active');
//     }
    
//     buttons[pageNumber - 1].classList.add('active');
//   }

//   // Initialize pagination
//   setupPagination();

import React, { useState } from 'react';
import { Button } from 'reactstrap';
import callApi from '../../apis/callApi';

function PageNumberCom() {
  //const [data1, setdata] = useState([]);
  const itemsPerPage = 29; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const data = []; // Your data array
  // Generate some sample data
  for (let i = 1; i <= 500; i++) {
    data.push(`Item ${i}`);
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Data to be displayed on current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div>
        {currentPageData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default PageNumberCom;