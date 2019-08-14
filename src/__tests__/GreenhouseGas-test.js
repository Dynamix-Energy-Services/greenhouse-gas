/**
 * Copyright (c) Dynamix Energy Services. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */


const GreenhouseGas = require('greenhouse-gas');

describe('GreenhouseGas', () => {
  describe('calculateC02', () => {
    it('should calculate C02 from kwh', () => {
      const fake_kwh = 12590212;
      const result = GreenhouseGas.calculateC02(fake_kwh);

      expect(result.toFixed(6)).toEqual('8901.279884');
    });
  });

  describe('calculateEquivalency', () => {
    it('should perform all calculations from kwh', () => {
      const fake_kwh = 43998352;
      const result = GreenhouseGas.calculateEquivalency(fake_kwh);

      const expected_values = [
        '3500262.728',
        '3055681.224',
        '6604.424',
        '76055830.963',
        '564552.357',
        '72341.476',
        '411.793',
        '1182769.386',
        '5424.980',
        '3725.369',
        '518447.248',
        '36596.276',
        '252.450',
        '1296118.119',
        '169.714',
        '33996540.835',
        '10838.618',
        '1549.917',
        '1358377.068',
        '0.008',
        '6.592',
        '3967708528.571',
      ];

      result.map((res, idx) => {
        expect(res.value.toFixed(3)).toEqual(expected_values[idx]);
      });
    });

    it('should perform calculations for a given keyList', () => {
      const fake_kwh = 200;
      const fake_opts = {
        keyList: ['gasoline']
      }
      const result = GreenhouseGas.calculateEquivalency(fake_kwh, fake_opts)

      expect(result.length).toBe(1)
      expect(result[0]).toStrictEqual({
        name: 'gasoline',
        units: 'gallon of gasoline',
        value: 15.910881062225721,
        description: 'gallons of gasoline consumed'
      })
    })
  });
});
