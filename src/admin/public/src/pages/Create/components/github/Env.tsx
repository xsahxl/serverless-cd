import React from 'react';
import { Grid, Input, Select, Field } from '@alicloud/console-components';
import { noop, isEmpty } from 'lodash';

const { Row, Col } = Grid;

interface IProps {
  value?: any;
  onChange?: (value: object) => void;
}

export const validteEnv = (rule, value, callback) => {
  if (isEmpty(value.name)) {
    callback('请输入环境名称');
  } else {
    callback();
  }
};

const Env = (props: IProps) => {
  const { value: initValue, onChange = noop } = props;
  const field = Field.useField({
    onChange: (name: string, value: any) => {
      onChange(field.getValues());
    },
  });
  const { init } = field;

  return (
    <Row gutter={16} className="mb-8">
      <Col span="12">
        <Input {...init('name', { initValue: initValue.name })} className="full-width" />
      </Col>
      <Col span="12">
        <Select
          className="full-width"
          {...init('description', { initValue: initValue.description })}
          dataSource={[
            { label: '测试环境', value: 'testing' },
            { label: '预发环境', value: 'staging' },
            { label: '生产环境', value: 'production' },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Env;
