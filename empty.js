var urls = [
    "https://raw.githubusercontent.com/WurzelRoot/AdventureLand/master/lib/status.js", 
    "https://raw.githubusercontent.com/WurzelRoot/AdventureLand/master/lib/actions/attack.js"
  ];
  
  // https://www.w3schools.com/xml/dom_httprequest.asp
  function loadURLs( url ) {
    var ajax = new XMLHttpRequest();
    ajax.open( 'GET', url, false ); // <-- the 'false' makes it synchronous
    ajax.onreadystatechange = function () {
      var script = ajax.response || ajax.responseText;
      if (ajax.readyState === 4) {
        switch( ajax.status) {
          case 200:
            eval.apply( window, [script] );
            game_log("SUCCESS: Script Loaded! ", url);
            break;
          default:
            game_log("ERROR: Script Not Loaded. ", url);
        }
      }
    };
    ajax.send(null);
  }
  
  loadURLs(urls);