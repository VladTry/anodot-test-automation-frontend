- [Overview](#overview)
- [Setup configuration](#setup-configuration)
- [Test cases](#test-cases)
    - [Test case # 1](#Test-case-#-1)
    - [Test case # 2](#Test-case-#-2)
    - [Test case # 3](#Test-case-#-3)
## Overview
The goal of the test to check that [Temperature Converter](https://www.theonlineconverter.co.uk/temperature-converter/) feature works properly and UI elements placed correctly.

## Setup configuration
-

## Test
Test verify that UI elements on [Temperature Converter](https://www.theonlineconverter.co.uk/temperature-converter/) is placed properly.

## Test cases
### Test case # 1 - Verify default values on Temperature Converter page.
1. Verify header.
2. Verify all static text beside Conversion section.
3. Verify that 'userInput', 'convertFrom', 'convertTo', 'Go' and 'answer' in 'Conversion section' have default values.

### Test case # 2 - negative scenario - Verify 'Conversion section' on Temperature Converter page.
1. Type "qwerty" in 'input'
2. Change 'convertTo' to value 1 ('degree Fahrenheit') 
3. Verify that 'input' value equal 0 
4. Verify that 'answer' value equal '0 degree Celsius = 32 degree Fahrenheit'

### Test case # 3 - positive scenario - Verify 'Conversion section' on Temperature Converter page.
1. Type 12 in 'input'
2. Change 'convertFrom' to value 1 ('degree Fahrenheit')
3. Change 'convertTo' to value 3 ('degree Reaumur')
4. Verify that 'input' value equal 12
5. Verify that 'answer' value equal '12 degree Fahrenheit = -8.8888889 degree Reaumur'

