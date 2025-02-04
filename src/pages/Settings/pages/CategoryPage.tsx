import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import SingleCategory from '../components/SingleCategory';
import guid from '../utilities/guid';

const CategoryPage = (props: any) => {
    const { config, updateConfig } = props;

    var tempCategories: any = [];
    for (let i = 0; i < config.length; i++) {
        const item = config[i];
        tempCategories.push(
            <SingleCategory
                key={guid()}
                item={item}
                index={i}
                config={config}
                updateConfig={updateConfig}
            />,
        );
    }

    var index = tempCategories.length;

    const [categories, setCategories] = useState<any>(tempCategories);
    const [refresh, setRefresh] = useState<number>(0);

    const handleAddCategory = () => {
        setCategories(
            categories.concat(
                <SingleCategory
                    key={guid()}
                    index={index}
                    config={config}
                    updateConfig={updateConfig}
                />,
            ),
        );
        index += 1;
        var newConfig = config;
        newConfig.push({});
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleRemoveCategory = () => {
        setCategories(categories.slice(0, -1));
        index -= 1;
        var newConfig = config;
        newConfig.pop();
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleClearAll = () => {
        setCategories([]);
        updateConfig([]);
        setRefresh(refresh + 1);
    };

    return (
        <Box>
            <Box sx={{ paddingBottom: '20px' }}>
                <Button
                    color='error'
                    variant='outlined'
                    startIcon={<DeleteRoundedIcon />}
                    onClick={handleClearAll}
                >
                    Clear All Categories
                </Button>
            </Box>
            <Box>{categories}</Box>
            <Box>
                <Button
                    startIcon={<AddRoundedIcon />}
                    sx={{ marginRight: '20px', marginBottom: '20px' }}
                    variant='contained'
                    onClick={handleAddCategory}
                >
                    Add Category
                </Button>
                <Button
                    color='warning'
                    startIcon={<CancelRoundedIcon />}
                    sx={{ marginRight: '20px', marginBottom: '20px' }}
                    variant='outlined'
                    onClick={handleRemoveCategory}
                >
                    Remove Category
                </Button>
            </Box>
        </Box>
    );
};

export default CategoryPage;
