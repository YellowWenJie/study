import ModalTable from './ModalTable';
import { act } from 'react-dom/test-utils';
import { render as testRender, unmountComponentAtNode } from 'react-dom';
import { tableBodyContents } from '../../helpers/test';

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

test('renders ModalTable change', () => {
  act(() => {
    testRender(
      <ModalTable
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectAgentId={() => {}}
      />,
      container
    );
  });
});

test('renders ModalTable', () => {
  act(() => {
    testRender(
      <ModalTable
        tableHead={['Queue ID', 'Queue name']}
        tableBody={tableBodyContents}
        selectAgentId={() => {}}
      />,
      container
    );
  });
});
