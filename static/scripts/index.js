mapboxgl.accessToken = // eslint-disable-line
  'pk.eyJ1IjoiaW5zdGl0dXRvZXNjb2xoYXMiLCJhIjoiY2twOHQ1ZjhrMGJpcTJxbWtqb3gwZHBsNSJ9.OZWZPYM3qCOgwbpwB_SYEQ';

var mapLayers = {
  'comercializacao-eq-abastecimento': ['eq-abastecimento'],
  'comercializacao-escola-publica': ['escola-publica'],
  'comercializacao-hex-misto-innat': ['hex-misto-innat'],
  'comercializacao-hex-ultra': ['hex-ultra'],
  'agricultura-estabelecimentos-agro': ['estabelecimentos-agro'],
  'agricultura-producao-vbp': ['producao-vbp'],
  'agricultura-areas-ambientais': [
    'areas-ambientais-UCI',
    'areas-ambientais-UCS',
    'areas-ambientais-MAN',
    'areas-ambientais-PRO',
    'areas-ambientais-VER',
  ],
  'sintese-eq-abastecimento': ['eq-abastecimento'],
  'sintese-escola-publica': ['escola-publica'],
  'sintese-hex-misto-innat': ['hex-misto-innat'],
  'sintese-hex-ultra': ['hex-ultra'],
  'sintese-estabelecimentos-agro': ['estabelecimentos-agro'],
  'sintese-producao-vbp': ['producao-vbp'],
  'sintese-areas-ambientais': [
    'areas-ambientais-UCI',
    'areas-ambientais-UCS',
    'areas-ambientais-MAN',
    'areas-ambientais-PRO',
    'areas-ambientais-VER',
  ],
  'sintese-ipvs': ['ipvs'],
  'sintese-uso-mapbiomas': ['uso-mapbiomas'],
  'sintese-dens-pop': ['dens-pop'],
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
  style: 'mapbox://styles/institutoescolhas/ckpaj4t8k056l18qe3b2bob4p', // stylesheet location
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
    'Provisão de Alimentos',
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
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: '2019',
    data: [-22.7, -16.68319427, -4.4, -5.5, -0.02684536061],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const graph2Data = {
  labels: [
    'Provisão de Alimentos',
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
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: '2019',
    data: [-22.7, -16.68319427, -4.4, -5.5, -0.02684536061],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }, {
    label: 'BAU',
    data: [-20.83405803, -20.07071796, -5.5, -7.4, 0.4414316384],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(347, 94, 65, 0.2)',
    borderColor: 'rgb(347, 94, 65)',
    pointBackgroundColor: 'rgb(347, 94, 65)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(347, 94, 65)'
  }, {
    label: 'Cenário 1',
    data: [-19.32431192, -20.60088725, -4.8, -5.5, 0.7740484121],
    fill: false,
    tension: 0.25,
    backgroundColor: 'rgba(75, 81, 96, 0.2)',
    borderColor: 'rgb(75, 81, 96)',
    pointBackgroundColor: 'rgb(75, 81, 96)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(75, 81, 96)'
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


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  // adaptiveHeight: false,
  // setGallerySize: false,
  wrapAround: true,
  freeScroll: false,
  pageDots: false
});

document.addEventListener('DOMContentLoaded', function () {

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
