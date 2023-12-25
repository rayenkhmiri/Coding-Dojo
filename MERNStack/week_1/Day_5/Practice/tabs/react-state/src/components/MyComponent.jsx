import React, { useState } from 'react';

const Tabs = ({ items }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div>
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
            <fieldset>
                {items[activeTab].content}
            </fieldset>
        </div>
    );
};

export default Tabs;