import { Component, FC, ReactNode } from 'react'
import { Autocomplete, Popper, TextField, InputAdornment, Grid, Container, Chip, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChipBar from './chip';

const cities = [
    { code: 'NY', name: 'New York' },
    { code: 'LA', name: 'Los Angeles' },
    // Add more cities...
];

const label = ['Tree Plantation', 'Canada', 'Toronto', 'Montreal', 'Environment', 'Nutrition', 'Anthropology', 'Environmental Science']

const StyledPopper = styled((props) => <Popper open placement="bottom-start" {...props} />)({
    width: '180px !important',
    backgroundColor: '#ffff',

});

class SearchSection extends Component {
    // const dispatch: Dispatch<any> = useDispatch();
    // const { products } = useSelector((state: any) => state.product);

    // const [searchValue, setSearchValue] = React.useState<any>();

    // const Search = (event: any) => setSearchValue(event.target.value);
    // useEffect(() => {
    //     if (searchValue) {
    //         dispatch(searchProduct(products, searchValue));
    //     }
    // }, [searchValue]);
    render(): ReactNode {
        return (
            <>
                <div style={{ display: 'flex' }}>
                    <TextField
                        sx={{ width: '500px', }}
                        className='searchBar'
                        placeholder="Search Mission..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ ml: 1, width: 24, height: 30, color: 'text.disabled' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Autocomplete
                        sx={{ width: 161 }}
                        autoHighlight
                        popupIcon={<KeyboardArrowDownIcon fontSize='medium' />}
                        className='selector'
                        PopperComponent={StyledPopper}
                        options={cities}
                        getOptionLabel={(post) => post.name}
                        // isOptionEqualToValue={(option, value) => option.id === value.id}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Cities"
                                InputProps={{
                                    ...params.InputProps,

                                }}
                            />
                        )}
                    />
                    <Autocomplete
                        sx={{ width: 161 }}
                        autoHighlight
                        className='selector'
                        popupIcon={<KeyboardArrowDownIcon fontSize='medium' />}
                        PopperComponent={StyledPopper}
                        options={cities}
                        getOptionLabel={(post) => post.name}
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Cities"
                                InputProps={{
                                    ...params.InputProps,
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <SearchIcon sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
                                    //     </InputAdornment>
                                    // ),
                                }}
                            />
                        )}
                    />
                    <Autocomplete
                        sx={{ width: 161 }}
                        autoHighlight
                        className='selector'
                        popupIcon={<KeyboardArrowDownIcon fontSize='medium' />}
                        PopperComponent={StyledPopper}
                        options={cities}
                        getOptionLabel={(post) => post.name}
                        // isOptionEqualToValue={(option, value) => option.id === value.id}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Cities"
                                InputProps={{ ...params.InputProps, }}
                            />
                        )}
                    />
                    <Autocomplete
                        sx={{ width: 161 }}
                        autoHighlight
                        className='selector'
                        popupIcon={<KeyboardArrowDownIcon fontSize='medium' />}
                        PopperComponent={StyledPopper}
                        options={cities}
                        getOptionLabel={(post) => post.name}
                        // isOptionEqualToValue={(option, value) => option.id === value.id}
                        renderInput={(params) => (
                            <TextField
                                sx={{ border: 'none' }}
                                {...params}
                                placeholder="Cities"
                                InputProps={{
                                    ...params.InputProps,
                                    // startAdornment: (
                                    //     <InputAdornment position="start">
                                    //         <SearchIcon sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
                                    //     </InputAdornment>
                                    // ),
                                }}
                            />
                        )}
                    />

                </div>
            </>
        );

    }
}

export default SearchSection; 