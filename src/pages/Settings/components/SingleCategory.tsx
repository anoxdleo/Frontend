import {
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const SingleCategory = (props: any) => {
    const { config, index, updateConfig } = props;

    const [refresh, setRefresh] = useState<number>(0);
    const [isInitial, setIsInitial] = useState(true);

    const handleChangeCategoryAdult = (event: any) => {
        var newConfig = config;
        if (typeof event == 'boolean') {
            newConfig[index]['adult'] = event;
        } else {
            newConfig[index]['adult'] = !newConfig[index].adult;
        }
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryAnime = (event: any) => {
        var newConfig = config;
        if (typeof event == 'boolean') {
            newConfig[index]['anime'] = event;
        } else {
            newConfig[index]['anime'] = !newConfig[index].anime;
        }
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryType = (event: any) => {
        var newConfig = config;
        newConfig[index]['type'] = event.target.value;
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryLanguage = (event: any) => {
        var newConfig = config;
        newConfig[index]['language'] = event.target.value;
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryProvider = (event: any) => {
        var newConfig = config;
        newConfig[index]['provider'] = event.target.value;
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryName = (event: any) => {
        var newConfig = config;
        newConfig[index]['name'] = event.target.value;
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryId = (event: any) => {
        var newConfig = config;
        newConfig[index]['id'] = event.target.value;
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const handleChangeCategoryDriveId = (event: any) => {
        var newConfig = config;
        newConfig[index]['drive_id'] = event.target.value;
        updateConfig(newConfig);
        setRefresh(refresh + 1);
    };

    const textFieldStyles = {
        marginBottom: '20px',
    };

    if (isInitial && props.item) {
        if (typeof config[index].adult !== 'boolean') {
            handleChangeCategoryAdult(false);
        }
        if (typeof config[index].anime !== 'boolean') {
            handleChangeCategoryAnime(false);
        }
        if (config[index].type && !['movies', 'series', 'music'].includes(config[index].type)) {
            handleChangeCategoryType({ target: { value: '' } });
        }
        if (config[index].language && !['en', 'hi', 'ja'].includes(config[index].language)) {
            handleChangeCategoryLanguage({ target: { value: '' } });
        }
        if (
            config[index].provider &&
            !['gdrive', 'onedrive', 'sharepoint'].includes(config[index].provider)
        ) {
            handleChangeCategoryProvider({ target: { value: '' } });
        }
        if (typeof props.item.name !== 'string') {
            handleChangeCategoryName({ target: { value: '' } });
        }
        if (typeof props.item.id !== 'string') {
            handleChangeCategoryId({ target: { value: '' } });
        }
        if (typeof props.item.drive_id !== 'string') {
            handleChangeCategoryDriveId({ target: { value: '' } });
        }
        setIsInitial(false);
    } else if (isInitial) {
        setIsInitial(false);
    }

    return (
        <Box sx={{ marginBottom: '20px' }}>
            <Box sx={{ marginBottom: '20px' }}>
                <FormControl component='fieldset'>
                    <FormGroup aria-label='position' row>
                        <FormControlLabel
                            value='adult'
                            control={
                                <Switch
                                    color='primary'
                                    checked={config[index].adult}
                                    onChange={handleChangeCategoryAdult}
                                />
                            }
                            label='Adult'
                            labelPlacement='start'
                        />
                    </FormGroup>
                </FormControl>
                <FormControl component='fieldset'>
                    <FormGroup aria-label='position' row>
                        <FormControlLabel
                            value='anime'
                            control={
                                <Switch
                                    color='primary'
                                    checked={config[index].anime}
                                    onChange={handleChangeCategoryAnime}
                                />
                            }
                            label='Anime'
                            labelPlacement='start'
                        />
                    </FormGroup>
                </FormControl>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth>
                        <InputLabel id='category-provider-label'>Provider</InputLabel>
                        <Select
                            labelId='category-provider-label'
                            id='category-provider-select'
                            value={config[index].provider}
                            label='Provider'
                            onChange={handleChangeCategoryProvider}
                            sx={textFieldStyles}
                        >
                            <MenuItem value={'gdrive'}>Google Drive</MenuItem>
                            <MenuItem value={'onedrive'}>OneDrive</MenuItem>
                            <MenuItem value={'sharepoint'}>SharePoint</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                    <FormControl fullWidth>
                        <InputLabel id='category-type-label'>Type</InputLabel>
                        <Select
                            labelId='category-type-label'
                            id='category-type-select'
                            value={config[index].type}
                            label='Type'
                            onChange={handleChangeCategoryType}
                            sx={textFieldStyles}
                        >
                            <MenuItem value={'movies'}>Movies</MenuItem>
                            <MenuItem value={'series'}>TV Series</MenuItem>
                            <MenuItem value={'music'}>Music</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} md={4}>
                    <FormControl fullWidth>
                        <InputLabel id='category-language-label'>Language</InputLabel>
                        <Select
                            labelId='category-language-label'
                            id='category-language-select'
                            value={config[index].language}
                            label='Language'
                            onChange={handleChangeCategoryLanguage}
                            sx={textFieldStyles}
                        >
                            <MenuItem value={'ar'}>Arabic</MenuItem>
                            <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'zh'}>Chinese</MenuItem>
                            <MenuItem value={'hi'}>Hindi</MenuItem>
                            <MenuItem value={'ja'}>Japanese</MenuItem>
                            <MenuItem value={'pt'}>Portuguese</MenuItem>
                            <MenuItem value={'es'}>Spanish</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <TextField
                sx={textFieldStyles}
                fullWidth
                label='Category Name'
                value={config[index].name}
                onChange={handleChangeCategoryName}
            />
            <TextField
                sx={textFieldStyles}
                fullWidth
                label='Folder ID'
                value={config[index].id}
                onChange={handleChangeCategoryId}
            />
            <TextField
                fullWidth
                label='Drive ID'
                value={config[index].drive_id}
                onChange={handleChangeCategoryDriveId}
            />
        </Box>
    );
};

export default SingleCategory;
