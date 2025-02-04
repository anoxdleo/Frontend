import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DBottomBarWrapper } from './styles';

const DBottomBar = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState<number>(0);

    return (
        <DBottomBarWrapper>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, val) => {
                    setValue(val);
                    if (val == 0) {
                        navigate('/');
                    } else if (val == 1) {
                        // open search
                    } else if (val == 2) {
                        navigate('/settings');
                    }
                }}
            >
                <BottomNavigationAction
                    label='Home'
                    icon={<i style={{ fontSize: '22px' }} className='ri-home-fill'></i>}
                />
                <BottomNavigationAction
                    label='Search'
                    icon={<i style={{ fontSize: '22px' }} className='ri-search-2-fill'></i>}
                />
                <BottomNavigationAction
                    label='Settings'
                    icon={<i style={{ fontSize: '22px' }} className='ri-settings-2-fill'></i>}
                />
            </BottomNavigation>
        </DBottomBarWrapper>
    );
};

export default DBottomBar;
