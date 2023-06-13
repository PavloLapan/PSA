import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {ReactNode, useState} from "react";

type FilterProps = {
    sort: (sortBy: 'name' | 'date') => void;
    filter: (searchTerm: string) => void;
};

export const Filter = ({ sort, filter }: FilterProps) => {
    const [sortByName, setSortByName] = useState<string>('');
    const [filterByName, setFilterByName] = useState<string>('');

    const handleSortByChange = (event: SelectChangeEvent<string>) =>  {
        const sortBy = event.target.value as 'name' | 'date';
        setSortByName(sortBy);
        sort(sortBy);
    };

    const handleFilterByChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setFilterByName(searchTerm);
        filter(searchTerm);
    };

    return (
        <Box sx={{ marginBottom: 2, display: 'flex', m: 2, pl: 4 }}>
            <TextField
                label="Filter by Name"
                value={filterByName}
                onChange={handleFilterByChange}
            />

            <FormControl sx={{ minWidth: 100, pl: 2 }}>
                <InputLabel sx={{ pl: 2 }} id="demo-simple-select-autowidth-label">
                    Sort By:
                </InputLabel>
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
    );
}

