import React, { useState } from 'react';
import ModuleList from './List';
import './index.css';

const Modules: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <div>
            <h2>Modules</h2>
            
            <ModuleList />
        </div>
    );
};

export default Modules;
