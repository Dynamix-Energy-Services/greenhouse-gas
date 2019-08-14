# ![Greenhouse Gas](logo.jpg) greenhouse-gas
A Greenhouse Gas Equivalency Calculator

[![CircleCI](https://circleci.com/gh/Dynamix-Energy-Services/greenhouse-gas/tree/master.svg?style=svg)](https://circleci.com/gh/Dynamix-Energy-Services/greenhouse-gas/tree/master) [![codecov](https://codecov.io/gh/Dynamix-Energy-Services/greenhouse-gas/branch/master/graph/badge.svg)](https://codecov.io/gh/Dynamix-Energy-Services/greenhouse-gas)

This package is intended to provide an equivalency model for energy calculations. It's common to try to compare energy savings or reduction in analogous quantities. This library provides the conversion specification for doing so. All of these calculations are using those referenced by the US EPA [here](https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references). These include the following:
- gallons of gasoline consumed
- gallons of diesel consumed
- passenger vehicles driven for one year
- miles driven by an average passenger vehicle
- therms and Mcf of natural gas
- barrels of oil consumed
- tanker trucks worth of gasoline
- incandescent lamps switch to LEDs
- homes powered for a year
- homes' energy use for one year
- urban tree seedlings grown for 10 years
- acres of U.S. forests storing carbon for one year
- acres of U.S. forests preserved from conversion to cropland in one year
- propane cylinders used for home barbeques
- railcars of coal burned
- pounds of coal burned
- tons of waste recycled instead of landfilled
- number of garbage trucks of waste recycled instead of landfilled
- trash bags of waste recycled instead of landfilled
- coal-fired power plants in one year
- wind turbines running for a year
- number of smartphones charged

This libary allows for the input of the following forms of energy:
- Kilowatt-hour (kWh)

### Installation
```
$ npm install greenhouse-gas
```

### Usage
```javascript
var GG = require('greenhouse-gas');

// Calculate tons of C02 from kWh
GG.calculateC02(100)
=> .0707

// Perform Equivalency Calc
CG.calculateEquivalency(100, {keyList: ['gasoline', 'diesel', 'vehicles']})
=> [ { name: 'gasoline',
    value: 7.955440531112861,
    units: 'gallon of gasoline',
    description: 'gallons of gasoline consumed' },
  { name: 'diesel',
    value: 6.944990176817289,
    units: 'gallon of diesel',
    description: 'gallons of diesel consumed' },
  { name: 'vehicles',
    value: 0.015010615711252654,
    units: 'vehicle',
    description: 'passenger vehicles driven for one year' } ]
```
