import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {sortBy, filterBy} from "../redux/actions/filterAction";


export const Filter = () => {
    const dispatch = useDispatch();
    const [sortByName, setSortByName] = useState<string>('');
    const [filterByName, setFilterByName] = useState<string>('');

    const handleSortByChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSortByName(event.target.value);
        dispatch(filterBy(event.target.value));
    };

    const handleFilterByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterByName(event.target.value);
        dispatch(sortBy(event.target.value))
    };

    return(
        <Box sx={{marginBottom: 2, display: 'flex', m: 2, pl: 4}}>
            <TextField
                label="Filter by Name"
                value={filterByName}
                onChange={handleFilterByChange}
            />

            <FormControl sx={{ minWidth: 100, pl: 2 }}>
                <InputLabel sx={{ pl: 2 }} id="demo-simple-select-autowidth-label">Sort By:</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={sortByName}
                    onChange={handleSortByChange}
                    autoWidth
                    label="Sort By:"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'name'}>Name</MenuItem>
                    <MenuItem value={'date'}>Date</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}