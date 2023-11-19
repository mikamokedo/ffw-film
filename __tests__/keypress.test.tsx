import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useKeyPress } from '@movie/utils/keyPress';
import { expect, describe, it } from '@jest/globals';

describe('keypress', () => {
  it('useKeyPress hook works as expected', () => {
    const TestComponent = ({ targetKey }: { targetKey: string }) => {
      const keyPressed = useKeyPress(targetKey);

      return (
        <div>
          <span data-testid="key-status">
            {keyPressed ? 'Key Pressed' : 'Key Not Pressed'}
          </span>
        </div>
      );
    };

    const { getByTestId } = render(<TestComponent targetKey="a" />);

    const keyStatusElement = getByTestId('key-status');
    expect(keyStatusElement).toHaveTextContent('Key Not Pressed');

    fireEvent.keyDown(window, { key: 'a' });
    expect(keyStatusElement).toHaveTextContent('Key Pressed');

    fireEvent.keyUp(window, { key: 'a' });
    expect(keyStatusElement).toHaveTextContent('Key Not Pressed');

    //wrong key
    fireEvent.keyUp(window, { key: 'b' });
    expect(keyStatusElement).toHaveTextContent('Key Not Pressed');
  });
});
