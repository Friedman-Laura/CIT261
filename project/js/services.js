    var header = document.querySelector('#servicesheader');
    var section = document.querySelector('#serviceslist');
    var requestURL = 'json/services.json';
    var mgServices = null;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        if (navigator.userAgent.match(/msie|trident/i) ) {
            mgServices = JSON.parse(request.responseText);
        }
        else {
            mgServices = request.response;
        }
        populateHeader(mgServices);
        showServices(mgServices);
    }    
    
    function populateHeader(jsonObj) {
      var myTitle = document.createElement('blockquote');
      myTitle.textContent = jsonObj['sectionTitle'];
      header.appendChild(myTitle);
      var mySubtitle = document.createElement('p');
      mySubtitle.textContent = 'Available: ' + jsonObj['available'] + ' // Founded: ' + jsonObj['founded'];
      header.appendChild(mySubtitle);
    }
        
    function showServices(jsonObj) {
      var services = jsonObj['services'];
      var svcRows = services.length;
      var svcRows = Math.ceil(svcRows / 3);
      var keepGoing = true;
      var currColCount = 0;
      while (keepGoing) {
            var myRow = document.createElement('div');
            myRow.className = 'row';
            for(var i = currColCount; i < currColCount + 3; i++) {
                if (i < services.length) {
                    var myDiv = document.createElement('div');
                    var mySection = document.createElement('section');

                    var myH5 = document.createElement('h5');
                    var myImage = document.createElement('img');
                    var myH6 = document.createElement('h6');
                    var myPara2 = document.createElement('p');

                    myDiv.className = 'col-30';
                    mySection.className = 'services-container';
                    myH5.textContent = services[i].name;
                    myImage.src = services[i].svcImage;
                    myImage.textContent = services[i].svcImage;
                    myH6.textContent = services[i].subTitle;
                    myPara2.textContent = services[i].description;

                    mySection.appendChild(myH5);
                    mySection.appendChild(myImage);
                    mySection.appendChild(myH6);
                    mySection.appendChild(myPara2);
                    myDiv.appendChild(mySection);
                    myRow.appendChild(myDiv);
                    section.appendChild(myRow);
                }
                else {
                    keepGoing = false;
                }
            }
          currColCount = i;
          svcRows -= 1;
          if (svcRows == 0 || currColCount == services.length) {
              keepGoing = false;
          }
      }
    }