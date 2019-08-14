/**
 * Copyright (c) Dynamix Energy Services. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */


const ConversionFactors = {
  electricity: {
    value: 7.07e-4,
    units: 'metric tons CO₂/kWh',
    description: 'metric tons of CO₂',
  },
};

const EmissionFactors = {
  gasoline: {
    value: 8.887e-3,
    units: 'metric tons CO₂/gallon of gasoline',
    description: 'gallons of gasoline consumed',
  },
  diesel: {
    value: 10.180e-3,
    units: 'metric tons CO₂/gallon of diesel',
    description: 'gallons of diesel consumed',
  },
  vehicles: {
    value: 4.71,
    units: 'metric tons CO₂E/vehicle/year',
    description: 'passenger vehicles driven for one year',
  },
  miles: {
    value: 4.09e-4,
    units: 'metric tons CO₂E/vehicle',
    description: 'miles driven by an average passenger vehicle',
  },
  therm: {
    value: 0.0551,
    units: 'metric tons CO₂/therm',
    description: 'therms and Mcf of natural gas',
  },
  oil: {
    value: 0.43,
    units: 'metric tons CO₂/barrel',
    description: 'barrels of oil consumed',
  },
  tanker: {
    value: 75.54,
    units: 'metric tons CO₂/tanker truck',
    description: 'tanker trucks worth of gasoline',
  },
  leds: {
    value: 2.63e-2,
    units: 'metric tons CO₂/bulb replaced',
    description: 'incandescent lamps switch to LEDs',
  },
  homes_kwh: {
    value: 5.734,
    units: 'metric tons CO₂/home',
    description: 'homes powered for a year',
  },
  homes: {
    value: 8.35,
    units: 'metric tons CO₂/home/year',
    description: 'homes\' energy use for one year',
  },
  trees: {
    value: 0.060,
    units: 'metric tons CO₂/urban tree planted',
    description: 'urban tree seedlings grown for 10 years',
  },
  forest: {
    value: 0.85,
    units: 'metric tons CO₂/acre of average U.S. forest',
    description: 'acres of U.S. forests storing carbon for one year',
  },
  forest_preserved: {
    value: 123.22,
    units: 'metric tons CO₂/acre/year',
    description: 'acres of U.S. forests preserved from conversion to cropland in one year',
  },
  propane: {
    value: 0.024,
    units: 'metric tons CO₂/cylinder',
    description: 'propane cylinders used for home barbeques',
  },
  coal_rail: {
    value: 183.29,
    units: 'metric tons CO₂/railcar',
    description: 'railcars of coal burned',
  },
  coal: {
    value: 9.15e-4,
    units: 'metric tons CO₂/pound of coal',
    description: 'pounds of coal burned',
  },
  recycling: {
    value: 2.87,
    units: 'metric tons CO₂/ton of waste recycled instead of landfilled',
    description: 'tons of waste recycled instead of landfilled',
  },
  garbage_trucks: {
    value: 20.07,
    units: 'metric tons CO₂E/garbage truck of waste recycled instead of landfilled',
    description: 'number of garbage trucks of waste recycled instead of landfilled',
  },
  trash_bags: {
    value: 2.29e-2,
    units: 'metric tons CO₂/trash bag of waste recycled instead of landfilled',
    description: 'trash bags of waste recycled instead of landfilled',
  },
  coal_power: {
    value: 3893003.27,
    units: 'metric tons CO₂/power plant',
    description: 'coal-fired power plants in one year',
  },
  wind: {
    value: 4719,
    units: 'metric tons CO₂/year/wind turbine installed',
    description: 'wind turbines running for a year',
  },
  phones: {
    value: 7.84e-6,
    units: 'metric tons CO₂/smartphone charged',
    description: 'number of smartphones charged',
  },
};

function calculateC02(kwh) {
  return ConversionFactors.electricity.value * kwh;
}

function calculateEquivalency(kwh, options) {
  const opts = options || {};
  const keyList = opts.keyList || Object.keys(EmissionFactors);
  const co2 = calculateC02(kwh);
  return keyList.map((key) => {
    const conversion = EmissionFactors[key];
    return {
      name: key,
      value: co2 / conversion.value,
      units: conversion.units.split('/')[1],
      description: conversion.description,
    };
  });
}

module.exports = {
  calculateC02,
  calculateEquivalency,
  ConversionFactors,
  EmissionFactors,
};
