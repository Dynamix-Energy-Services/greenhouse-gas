# greenhouse-gas
A Greenhouse Gas Equivalency Calculator

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
CG.calculateEquivalency(100)
=> [ { value: 7.955440531112861,
    units: 'gallon of gasoline',
    description: 'gallons of gasoline consumed' },
  { value: 6.944990176817289,
    units: 'gallon of diesel',
    description: 'gallons of diesel consumed' },
  { value: 0.015010615711252654,
    units: 'vehicle',
    description: 'passenger vehicles driven for one year' },
  { value: 172.8606356968215,
    units: 'vehicle',
    description: 'miles driven by an average passenger vehicle' },
  { value: 1.2831215970961887,
    units: 'therm',
    description: 'therms and Mcf of natural gas' },
  { value: 0.1644186046511628,
    units: 'barrel',
    description: 'barrels of oil consumed' },
  { value: 0.0009359279851734179,
    units: 'tanker truck',
    description: 'tanker trucks worth of gasoline' },
  { value: 2.6882129277566538,
    units: 'bulb replaced',
    description: 'incandescent lamps switch to LEDs' },
  { value: 0.01232996163236833,
    units: 'home',
    description: 'homes powered for a year' },
  { value: 0.008467065868263473,
    units: 'home',
    description: 'homes\' energy use for one year' },
  { value: 1.1783333333333335,
    units: 'urban tree planted',
    description: 'urban tree seedlings grown for 10 years' },
  { value: 0.0831764705882353,
    units: 'acre of average U.S. forest',
    description: 'acres of U.S. forests storing carbon for one year' },
  { value: 0.0005737704918032787,
    units: 'acre',
    description:
     'acres of U.S. forests preserved from conversion to cropland in one year' },
  { value: 2.9458333333333333,
    units: 'cylinder',
    description: 'propane cylinders used for home barbeques' },
  { value: 0.0003857275355993235,
    units: 'railcar',
    description: 'railcars of coal burned' },
  { value: 77.26775956284153,
    units: 'pound of coal',
    description: 'pounds of coal burned' },
  { value: 0.024634146341463412,
    units: 'ton of waste recycled instead of landfilled',
    description: 'tons of waste recycled instead of landfilled' },
  { value: 0.0035226706527154957,
    units: 'garbage truck of waste recycled instead of landfilled',
    description:
     'number of garbage trucks of waste recycled instead of landfilled' },
  { value: 3.0873362445414845,
    units: 'trash bag of waste recycled instead of landfilled',
    description: 'trash bags of waste recycled instead of landfilled' },
  { value: 1.8160786183978727e-8,
    units: 'power plant',
    description: 'coal-fired power plants in one year' },
  { value: 0.000014981987709260436,
    units: 'year',
    description: 'wind turbines running for a year' },
  { value: 9017.857142857143,
    units: 'smartphone charged',
    description: 'number of smartphones charged' } ]
```
