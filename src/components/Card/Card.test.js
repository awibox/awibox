import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const testClassName = 'test-class';

describe('Card', () => {
  it('should render correctly', () => {
    const component = shallow(<Card
      title={'Title'}
      icon={'fa fa-home'}
      color={'blue'}
      className={testClassName}
      withoutContainer={false}>
      <div>
        <div>
          Test Card
        </div>
      </div>
    </Card>);
    expect(component).toMatchSnapshot();
  });
});
