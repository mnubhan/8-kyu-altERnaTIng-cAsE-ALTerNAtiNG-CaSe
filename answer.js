String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

  new_str = "";
  for(var i = 0; i < this.length; i++) {
    if(this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    }
    else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
}
