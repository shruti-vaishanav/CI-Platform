import { Component, ReactNode } from 'react';
import Chip from '@mui/material/Chip';

const Chips = ['Tree Plantation', 'Canada', 'Toronto', 'Montreal', 'Environment', 'Anthropology', 'Nutrition', 'Environmental Science'];
export default class SearchChip extends Component {

    handleClick = () => {
        console.info('You clicked the Chip.');
    };

    handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    render(): ReactNode {
        return (
            <>
                <div style={{ paddingTop: '15px', paddingBottom: '20px', display: 'flex', gap: 10, alignItems: 'center' }}>
                    {Chips.map((val) => (
                        <Chip
                            label={val}
                            variant="outlined"
                            onDelete={this.handleDelete}
                            onClick={this.handleClick}
                        />
                    ))}
                    <a href="#">Clear All</a>
                </div>
            </>
        )
    }
}