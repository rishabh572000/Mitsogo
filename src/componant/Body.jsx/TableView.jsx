import React from 'react';
import { Space, Table, Tag } from 'antd';

export default function TableView() {

    const columns = [
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Views',
          dataIndex: 'views',
          key: 'views',
        },
        {
          title: 'Sales',
          dataIndex: 'sales',
          key: 'sales',
        },
        {
          title: 'Conversion',
          dataIndex: 'conversion',
          key: 'conversion',
        },
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
        },
      ];
      const data = [
        {
          key: '1',
          location: 'google.com',
          views: 3746,
          sales: 752,
          conversion: '43%',
          total: '$19,291'
        },
        {
          key: '2',
          location: 'facebook.com',
          views: 8126,
          sales: 728,
          conversion: '32%',
          total: '$17,638'
        },
        {
          key: '3',
          location: 'twitter.com',
          views: 8836,
          sales: 694,
          conversion: '28%',
          total: '$16,218'
        },
        {
          key: '4',
          location: 'Direct,email, IM',
          views: 1173,
          sales: 645,
          conversion: '24%',
          total: '$14,421'
        },
        {
          key: '5',
          location: 'linkedin.com',
          views: 2739,
          sales: 539,
          conversion: '20%',
          total: '$12,370'
        },
        {
          key: '6',
          location: 'instagram.com',
          views: 2739,
          sales: 539,
          conversion: '20%',
          total: '$12,370'
        },
      ];

      


return (
  <>
    <div className='table card'>
      <h3>Referrel</h3>
        <Table columns={columns} dataSource={data} />
    </div>
  </>
)
}
