import Modal from './Modal';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import { fireEvent } from '@testing-library/react';
import { Task, TaskState } from '../Task';
import { Priority } from '../Case';
import * as api from '../../services/API';
import {
  selectOption,
  selectedTask,
  tableBodyContents,
  testCase1,
  testTask1,
} from '../../helpers/test';

let container: any;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

jest.mock('govuk-react-jsx', () => ({
  Select: ({ ...args }) => {
    return <select {...args}></select>;
  },
}));

test('renders modal', () => {
  act(() => {
    testRender(
      <Modal
        tableHead={[]}
        tableBody={[]}
        selectOption={{}}
        showHandle={() => {}}
        show={false}
        selectedTasks={[]}
        updateType="/tasks"
      />,
      container
    );
  });
});

test('renders modal updateCases', () => {
  act(() => {
    window.confirm = jest.fn().mockImplementation(() => true);
    jest.spyOn(api, 'updateCases').mockResolvedValue(testCase1);
    testRender(
      <Modal
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectOption={selectOption}
        showHandle={() => {}}
        show={true}
        selectedTasks={[selectedTask]}
        updateType="/cases"
      />,
      container
    );
  });
  fireEvent.change(container.querySelector('.select-element'), {
    target: {
      value: '2',
    },
  });

  fireEvent.click(container.querySelector('.radio-change'), {
    target: {
      checked: false,
    },
  });
  fireEvent.click(container.querySelector('.assignClick'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders modal updateCases confirm false', () => {
  act(() => {
    window.confirm = jest.fn().mockImplementation(() => false);
    jest.spyOn(api, 'updateCases').mockResolvedValue(testCase1);
    testRender(
      <Modal
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectOption={selectOption}
        showHandle={() => {}}
        show={true}
        selectedTasks={[selectedTask]}
        updateType="/cases"
      />,
      container
    );
  });
  fireEvent.change(container.querySelector('.select-element'), {
    target: {
      value: '2',
    },
  });

  fireEvent.click(container.querySelector('.radio-change'), {
    target: {
      checked: false,
    },
  });
  fireEvent.click(container.querySelector('.assignClick'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders modal updateTasks', () => {
  act(() => {
    window.confirm = jest.fn().mockImplementation(() => true);
    jest.spyOn(api, 'updateTasks').mockResolvedValue(testTask1);
    testRender(
      <Modal
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectOption={selectOption}
        showHandle={() => {}}
        show={true}
        selectedTasks={[selectedTask]}
        updateType="/tasks"
      />,
      container
    );
  });
  fireEvent.change(container.querySelector('.select-element'), {
    target: {
      value: '2',
    },
  });

  fireEvent.click(container.querySelector('.radio-change'), {
    target: {
      checked: false,
    },
  });
  fireEvent.click(container.querySelector('.assignClick'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders modal updateTasks confirm false', () => {
  act(() => {
    window.confirm = jest.fn().mockImplementation(() => false);
    jest.spyOn(api, 'updateTasks').mockResolvedValue(testTask1);
    testRender(
      <Modal
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectOption={selectOption}
        showHandle={() => {}}
        show={true}
        selectedTasks={[selectedTask]}
        updateType="/tasks"
      />,
      container
    );
  });
  fireEvent.change(container.querySelector('.select-element'), {
    target: {
      value: '2',
    },
  });

  fireEvent.click(container.querySelector('.radio-change'), {
    target: {
      checked: false,
    },
  });
  fireEvent.click(container.querySelector('.assignClick'));

  expect(window.confirm).toHaveBeenCalled();
});

test('renders modal closeClick tasks', () => {
  act(() => {
    testRender(
      <Modal
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectOption={selectOption}
        showHandle={() => {}}
        show={true}
        selectedTasks={[selectedTask]}
        updateType="/tasks"
      />,
      container
    );
  });

  fireEvent.click(container.querySelector('.closeClick'));
});
