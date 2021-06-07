mapboxgl.accessToken = // eslint-disable-line
  'pk.eyJ1IjoiaW5zdGl0dXRvZXNjb2xoYXMiLCJhIjoiY2twOHQ1ZjhrMGJpcTJxbWtqb3gwZHBsNSJ9.OZWZPYM3qCOgwbpwB_SYEQ';



var mapLayers = {
  'map1-C1-AWY': ['C1-AWY'], // Produção de água
  'map1-C1-SDR': ['C1-SDR'], // Regulação da erosão
  'map1-C1-UFM': ['C1-UFM'], // Mitigação de inundações
  'map1-C1-UCM': ['C1-UCM'], // Mitigação de calor
  'map1-C1-ALI': ['C1-ALI'], // Provisão de alimentos
  'map1-C1-USO-SOLO': ['C1-USO-SOLO'], // Outros usos do solo

  'map1-BAU-AWY': ['BAU-AWY'],
  'map1-BAU-SDR': ['BAU-SDR'],
  'map1-BAU-UFM': ['BAU-UFM'],
  'map1-BAU-UCM': ['BAU-UCM'],
  'map1-BAU-ALI': ['BAU-ALI'],
  'map1-BAU-USO-SOLO': ['BAU-USO-SOLO'],

  'map2-2019-AWY': ['2019-AWY'],
  'map2-2019-SDR': ['2019-SDR'],
  'map2-2019-UFM': ['2019-UFM'],
  'map2-2019-UCM': ['2019-UCM'],
  'map2-2019-ALI': ['2019-ALI'],
  'map2-2019-USO-SOLO': ['2019-USO-SOLO'],
};

var map1 = new mapboxgl.Map({
  container: 'map1-map-container',
  style: 'mapbox://styles/institutoescolhas/ckp8ta00l19e017oeiwcw0rzv', // stylesheet location
  center: [-46.594710, -23.669668], // starting position [lng, lat]
  zoom: 9.5, // starting zoom
  minZoom: 8,
  maxZoom: 13,
  maxBounds: [
    [-48.7, -25.5], // Southwest coordinates
    [-43.5, -22.0], // Northeast coordinates
  ],
});

var map2 = new mapboxgl.Map({
  container: 'map2-map-container',
  style: 'mapbox://styles/institutoescolhas/ckpeo67580fcx17pbetw6jwyh', // stylesheet location
  center: [-46.594710, -23.669668], // starting position [lng, lat]
  zoom: 9.5, // starting zoom
  minZoom: 8,
  maxZoom: 13,
  maxBounds: [
    [-48.7, -25.5], // Southwest coordinates
    [-43.5, -22.0], // Northeast coordinates
  ],
});

var mapInstances = {
  '#map1': map1,
  '#map2': map2,
};


const graph1Data = {
  labels: [
    'Provisão de alimentos',
    'Produção de água',
    'Mitigação de inundações',
    'Mitigação de calor',
    'Regulação de erosão'
  ],
  datasets: [{
    label: '1985',
    data: [0, 0, 0, 0, 0],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(245, 132, 95, 0.2)',
    borderColor: 'rgb(245, 132, 95)',
    pointBackgroundColor: 'rgb(245, 132, 95)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(245, 132, 95)'
  }, {
    label: '2019',
    data: [-22.7, -24.7, -4.4, -5.5, -0.02684536061],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(75, 95, 69, 0.2)',
    borderColor: 'rgb(75, 95, 69)',
    pointBackgroundColor: 'rgb(75, 95, 69)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(75, 95, 69)'
  }]
};

const graph2Data = {
  labels: [
    'Provisão de alimentos',
    'Produção de água',
    'Mitigação de inundações',
    'Mitigação de calor',
    'Regulação de erosão'
  ],
  datasets: [{
    label: '1985',
    data: [0, 0, 0, 0, 0],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(245, 132, 95, 0.2)',
    borderColor: 'rgb(245, 132, 95)',
    pointBackgroundColor: 'rgb(245, 132, 95)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(245, 132, 95)'
  }, {
    label: '2019',
    data: [-22.7, -24.7, -4.4, -5.5, -0.02684536061],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(75, 95, 69, 0.2)',
    borderColor: 'rgb(75, 95, 69)',
    pointBackgroundColor: 'rgb(75, 95, 69)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(75, 95, 69)'
  }, {
    label: 'BAU',
    data: [-20.83405803, -28.5, -5.5, -7.4, 0.4414316384],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(184, 183, 94, 0.2)',
    borderColor: 'rgb(184, 183, 94)',
    pointBackgroundColor: 'rgb(184, 183, 94)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(184, 183, 94)'
  }, {
    label: 'Cenário 1',
    data: [-19.32431192, -28.7, -4.8, -5.5, 0.7740484121],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(47, 56, 70, 0.2)',
    borderColor: 'rgb(47, 56, 70)',
    pointBackgroundColor: 'rgb(47, 56, 70)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(47, 56, 70)'
  }]
};

var graph1 = new Chart(
  document.getElementById('graph1'),
  {
    type: 'radar',
    data: graph1Data,
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: -25,
          suggestedMax: 0
        }
      },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  }
);

var graph2 = new Chart(
  document.getElementById('graph2'),
  {
    type: 'radar',
    data: graph2Data,
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: -25,
          suggestedMax: 0
        }
      },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  }
);

var carouselElements = document.querySelectorAll('.main-carousel');
Array.prototype.forEach.call(carouselElements, function (el) {
  var flkty = new Flickity(el, {
    // options
    cellAlign: 'left',
    imagesLoaded: true,
    // autoPlay: true,
    // adaptiveHeight: false,
    // setGallerySize: true,
    wrapAround: true,
    freeScroll: false,
    pageDots: false
  });
});

document.addEventListener('DOMContentLoaded', function () {

  // SVG tooltip
  var rmspSvg = document.querySelector('#map-rmsp-svg');
  rmspSvg.addEventListener("load",function(){
    var tooltip = document.querySelector('#map-rmsp-tooltip');
    var classes = {
      'igual': '=',
      'menos': '↓',
      'mais': '↑',
    }
    var rmspDoc = rmspSvg.contentDocument;
    var elements = rmspDoc.querySelectorAll(".st0, .st1, .st2, .st3, .st4");
    Array.prototype.forEach.call(elements, function (el) {
      el.addEventListener("mousemove", function (e) {
        tooltip.style.top = (rmspSvg.offsetTop + e.pageY - tooltip.clientHeight - 15) + 'px';
        tooltip.style.left = (rmspSvg.offsetLeft + e.pageX - tooltip.clientWidth/2) + 'px';
      });
      el.addEventListener("mouseover", function (e) {
        e.preventDefault();
        let element = e.currentTarget;
        let title = element.getAttribute("data-title");

        tooltipTitle = tooltip.querySelector('.title');
        tooltipTitle.innerHTML = title;

        let names = ['producao-agua', 'regulacao-erosao', 'mitigacao-calor', 'mitigacao-inundacao', 'provisao-alimentos'];
        Array.prototype.forEach.call(names, function (name) {
          let value = element.getAttribute("data-" + name);
          let tooltipProp = tooltip.querySelector('.' + name);
          tooltipProp.innerHTML = classes[value];
        });
      });
    });
  }, false);

  // Hide Modal
  let closeButtons = document.querySelectorAll('.close-nav a');
  Array.prototype.forEach.call(closeButtons, function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      let element = e.currentTarget;
      let targetName = element.getAttribute('data-target');
      let targetElement = document.getElementById(targetName);
      targetElement.style.display = 'none';
    });
  });

  // Display Modal
  let openModalElements = document.querySelectorAll('.open-modal a');
  Array.prototype.forEach.call(openModalElements, function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      let element = e.currentTarget;
      let targetName = element.getAttribute('data-target');
      let targetElement = document.getElementById(targetName);
      targetElement.style.display = 'block';
    });
  });

  // Mapbox
  for (var elementID in mapInstances) {
    let selector = elementID + ' .map-controls li a';
    let elements = document.querySelectorAll(selector);
    let mapInstance = mapInstances[elementID];

    // Standard behavior
    mapInstance.addControl(new mapboxgl.NavigationControl());
    mapInstance.scrollZoom.disable();

    // Layer controls
    Array.prototype.forEach.call(elements, function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        let element = e.currentTarget;
        let layerId = element.id;

        Array.prototype.forEach.call(mapLayers[layerId], function (layer) {
          var visibility = mapInstance.getLayoutProperty(layer, 'visibility');
          if (visibility === 'visible') {
            element.classList.remove('active');
            mapInstance.setLayoutProperty(layer, 'visibility', 'none');
          } else {
            element.classList.add('active');
            mapInstance.setLayoutProperty(layer, 'visibility', 'visible');
          }
        });
      });
    });
  }




});

// Scroll events
document.addEventListener('scroll', function () {

  // console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

  document.body.style.setProperty(
    "--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );

  var topHeader = document.getElementById('top-header');
  var element = this.scrollingElement;
  if (element.scrollTop > 145) {
    topHeader.classList.add('active');
  } else {
    topHeader.classList.remove('active');
  }
});
