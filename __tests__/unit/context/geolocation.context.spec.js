import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  GeoLocationContext,
  GeoLocationProvider,
  useGeoLocation,
} from '../../../src/context/geolocation.context';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

describe('Testing geolocation context', () => {
  const Provider = ({ children }) => {
    return <GeoLocationProvider>{children}</GeoLocationProvider>;
  };

  it('should functions on provider', async () => {
    jest.mock(
      '../../../node_modules/@react-native-community/geolocation/js',
      () => ({
        getCurrentPosition: function () {
          throw 'Error to get current function';
        },
      })
    );

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

    const { getByTestId, rerender } = render(<TestingProvider />, {
      wrapper: Provider,
    });
    const button = getByTestId('button-test-case');

    rerender(<TestingProvider />, { wrapper: Provider });

    waitFor(() => fireEvent.press(button));

    expect(button).not.toBe(null);
  });
});
