import { Collapse } from 'antd';
import React from 'react'
const { Panel } = Collapse;

const Acardion = () => {
    
    const text = `
      A dog is a type of domesticated animal.
      Known for its loyalty and faithfulness,
      it can be found as a welcome guest in many households across the world.
    `;
    const onChange = (key) => {
        // console.log(key);
    };
    return (
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="This is panel header with arrow icon" key="1">
                <p>{text}</p>
            </Panel>
            <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
                <p>{text}</p>
            </Panel>
        </Collapse>
    );

}

export default Acardion