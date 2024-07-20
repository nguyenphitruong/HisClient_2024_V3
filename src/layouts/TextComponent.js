import React, { useState } from 'react';

function MyComponent() {
  

const [listData, setListData] = useState(['item 1', 'item 2']);
  
  
const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };
 
const handleAddItemToList = () => {
    

if (newItem.trim() !== '') {
const updatedListData = [...listData, newItem];
      
  
// Cập nhật state của danh sách
setListData(updatedListData);
      // Xóa trường nhập để chuẩn bị cho việc thêm mục tiếp theo

setNewItem('');
    }
};
return (
    
<div>
      <h2>List:</h2>
      <ul>
        {listData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={handleInputChange} />
      <button onClick={handleAddItemToList}>Add Item</button>
    </div>
  );
}
export default MyComponent;