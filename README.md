# 8-kyu-altERnaTIng-cAsE-ALTerNAtiNG-CaSe
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
<br>
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
<br><br>
"hello world".toAlternatingCase() === "HELLO WORLD"
<br>
"HELLO WORLD".toAlternatingCase() === "hello world"
<br>
"hello WORLD".toAlternatingCase() === "HELLO world"
<br>
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
<br>
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
<br><br>
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
<br>
As usual, your function/method should be pure, i.e. it should not mutate the original string.
