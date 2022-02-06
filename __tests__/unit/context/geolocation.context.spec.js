import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {
  GeoLocationProvider,
  useGeoLocation,
} from '../../../src/context/geolocation.context';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

describe('Testing geolocation context', () => {
  const Provider = ({ children }) => {
    return <GeoLocationProvider>{children}</GeoLocationProvider>;
  };

  it('should test functions on provider', async () => {
    const TestingProvider = () => {
      const { getGeoLocation } = useGeoLocation();

      return (
        <>
          <TouchableOpacity testID="button-test-case" onPress={getGeoLocation}>
            <Text>Button</Text>
          </TouchableOpacity>
        </>
      );
    };

    const { getByTestId } = render(<TestingProvider />, {
      wrapper: Provider,
    });
    const button = getByTestId('button-test-case');

    waitFor(() => fireEvent.press(button));
    expect(button).not.toBe(null);
  });
});
