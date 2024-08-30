import * as React from 'react';
import { BarChart } from '@mui/x-charts';
import { LineChart } from '@mui/x-charts';
import { PieChart } from '@mui/x-charts';

// Example data
const uData = [1, 2, 3, 4, 5];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const lineElementClasses = { root: 'line-element-root' };

export default function BasicBars() {
    return (
        <>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                width={500}
                height={300}
            />

            <LineChart
                width={500}
                height={300}
                series={[{ data: uData, label: 'uv', area: true, showMark: false }]}
                xAxis={[{ scaleType: 'point', data: xLabels }]}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        display: 'none',
                    },
                }}
            />

            <PieChart
                series={[
                    {
                        data: [
                            { value: 40, label: 'Group A' },
                            { value: 30, label: 'Group B' },
                            { value: 20, label: 'Group C' },
                            { value: 10, label: 'Group D' },
                        ],
                    },
                ]}
                width={500}
                height={300}
            />
        </>
    );
}
