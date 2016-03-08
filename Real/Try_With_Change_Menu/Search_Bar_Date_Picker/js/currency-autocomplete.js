$(function(){
  var currencies = [
    { value: 'Mumbai', data: 'Mumbai' },
    { value: 'Bangalore', data: 'Bangalore' },
    { value: 'Indore', data: 'Indore' },
    { value: 'Bhopal', data: 'Bhopal' },
    { value: 'Delhi', data: 'Delhi' },
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});