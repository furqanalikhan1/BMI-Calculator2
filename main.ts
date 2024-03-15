//     bmi Calculator  useing  inqurer prompet

import inquirer from "inquirer";

const question=[
    {type:'Number',name : 'weight',message :'weight(kg):'},
    {type:'Number',name : 'height',message :'height(m):'},

];
const CalculatorBMI =(weight :Number, height :Number):Number => weight (height*height);