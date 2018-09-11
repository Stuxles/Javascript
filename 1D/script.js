var array = ["Banaan", "Appel", "Druif", "Suiker", "Bier", "Worst", "Melk", "Kaas", "Chips", "Koek"]

for (var i = 0; i < array.length; i++) {
  document.write("<p>"+array[i]+"</p>")
}

function uClicked(){
  array[inputnum.value] = input.value;
  for (var i = 0; i < array.length; i++) {
    document.write("<p>"+array[i]+"</p>")
  }
}
