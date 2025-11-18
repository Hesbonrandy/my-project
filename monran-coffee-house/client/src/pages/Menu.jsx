import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Menu() {
  const [items, setItems] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menuRes, typesRes] = await Promise.all([
          axios.get('/api/menu'),
          axios.get('/api/types')
        ]);
        setItems(menuRes.data);
        setTypes(typesRes.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this menu item?')) {
      try {
        await axios.delete(`/api/menu/${id}`);
        setItems(items.filter(item => item._id !== id));
      } catch (err) {
        alert('Failed to delete');
      }
    }
  };

  const filteredItems = selectedType 
    ? items.filter(item => item.itemType._id === selectedType)
    : items;

  if (loading) return <p>Loading menu...</p>;

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>☕ Our Menu</h1>
        <Link to="/menu/new" style={{ padding: '0.5rem 1rem', backgroundColor: '#6F4E37', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          ➕ Add Item
        </Link>
      </div>

      {/* Filter by type */}
      <div style={{ marginBottom: '2rem' }}>
        <button 
          onClick={() => setSelectedType('')}
          style={{ 
            padding: '0.5rem 1rem', 
            margin: '0.25rem', 
            backgroundColor: selectedType ? '#ddd' : '#6F4E37',
            color: selectedType ? '#333' : 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          All
        </button>
        {types.map(type => (
          <button 
            key={type._id}
            onClick={() => setSelectedType(type._id)}
            style={{ 
              padding: '0.5rem 1rem', 
              margin: '0.25rem', 
              backgroundColor: selectedType === type._id ? '#6F4E37' : '#ddd',
              color: selectedType === type._id ? 'white' : '#333',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            {type.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredItems.length === 0 ? (
          <p>No items found.</p>
        ) : (
          filteredItems.map(item => (
            <div key={item._id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1.5rem', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p><strong>KSh {item.price}</strong></p>
                </div>
                {item.isFeatured && (
                  <span style={{ backgroundColor: '#E6C588', color: '#6F4E37', padding: '0.25rem 0.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
                    Featured
                  </span>
                )}
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Link to={`/menu/edit/${item._id}`} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#2196F3', color: 'white', textDecoration: 'none', borderRadius: '4px', fontSize: '0.9rem' }}>
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(item._id)}
                  style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', fontSize: '0.9rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}