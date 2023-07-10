
import React from 'react';
import { Button, Result, } from 'antd';

const NoPage: React.FC = () => (
    <Result
        status="403"
        title="No Page"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
                <Button type="primary" href="/">Back Home</Button>
        }
    />
);


export default NoPage;